from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .config import RUNS_DIR
from .models import JobState


def job_dir(job_id: str) -> Path:
    return RUNS_DIR / job_id


def status_path(job_id: str) -> Path:
    return job_dir(job_id) / "status.json"


def init_job(job_id: str, prompt: str) -> None:
    d = job_dir(job_id)
    d.mkdir(parents=True, exist_ok=True)
    write_status(job_id, state=JobState.queued.value, prompt=prompt, message="Queued")


def read_status(job_id: str) -> dict[str, Any]:
    p = status_path(job_id)
    if not p.exists():
        raise FileNotFoundError(job_id)
    return json.loads(p.read_text())


def write_status(job_id: str, **patch: Any) -> None:
    d = job_dir(job_id)
    d.mkdir(parents=True, exist_ok=True)
    current: dict[str, Any] = {}
    p = status_path(job_id)
    if p.exists():
        current = json.loads(p.read_text())
    current.update(patch)
    current.setdefault("id", job_id)
    current.setdefault("artifacts", {})
    tmp = p.with_suffix(".tmp")
    tmp.write_text(json.dumps(current, indent=2))
    tmp.replace(p)


def add_artifact(job_id: str, name: str, rel_path: str) -> None:
    s = read_status(job_id)
    artifacts = s.setdefault("artifacts", {})
    artifacts[name] = rel_path
    write_status(job_id, artifacts=artifacts)
