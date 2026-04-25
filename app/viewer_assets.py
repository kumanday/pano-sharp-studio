from __future__ import annotations

import json
import traceback
from pathlib import Path
from typing import Any

from fastapi import BackgroundTasks, HTTPException

from .models import BuildWorldRequest
from .pipeline import run_world_job
from .splat_export import export_ply_to_splat
from .store import add_artifact, job_dir, read_status

VIEWER_DIR_NAME = "viewer"
SPLAT_REL_PATH = f"{VIEWER_DIR_NAME}/world.splat"
MANIFEST_REL_PATH = f"{VIEWER_DIR_NAME}/manifest.json"
STATUS_REL_PATH = f"{VIEWER_DIR_NAME}/status.json"


def _viewer_dir(job_id: str) -> Path:
    return job_dir(job_id) / VIEWER_DIR_NAME


def _status_path(job_id: str) -> Path:
    return job_dir(job_id) / STATUS_REL_PATH


def _splat_path(job_id: str) -> Path:
    return job_dir(job_id) / SPLAT_REL_PATH


def _manifest_path(job_id: str) -> Path:
    return job_dir(job_id) / MANIFEST_REL_PATH


def _world_ply_path(job_id: str) -> Path:
    return job_dir(job_id) / "world.ply"


def _panorama_path(job_id: str) -> Path:
    return job_dir(job_id) / "panorama.png"


def _write_viewer_status(job_id: str, **patch: Any) -> dict[str, Any]:
    path = _status_path(job_id)
    path.parent.mkdir(parents=True, exist_ok=True)
    current: dict[str, Any] = {}
    if path.exists():
        current = json.loads(path.read_text())
    current.update(patch)
    current.setdefault("artifacts", {})
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(current, indent=2))
    tmp.replace(path)
    return current


def _ready_status(job_id: str) -> dict[str, Any]:
    manifest_path = _manifest_path(job_id)
    manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
    return {
        "state": "ready",
        "stage": "ready",
        "message": "High-fidelity render is ready.",
        "artifacts": {
            "viewer_splat": SPLAT_REL_PATH,
            "viewer_manifest": MANIFEST_REL_PATH,
        },
        "manifest": manifest,
    }


def get_viewer_asset_status(job_id: str) -> dict[str, Any]:
    if _splat_path(job_id).exists() and _manifest_path(job_id).exists():
        return _ready_status(job_id)

    path = _status_path(job_id)
    if path.exists():
        return json.loads(path.read_text())

    if _world_ply_path(job_id).exists():
        return {
            "state": "missing",
            "stage": "splat",
            "message": "World geometry exists. Build the browser-ready high-fidelity render.",
            "artifacts": {},
        }

    if _panorama_path(job_id).exists():
        return {
            "state": "missing",
            "stage": "world",
            "message": "Preview is ready. Build the high-fidelity render when you like the scene.",
            "artifacts": {},
        }

    return {
        "state": "missing",
        "stage": "missing",
        "message": "Preview is not available for this job yet.",
        "artifacts": {},
    }


def build_viewer_assets(job_id: str) -> None:
    try:
        world_ply = _world_ply_path(job_id)
        if not world_ply.exists():
            raise FileNotFoundError("world.ply is not available for this job.")

        splat_path = _splat_path(job_id)
        manifest_path = _manifest_path(job_id)
        _write_viewer_status(
            job_id,
            state="preparing",
            stage="splat",
            message="Exporting browser-ready high-fidelity render.",
            artifacts={},
        )

        def report(progress: dict[str, Any]) -> None:
            _write_viewer_status(
                job_id,
                state="preparing",
                stage="splat",
                message=(
                    f"Exporting high-fidelity render: {progress['percent']}% "
                    f"({progress['processed']:,}/{progress['total']:,} render points)"
                ),
                progress=progress,
                artifacts={},
            )

        manifest = export_ply_to_splat(world_ply, splat_path, manifest_path, reporter=report)
        add_artifact(job_id, "viewer_splat", SPLAT_REL_PATH)
        add_artifact(job_id, "viewer_manifest", MANIFEST_REL_PATH)
        _write_viewer_status(
            job_id,
            state="ready",
            stage="ready",
            message=f"High-fidelity render is ready ({manifest['asset_bytes']:,} bytes).",
            artifacts={
                "viewer_splat": SPLAT_REL_PATH,
                "viewer_manifest": MANIFEST_REL_PATH,
            },
            manifest=manifest,
        )
    except Exception as exc:
        error_path = _viewer_dir(job_id) / "error.txt"
        error_path.parent.mkdir(parents=True, exist_ok=True)
        error_path.write_text(traceback.format_exc())
        _write_viewer_status(
            job_id,
            state="failed",
            stage="failed",
            message=str(exc),
            artifacts={"viewer_error": f"{VIEWER_DIR_NAME}/error.txt"},
        )


def build_full_fidelity_viewer(job_id: str, world_req: BuildWorldRequest) -> None:
    try:
        if not _world_ply_path(job_id).exists():
            _write_viewer_status(
                job_id,
                state="preparing",
                stage="world",
                message="Building high-fidelity world with Apple SHARP.",
                artifacts={},
                progress={},
            )

            def report(message: str) -> None:
                _write_viewer_status(
                    job_id,
                    state="preparing",
                    stage="world",
                    message=message,
                    artifacts={},
                    progress={},
                )

            run_world_job(job_id, world_req, reporter=report)
            if not _world_ply_path(job_id).exists():
                status = read_status(job_id)
                detail = status.get("message") or "World build finished without writing world.ply."
                raise RuntimeError(detail)

        build_viewer_assets(job_id)
    except Exception as exc:
        error_path = _viewer_dir(job_id) / "error.txt"
        error_path.parent.mkdir(parents=True, exist_ok=True)
        error_path.write_text(traceback.format_exc())
        _write_viewer_status(
            job_id,
            state="failed",
            stage="failed",
            message=str(exc),
            artifacts={"viewer_error": f"{VIEWER_DIR_NAME}/error.txt"},
        )


def start_viewer_asset_job(
    job_id: str,
    background_tasks: BackgroundTasks,
    world_req: BuildWorldRequest | None = None,
) -> dict[str, Any]:
    current = get_viewer_asset_status(job_id)
    if current["state"] in {"ready", "preparing"}:
        return current

    if not _world_ply_path(job_id).exists() and not _panorama_path(job_id).exists():
        raise HTTPException(status_code=400, detail="Preview is not available for this job yet.")

    stage = "splat" if _world_ply_path(job_id).exists() else "world"
    message = (
        "Queued high-fidelity render export."
        if stage == "splat"
        else "Queued high-fidelity render build. SHARP will run first, then the browser-ready render export."
    )

    status = _write_viewer_status(
        job_id,
        state="preparing",
        stage=stage,
        message=message,
        artifacts={},
        progress={},
    )
    background_tasks.add_task(build_full_fidelity_viewer, job_id, world_req or BuildWorldRequest())
    return status
