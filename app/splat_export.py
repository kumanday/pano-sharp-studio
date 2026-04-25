from __future__ import annotations

import json
import time
from collections.abc import Callable
from pathlib import Path
from typing import Any

import numpy as np
from plyfile import PlyData

SH_C0 = 0.28209479177387814
SPLAT_ROW_BYTES = 32
REQUIRED_VERTEX_FIELDS = {
    "x",
    "y",
    "z",
    "f_dc_0",
    "f_dc_1",
    "f_dc_2",
    "opacity",
    "scale_0",
    "scale_1",
    "scale_2",
    "rot_0",
    "rot_1",
    "rot_2",
    "rot_3",
}

ProgressReporter = Callable[[dict[str, Any]], None]


def _sigmoid_to_uint8(values: np.ndarray) -> np.ndarray:
    alpha = 1.0 / (1.0 + np.exp(-np.clip(values.astype(np.float32), -80.0, 80.0)))
    return np.clip(np.floor(alpha * 255.0), 0, 255).astype(np.uint8)


def _dc_to_uint8(values: np.ndarray) -> np.ndarray:
    rgb = (0.5 + SH_C0 * values.astype(np.float32)) * 255.0
    return np.clip(np.floor(rgb), 0, 255).astype(np.uint8)


def _quat_wxyz_to_uint8(values: np.ndarray) -> np.ndarray:
    norms = np.linalg.norm(values, axis=1, keepdims=True)
    normalized = values / np.clip(norms, 1e-12, None)
    normalized[norms[:, 0] <= 1e-12] = np.array([1.0, 0.0, 0.0, 0.0], dtype=np.float32)
    return np.clip(np.rint(normalized * 128.0 + 128.0), 0, 255).astype(np.uint8)


def _validate_ply_schema(vertex: np.ndarray) -> None:
    field_names = set(vertex.dtype.names or [])
    missing = sorted(REQUIRED_VERTEX_FIELDS - field_names)
    if missing:
        raise RuntimeError(f"world.ply is missing required Gaussian splat fields: {', '.join(missing)}")


def _pack_splat_rows(vertex: np.ndarray) -> bytearray:
    count = len(vertex)
    rows = bytearray(count * SPLAT_ROW_BYTES)

    positions = np.ndarray((count, 3), dtype="<f4", buffer=rows, offset=0, strides=(SPLAT_ROW_BYTES, 4))
    positions[:, 0] = vertex["x"]
    positions[:, 1] = vertex["y"]
    positions[:, 2] = vertex["z"]

    scales = np.ndarray((count, 3), dtype="<f4", buffer=rows, offset=12, strides=(SPLAT_ROW_BYTES, 4))
    scales[:, 0] = np.exp(vertex["scale_0"].astype(np.float32))
    scales[:, 1] = np.exp(vertex["scale_1"].astype(np.float32))
    scales[:, 2] = np.exp(vertex["scale_2"].astype(np.float32))

    colors = np.ndarray((count, 4), dtype=np.uint8, buffer=rows, offset=24, strides=(SPLAT_ROW_BYTES, 1))
    colors[:, 0] = _dc_to_uint8(vertex["f_dc_0"])
    colors[:, 1] = _dc_to_uint8(vertex["f_dc_1"])
    colors[:, 2] = _dc_to_uint8(vertex["f_dc_2"])
    colors[:, 3] = _sigmoid_to_uint8(vertex["opacity"])

    # PLY stores rotation as [x, y, z, w]; standard .splat stores bytes as [w, x, y, z].
    quats_wxyz = np.stack(
        [vertex["rot_3"], vertex["rot_0"], vertex["rot_1"], vertex["rot_2"]],
        axis=1,
    ).astype(np.float32)
    rotations = np.ndarray((count, 4), dtype=np.uint8, buffer=rows, offset=28, strides=(SPLAT_ROW_BYTES, 1))
    rotations[:, :] = _quat_wxyz_to_uint8(quats_wxyz)

    return rows


def export_ply_to_splat(
    ply_path: Path,
    splat_path: Path,
    manifest_path: Path,
    *,
    chunk_size: int = 250_000,
    reporter: ProgressReporter | None = None,
) -> dict[str, Any]:
    ply = PlyData.read(str(ply_path), mmap=True)
    vertex = ply["vertex"].data
    _validate_ply_schema(vertex)

    splat_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = splat_path.with_suffix(".splat.tmp")
    total = len(vertex)
    started_at = time.time()

    with tmp_path.open("wb") as out:
        for start in range(0, total, chunk_size):
            end = min(start + chunk_size, total)
            out.write(_pack_splat_rows(vertex[start:end]))
            if reporter:
                reporter({
                    "processed": end,
                    "total": total,
                    "percent": round((end / total) * 100.0, 2) if total else 100.0,
                })

    tmp_path.replace(splat_path)
    manifest = {
        "format": "splat",
        "asset": "viewer/world.splat",
        "source": "world.ply",
        "splat_count": total,
        "row_bytes": SPLAT_ROW_BYTES,
        "asset_bytes": splat_path.stat().st_size,
        "source_bytes": ply_path.stat().st_size,
        "created_at": time.time(),
        "elapsed_seconds": round(time.time() - started_at, 3),
    }
    manifest_path.write_text(json.dumps(manifest, indent=2))
    return manifest


def expected_splat_size(splat_count: int) -> int:
    return splat_count * SPLAT_ROW_BYTES


def quaternion_xyzw_to_wxyz(quaternions: np.ndarray) -> np.ndarray:
    return np.stack(
        [quaternions[:, 3], quaternions[:, 0], quaternions[:, 1], quaternions[:, 2]],
        axis=1,
    )


def quaternion_wxyz_to_xyzw(quaternions: np.ndarray) -> np.ndarray:
    return np.stack(
        [quaternions[:, 1], quaternions[:, 2], quaternions[:, 3], quaternions[:, 0]],
        axis=1,
    )
