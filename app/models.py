from __future__ import annotations

from enum import Enum
from typing import Literal

from pydantic import BaseModel, Field, model_validator


class JobState(str, Enum):
    queued = "queued"
    running = "running"
    complete = "complete"
    failed = "failed"


class CreateJobRequest(BaseModel):
    prompt: str = Field(min_length=1, max_length=8000)
    size: str = "3840x1920"
    quality: Literal["low", "medium", "high", "auto"] = "high"
    output_format: Literal["png", "jpeg", "webp"] = "png"
    source_panorama_path: str | None = None
    reference_image_urls: list[str] = Field(default_factory=list)
    reference_image_paths: list[str] = Field(default_factory=list)
    crop_size: int = Field(default=1024, ge=512, le=2048)
    preset: Literal["horizon8", "sphere24"] = "sphere24"
    face_fov_deg: float = Field(default=80.0, ge=45.0, le=120.0)
    merge: bool = True
    run_reconstruction: bool = True

    @model_validator(mode="after")
    def validate_reference_count(self) -> "CreateJobRequest":
        if self.source_panorama_path:
            return self
        if len(self.reference_image_urls) + len(self.reference_image_paths) > 16:
            raise ValueError("Use at most 16 reference images.")
        return self


class JobStatus(BaseModel):
    id: str
    state: JobState
    message: str = ""
    prompt: str
    artifacts: dict[str, str] = Field(default_factory=dict)


class BuildWorldRequest(BaseModel):
    crop_size: int = Field(default=1024, ge=512, le=2048)
    preset: Literal["horizon8", "sphere24"] = "sphere24"
    face_fov_deg: float = Field(default=80.0, ge=45.0, le=120.0)
    merge: bool = True


class ViewerAssetStatus(BaseModel):
    state: Literal["missing", "preparing", "ready", "failed"]
    stage: Literal["world", "splat", "ready", "missing", "failed"] = "missing"
    message: str = ""
    artifacts: dict[str, str] = Field(default_factory=dict)
    progress: dict[str, float | int] = Field(default_factory=dict)
    manifest: dict[str, str | int | float] = Field(default_factory=dict)


class SetupCheck(BaseModel):
    name: str
    ok: bool
    detail: str


class SetupStatus(BaseModel):
    ready: bool
    checks: list[SetupCheck] = Field(default_factory=list)
    recommended_commands: list[str] = Field(default_factory=list)
