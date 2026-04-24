from __future__ import annotations

import uuid
from pathlib import Path

from fastapi import BackgroundTasks, FastAPI, HTTPException
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

from .models import CreateJobRequest, JobStatus, SetupStatus
from .pipeline import run_job
from .runtime import get_setup_status
from .store import init_job, job_dir, read_status

app = FastAPI(title="Pano Sharp Studio", version="0.2.0")

STATIC_DIR = Path(__file__).parent / "static"
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/", response_class=HTMLResponse)
def index() -> str:
    return (STATIC_DIR / "index.html").read_text()


@app.get("/api/setup", response_model=SetupStatus)
def setup() -> dict:
    return get_setup_status()


@app.post("/api/jobs", response_model=JobStatus)
def create_job(req: CreateJobRequest, background_tasks: BackgroundTasks) -> dict:
    job_id = uuid.uuid4().hex[:12]
    init_job(job_id, req.prompt)
    background_tasks.add_task(run_job, job_id, req)
    return read_status(job_id)


@app.get("/api/jobs/{job_id}", response_model=JobStatus)
def get_job(job_id: str) -> dict:
    try:
        return read_status(job_id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Job not found") from None


@app.get("/api/jobs/{job_id}/files/{path:path}")
def get_file(job_id: str, path: str) -> FileResponse:
    root = job_dir(job_id).resolve()
    target = (root / path).resolve()
    if not str(target).startswith(str(root)) or not target.exists() or target.is_dir():
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(target)
