from __future__ import annotations

import uuid
from pathlib import Path
from typing import Annotated

from fastapi import BackgroundTasks, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

from .job_forms import build_form_request
from .models import BuildWorldRequest, CreateJobRequest, JobState, JobStatus, SceneSummary, SetupStatus, ViewerAssetStatus
from .pipeline import run_job, run_world_job
from .runtime import get_setup_status
from .scenes import list_high_fidelity_scenes
from .store import init_job, job_dir, read_status, write_status
from .viewer_assets import get_viewer_asset_status, start_viewer_asset_job

app = FastAPI(title="Pano Sharp Studio", version="0.2.0")

STATIC_DIR = Path(__file__).parent / "static"
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


def _safe_job_file(job_id: str, rel_path: str) -> Path:
    root = job_dir(job_id).resolve()
    target = (root / rel_path).resolve()
    try:
        target.relative_to(root)
    except ValueError:
        raise HTTPException(status_code=404, detail="File not found") from None
    if not target.exists() or target.is_dir():
        raise HTTPException(status_code=404, detail="File not found")
    return target


@app.get("/", response_class=HTMLResponse)
def index() -> str:
    return (STATIC_DIR / "index.html").read_text()


@app.get("/viewer/{job_id}", response_class=HTMLResponse)
def splat_viewer(job_id: str) -> str:
    return (STATIC_DIR / "splat-viewer.html").read_text()


@app.get("/api/setup", response_model=SetupStatus)
def setup() -> dict:
    return get_setup_status()


@app.get("/api/scenes", response_model=list[SceneSummary])
def scenes() -> list[dict]:
    return list_high_fidelity_scenes()


@app.post("/api/jobs", response_model=JobStatus)
def create_job(req: CreateJobRequest, background_tasks: BackgroundTasks) -> dict:
    job_id = uuid.uuid4().hex[:12]
    init_job(job_id, req.prompt)
    background_tasks.add_task(run_job, job_id, req)
    return read_status(job_id)


@app.post("/api/jobs/form", response_model=JobStatus)
async def create_job_form(
    background_tasks: BackgroundTasks,
    prompt: Annotated[str, Form()],
    size: Annotated[str, Form()] = "3840x1920",
    quality: Annotated[str, Form()] = "high",
    output_format: Annotated[str, Form()] = "png",
    source_panorama_path: Annotated[str, Form()] = "",
    reference_image_urls: Annotated[str, Form()] = "",
    preset: Annotated[str, Form()] = "sphere24",
    crop_size: Annotated[int, Form()] = 1024,
    face_fov_deg: Annotated[float, Form()] = 80.0,
    merge: Annotated[bool, Form()] = True,
    run_reconstruction: Annotated[bool, Form()] = True,
    reference_images: Annotated[list[UploadFile] | None, File()] = None,
) -> dict:
    job_id = uuid.uuid4().hex[:12]
    req = await build_form_request(
        job_id=job_id,
        prompt=prompt,
        size=size,
        quality=quality,
        output_format=output_format,
        source_panorama_path=source_panorama_path,
        reference_image_urls=reference_image_urls,
        preset=preset,
        crop_size=crop_size,
        face_fov_deg=face_fov_deg,
        merge=merge,
        run_reconstruction=run_reconstruction,
        reference_images=reference_images,
    )

    init_job(job_id, req.prompt)
    background_tasks.add_task(run_job, job_id, req)
    return read_status(job_id)


@app.get("/api/jobs/{job_id}", response_model=JobStatus)
def get_job(job_id: str) -> dict:
    try:
        return read_status(job_id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Job not found") from None


@app.post("/api/jobs/{job_id}/world", response_model=JobStatus)
def build_world(job_id: str, req: BuildWorldRequest, background_tasks: BackgroundTasks) -> dict:
    try:
        status = read_status(job_id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Job not found") from None
    if status.get("state") == JobState.running.value:
        raise HTTPException(status_code=409, detail="Job is already running.")
    if "panorama" not in status.get("artifacts", {}):
        raise HTTPException(status_code=400, detail="Preview is not available for this job yet.")

    write_status(job_id, state=JobState.running.value, message="Queued high-fidelity world build")
    background_tasks.add_task(run_world_job, job_id, req)
    return read_status(job_id)


@app.get("/api/jobs/{job_id}/viewer-assets", response_model=ViewerAssetStatus)
def get_viewer_assets(job_id: str) -> dict:
    try:
        read_status(job_id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Job not found") from None
    return get_viewer_asset_status(job_id)


@app.post("/api/jobs/{job_id}/viewer-assets", response_model=ViewerAssetStatus)
def prepare_viewer_assets(
    job_id: str,
    background_tasks: BackgroundTasks,
    req: BuildWorldRequest | None = None,
) -> dict:
    try:
        read_status(job_id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Job not found") from None
    return start_viewer_asset_job(job_id, background_tasks, req)


@app.get("/api/jobs/{job_id}/files/{path:path}")
def get_file(job_id: str, path: str) -> FileResponse:
    return FileResponse(_safe_job_file(job_id, path))
