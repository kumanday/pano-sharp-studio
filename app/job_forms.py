from __future__ import annotations

from fastapi import HTTPException, UploadFile

from .models import CreateJobRequest
from .reference_images import MAX_REFERENCE_IMAGES, save_reference_bytes, split_reference_urls
from .store import job_dir


async def _save_reference_uploads(job_id: str, uploads: list[UploadFile]) -> list[str]:
    upload_dir = job_dir(job_id) / "references" / "uploads"
    paths: list[str] = []

    for index, upload in enumerate(uploads, start=1):
        data = await upload.read()
        try:
            path = save_reference_bytes(data, upload_dir, f"upload_{index:02d}")
        except Exception as exc:
            raise HTTPException(status_code=400, detail=f"Invalid reference upload {upload.filename}: {exc}") from exc
        paths.append(str(path))

    return paths


async def build_form_request(
    *,
    job_id: str,
    prompt: str,
    size: str,
    quality: str,
    output_format: str,
    source_panorama_path: str,
    reference_image_urls: str,
    preset: str,
    crop_size: int,
    face_fov_deg: float,
    merge: bool,
    reference_images: list[UploadFile] | None,
) -> CreateJobRequest:
    source_path = source_panorama_path.strip()
    urls = [] if source_path else split_reference_urls(reference_image_urls)
    uploads = [] if source_path else reference_images or []

    if len(uploads) + len(urls) > MAX_REFERENCE_IMAGES:
        raise HTTPException(status_code=400, detail=f"Use at most {MAX_REFERENCE_IMAGES} reference images.")

    reference_paths = await _save_reference_uploads(job_id, uploads)
    try:
        return CreateJobRequest(
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
