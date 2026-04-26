from __future__ import annotations

import json
import shutil
from pathlib import Path
from typing import Any

from .config import RUNS_DIR
from .store import read_status
from .thumbnails import THUMBNAIL_REL_PATH
from .viewer_assets import MANIFEST_REL_PATH, SPLAT_REL_PATH


def _safe_manifest(path: Path) -> dict[str, Any]:
    try:
        return json.loads(path.read_text())
    except (OSError, json.JSONDecodeError):
        return {}


def list_high_fidelity_scenes() -> list[dict[str, Any]]:
    scenes: list[dict[str, Any]] = []
    for run_dir in sorted(RUNS_DIR.iterdir(), key=lambda path: path.stat().st_mtime, reverse=True):
        if not run_dir.is_dir():
            continue

        splat_path = run_dir / SPLAT_REL_PATH
        manifest_path = run_dir / MANIFEST_REL_PATH
        thumbnail_path = run_dir / THUMBNAIL_REL_PATH
        if not splat_path.exists() or not manifest_path.exists() or not thumbnail_path.exists():
            continue

        job_id = run_dir.name
        manifest = _safe_manifest(manifest_path)
        try:
            status = read_status(job_id)
        except FileNotFoundError:
            status = {"id": job_id, "prompt": ""}

        scenes.append({
            "id": job_id,
            "prompt": status.get("prompt", ""),
            "thumbnail": THUMBNAIL_REL_PATH,
            "viewer_url": f"/viewer/{job_id}",
            "manifest": {
                "splat_count": manifest.get("splat_count", 0),
                "asset_bytes": manifest.get("asset_bytes", splat_path.stat().st_size),
                "created_at": manifest.get("created_at", manifest_path.stat().st_mtime),
            },
        })

    return scenes


def delete_run(job_id: str) -> None:
    run_dir = (RUNS_DIR / job_id).resolve()
    try:
        run_dir.relative_to(RUNS_DIR.resolve())
    except ValueError:
        raise FileNotFoundError(job_id) from None
    if not run_dir.exists() or not run_dir.is_dir():
        raise FileNotFoundError(job_id)
    shutil.rmtree(run_dir)
