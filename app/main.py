from __future__ import annotations

import uuid
from pathlib import Path
from typing import Annotated

from fastapi import BackgroundTasks, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

from .models import CreateJobRequest, JobStatus, SetupStatus
from .pipeline import run_job
from .reference_images import MAX_REFERENCE_IMAGES, save_reference_bytes, split_reference_urls
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
    reference_images: Annotated[list[UploadFile] | None, File()] = None,
) -> dict:
    job_id = uuid.uuid4().hex[:12]
    source_path = source_panorama_path.strip()
    urls = [] if source_path else split_reference_urls(reference_image_urls)

    reference_paths: list[str] = []
    uploads = [] if source_path else reference_images or []
    if len(uploads) + len(urls) > MAX_REFERENCE_IMAGES:
        raise HTTPException(status_code=400, detail=f"Use at most {MAX_REFERENCE_IMAGES} reference images.")

    upload_dir = job_dir(job_id) / "references" / "uploads"
    for index, upload in enumerate(uploads, start=1):
        data = await upload.read()
        try:
            path = save_reference_bytes(data, upload_dir, f"upload_{index:02d}")
        except Exception as exc:
            raise HTTPException(status_code=400, detail=f"Invalid reference upload {upload.filename}: {exc}") from exc
        reference_paths.append(str(path))

    try:
        req = CreateJobRequest(
            prompt=prompt,
            size=size,
            quality=quality,
            output_format=output_format,
            source_panorama_path=source_path or None,
            reference_image_urls=urls,
            reference_image_paths=reference_paths,
            preset=preset,
            crop_size=crop_size,
            face_fov_deg=face_fov_deg,
            merge=merge,
        )
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

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
