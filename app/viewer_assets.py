from __future__ import annotations

import json
import traceback
from pathlib import Path
from typing import Any

from fastapi import BackgroundTasks, HTTPException

from .splat_export import export_ply_to_splat
from .store import add_artifact, job_dir

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
        "message": "Full-fidelity splat viewer asset is ready.",
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
            "message": "world.ply exists. Prepare the full-fidelity splat viewer asset when you are ready.",
            "artifacts": {},
        }

    return {
        "state": "missing",
        "message": "world.ply is not available for this job yet.",
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
            message="Converting world.ply to full-fidelity .splat.",
            artifacts={},
        )

        def report(progress: dict[str, Any]) -> None:
            _write_viewer_status(
                job_id,
                state="preparing",
                message=(
                    f"Converting world.ply to .splat: {progress['percent']}% "
                    f"({progress['processed']:,}/{progress['total']:,} splats)"
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
            message=f"Full-fidelity splat viewer asset is ready ({manifest['asset_bytes']:,} bytes).",
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
            message=str(exc),
            artifacts={"viewer_error": f"{VIEWER_DIR_NAME}/error.txt"},
        )


def start_viewer_asset_job(job_id: str, background_tasks: BackgroundTasks) -> dict[str, Any]:
    current = get_viewer_asset_status(job_id)
    if current["state"] in {"ready", "preparing"}:
        return current

    if not _world_ply_path(job_id).exists():
        raise HTTPException(status_code=400, detail="world.ply is not available for this job yet.")

    status = _write_viewer_status(
        job_id,
        state="preparing",
        message="Queued full-fidelity .splat conversion.",
        artifacts={},
    )
    background_tasks.add_task(build_viewer_assets, job_id)
    return status
