from __future__ import annotations

import argparse
import uuid
from pathlib import Path

from .models import CreateJobRequest
from .pipeline import run_job
from .store import init_job, read_status


def main() -> None:
    parser = argparse.ArgumentParser(description="Prompt-to-pano-to-splat pipeline")
    parser.add_argument("prompt", nargs="?")
    parser.add_argument("--size", default="3840x1920")
    parser.add_argument("--quality", default="high", choices=["low", "medium", "high", "auto"])
    parser.add_argument("--output-format", default="png", choices=["png", "jpeg", "webp"])
    parser.add_argument("--source-panorama-path")
    parser.add_argument("--reference-image-url", action="append", default=[])
    parser.add_argument("--reference-image-path", action="append", default=[])
    parser.add_argument("--preset", default="sphere24", choices=["horizon8", "sphere24"])
    parser.add_argument("--crop-size", type=int, default=1024)
    parser.add_argument("--face-fov-deg", type=float, default=80.0)
    parser.add_argument("--no-merge", action="store_true")
    args = parser.parse_args()

    if not args.prompt and not args.source_panorama_path:
        parser.error("provide either a prompt or --source-panorama-path")

    prompt = args.prompt
    if not prompt and args.source_panorama_path:
        prompt = f"Imported panorama: {Path(args.source_panorama_path).name}"

    req = CreateJobRequest(
        prompt=prompt,
        size=args.size,
        quality=args.quality,
        output_format=args.output_format,
        source_panorama_path=args.source_panorama_path,
        reference_image_urls=args.reference_image_url,
        reference_image_paths=args.reference_image_path,
        preset=args.preset,
        crop_size=args.crop_size,
        face_fov_deg=args.face_fov_deg,
        merge=not args.no_merge,
    )
    job_id = uuid.uuid4().hex[:12]
    init_job(job_id, req.prompt)
    print(f"Job {job_id} queued")
    run_job(job_id, req, reporter=lambda message: print(f"[{job_id}] {message}", flush=True))
    print(read_status(job_id))


if __name__ == "__main__":
    main()
