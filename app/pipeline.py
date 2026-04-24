from __future__ import annotations

import traceback
from collections.abc import Callable
from pathlib import Path

from PIL import Image

from .equirect import equirect_to_perspective
from .models import CreateJobRequest, JobState
from .openai_images import generate_panorama
from .ply_merge import merge_sharp_plys
from .sharp_runner import run_sharp_predict
from .store import add_artifact, job_dir, write_status

Reporter = Callable[[str], None]


def _import_existing_panorama(source_path: str, dest_path: Path) -> Path:
    source = Path(source_path).expanduser().resolve()
    if not source.exists() or source.is_dir():
        raise FileNotFoundError(f"Panorama file not found: {source}")

    with Image.open(source) as img:
        rgb = img.convert("RGB")
        ratio = rgb.width / rgb.height
        if abs(ratio - 2.0) > 0.02:
            raise RuntimeError(
                f"Existing panorama must be equirectangular and close to 2:1, got {rgb.width}x{rgb.height}"
            )
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        rgb.save(dest_path, format="PNG")
    return dest_path


def run_job(job_id: str, req: CreateJobRequest, reporter: Reporter | None = None) -> None:
    root = job_dir(job_id)
    pano_path = root / "panorama.png"
    faces_dir = root / "faces"
    plys_dir = root / "sharp_plys"
    out_ply = root / "world.ply"

    def report(message: str) -> None:
        if reporter:
            reporter(message)

    try:
        if req.source_panorama_path:
            message = "Importing existing panorama"
            write_status(job_id, state=JobState.running.value, message=message)
            report(message)
            _import_existing_panorama(req.source_panorama_path, pano_path)
        else:
            message = "Generating equirectangular panorama with GPT Image 2"
            write_status(job_id, state=JobState.running.value, message=message)
            report(message)
            generate_panorama(
                req.prompt,
                pano_path,
                size=req.size,
                quality=req.quality,
                output_format=req.output_format,
            )
        add_artifact(job_id, "panorama", "panorama.png")

        message = "Splitting panorama into perspective crops"
        write_status(job_id, message=message)
        report(message)
        equirect_to_perspective(
            pano_path,
            faces_dir,
            preset=req.preset,
            crop_size=req.crop_size,
            fov_deg=req.face_fov_deg,
        )
        add_artifact(job_id, "faces_manifest", "faces/faces.json")

        message = "Running Apple SHARP on perspective crops"
        write_status(job_id, message=message)
        report(message)
        plys = run_sharp_predict(faces_dir, plys_dir)
        if not plys:
            raise RuntimeError("SHARP finished without writing any .ply files")
        add_artifact(job_id, "sharp_plys_dir", "sharp_plys")

        if req.merge:
            message = "Merging per-face PLY files into world.ply"
            write_status(job_id, message=message)
            report(message)
            merge_sharp_plys(faces_dir / "faces.json", plys_dir, out_ply)
            add_artifact(job_id, "world_ply", "world.ply")

        message = "Complete"
        write_status(job_id, state=JobState.complete.value, message=message)
        report(message)
    except Exception as exc:
        (root / "error.txt").write_text(traceback.format_exc())
        add_artifact(job_id, "error", "error.txt")
        write_status(job_id, state=JobState.failed.value, message=str(exc))
        report(f"Failed: {exc}")
