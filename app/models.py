from __future__ import annotations

from enum import Enum
from typing import Literal

from pydantic import BaseModel, Field


class JobState(str, Enum):
    queued = "queued"
    running = "running"
    complete = "complete"
    failed = "failed"


class CreateJobRequest(BaseModel):
    prompt: str = Field(min_length=1, max_length=8000)
    size: str = "3840x1920"
    quality: Literal["low", "medium", "high", "auto"] = "medium"
    output_format: Literal["png", "jpeg", "webp"] = "png"
    source_panorama_path: str | None = None
    crop_size: int = Field(default=1024, ge=512, le=2048)
    preset: Literal["horizon8", "sphere24"] = "sphere24"
    face_fov_deg: float = Field(default=80.0, ge=45.0, le=120.0)
    merge: bool = True


class JobStatus(BaseModel):
    id: str
    state: JobState
    message: str = ""
    prompt: str
    artifacts: dict[str, str] = Field(default_factory=dict)


class SetupCheck(BaseModel):
    name: str
    ok: bool
    detail: str


class SetupStatus(BaseModel):
    ready: bool
    checks: list[SetupCheck] = Field(default_factory=list)
    recommended_commands: list[str] = Field(default_factory=list)
