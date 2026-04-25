from __future__ import annotations

import json
import math
from dataclasses import asdict, dataclass
from pathlib import Path

import numpy as np
from PIL import Image


@dataclass
class FaceSpec:
    name: str
    yaw_deg: float
    pitch_deg: float
    fov_deg: float
    focal_length_px: float
    focal_length_35mm: int
    image_path: str
    world_from_camera: list[list[float]]


def _rotation_world_from_camera(yaw_deg: float, pitch_deg: float) -> np.ndarray:
    yaw = math.radians(yaw_deg)
    pitch = math.radians(pitch_deg)

    forward = np.array([
        math.cos(pitch) * math.sin(yaw),
        -math.sin(pitch),
        math.cos(pitch) * math.cos(yaw),
    ], dtype=np.float64)
    forward /= np.linalg.norm(forward)

    # OpenCV-like camera: +x right, +y down, +z forward.
    right = np.array([math.cos(yaw), 0.0, -math.sin(yaw)], dtype=np.float64)
    right /= np.linalg.norm(right)
    down = np.cross(forward, right)
    down /= np.linalg.norm(down)

    # Columns are the world-space basis vectors for camera x/y/z.
    return np.stack([right, down, forward], axis=1)


def _bilinear_sample(img: np.ndarray, u: np.ndarray, v: np.ndarray) -> np.ndarray:
    h, w = img.shape[:2]
    u = np.mod(u, w)
    v = np.clip(v, 0, h - 1)

    x0 = np.floor(u).astype(np.int64)
    x1 = (x0 + 1) % w
    y0 = np.floor(v).astype(np.int64)
    y1 = np.clip(y0 + 1, 0, h - 1)

    du = (u - x0)[..., None]
    dv = (v - y0)[..., None]

    top = img[y0, x0] * (1 - du) + img[y0, x1] * du
    bottom = img[y1, x0] * (1 - du) + img[y1, x1] * du
    return (top * (1 - dv) + bottom * dv).astype(np.uint8)


def _focal_length_35mm_from_px(width: int, height: int, focal_px: float) -> int:
    diagonal_px = math.sqrt(width * width + height * height)
    diagonal_35mm = math.sqrt(36 * 36 + 24 * 24)
    return max(1, round(focal_px * diagonal_35mm / diagonal_px))


def _save_crop_with_focal_exif(crop: np.ndarray, crop_path: Path, focal_length_35mm: int) -> None:
    exif = Image.Exif()
    exif_ifd = exif.get_ifd(0x8769)
    # SHARP only accepts focal length through EXIF when using its CLI.
    exif_ifd[41989] = int(focal_length_35mm)  # FocalLengthIn35mmFilm
    exif[0x8769] = exif_ifd
    Image.fromarray(crop).save(crop_path, exif=exif)


def equirect_to_perspective(
    panorama_path: Path,
    out_dir: Path,
    *,
    preset: str = "sphere24",
    crop_size: int = 1024,
    fov_deg: float = 80.0,
) -> list[FaceSpec]:
    """Split an equirectangular panorama into perspective crops SHARP can consume."""
    out_dir.mkdir(parents=True, exist_ok=True)
    pano = Image.open(panorama_path).convert("RGB")
    img = np.asarray(pano)
    h, w = img.shape[:2]

    if preset == "horizon8":
        pitches = [0.0]
        yaws = [i * 45.0 for i in range(8)]
    elif preset == "sphere24":
        pitches = [-45.0, 0.0, 45.0]
        yaws = [i * 45.0 for i in range(8)]
    else:
        raise ValueError(f"Unknown preset: {preset}")

    n = crop_size
    yy, xx = np.meshgrid(np.arange(n), np.arange(n), indexing="ij")
    focal = (n / 2.0) / math.tan(math.radians(fov_deg) / 2.0)
    focal_35mm = _focal_length_35mm_from_px(n, n, focal)
    x_cam = (xx + 0.5 - n / 2.0) / focal
    y_cam = (yy + 0.5 - n / 2.0) / focal
    z_cam = np.ones_like(x_cam)
    dirs_cam = np.stack([x_cam, y_cam, z_cam], axis=-1)
    dirs_cam /= np.linalg.norm(dirs_cam, axis=-1, keepdims=True)

    specs: list[FaceSpec] = []
    for pitch in pitches:
        for yaw in yaws:
            R = _rotation_world_from_camera(yaw, pitch)
            dirs_world = dirs_cam @ R.T
            theta = np.arctan2(dirs_world[..., 0], dirs_world[..., 2])
            phi = np.arcsin(np.clip(-dirs_world[..., 1], -1, 1))
            u = (theta + math.pi) / (2 * math.pi) * w
            v = (math.pi / 2 - phi) / math.pi * h
            crop = _bilinear_sample(img, u, v)

            name = f"yaw_{int(yaw):03d}_pitch_{int(pitch):+03d}".replace("+", "p").replace("-", "m")
            crop_path = out_dir / f"{name}.png"
            _save_crop_with_focal_exif(crop, crop_path, focal_35mm)
            specs.append(FaceSpec(
                name=name,
                yaw_deg=yaw,
                pitch_deg=pitch,
                fov_deg=fov_deg,
                focal_length_px=focal,
                focal_length_35mm=focal_35mm,
                image_path=str(crop_path),
                world_from_camera=R.tolist(),
            ))

    (out_dir / "faces.json").write_text(json.dumps([asdict(s) for s in specs], indent=2))
    return specs
