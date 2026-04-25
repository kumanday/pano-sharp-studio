from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Any

import numpy as np
from plyfile import PlyData, PlyElement

from .splat_export import quaternion_wxyz_to_xyzw, quaternion_xyzw_to_wxyz


def _quat_from_matrix(R: np.ndarray) -> np.ndarray:
    """Return quaternion [w, x, y, z] from a 3x3 rotation matrix."""
    m = R
    trace = np.trace(m)
    if trace > 0:
        s = math.sqrt(trace + 1.0) * 2.0
        w = 0.25 * s
        x = (m[2, 1] - m[1, 2]) / s
        y = (m[0, 2] - m[2, 0]) / s
        z = (m[1, 0] - m[0, 1]) / s
    elif m[0, 0] > m[1, 1] and m[0, 0] > m[2, 2]:
        s = math.sqrt(1.0 + m[0, 0] - m[1, 1] - m[2, 2]) * 2.0
        w = (m[2, 1] - m[1, 2]) / s
        x = 0.25 * s
        y = (m[0, 1] + m[1, 0]) / s
        z = (m[0, 2] + m[2, 0]) / s
    elif m[1, 1] > m[2, 2]:
        s = math.sqrt(1.0 + m[1, 1] - m[0, 0] - m[2, 2]) * 2.0
        w = (m[0, 2] - m[2, 0]) / s
        x = (m[0, 1] + m[1, 0]) / s
        y = 0.25 * s
        z = (m[1, 2] + m[2, 1]) / s
    else:
        s = math.sqrt(1.0 + m[2, 2] - m[0, 0] - m[1, 1]) * 2.0
        w = (m[1, 0] - m[0, 1]) / s
        x = (m[0, 2] + m[2, 0]) / s
        y = (m[1, 2] + m[2, 1]) / s
        z = 0.25 * s
    q = np.array([w, x, y, z], dtype=np.float64)
    return q / np.linalg.norm(q)


def _quat_mul(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    aw, ax, ay, az = np.moveaxis(a, -1, 0)
    bw, bx, by, bz = np.moveaxis(b, -1, 0)
    out = np.stack([
        aw * bw - ax * bx - ay * by - az * bz,
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
    ], axis=-1)
    norm = np.linalg.norm(out, axis=-1, keepdims=True)
    return out / np.clip(norm, 1e-12, None)


def _load_faces(face_json: Path) -> list[dict[str, Any]]:
    return json.loads(face_json.read_text())


def _face_center(face: dict[str, Any]) -> np.ndarray:
    R = np.asarray(face["world_from_camera"], dtype=np.float64)
    return R[:, 2] / np.linalg.norm(R[:, 2])


def _find_ply_for_face(ply_dir: Path, face_name: str) -> Path | None:
    candidates = sorted(ply_dir.rglob(f"*{face_name}*.ply"))
    if candidates:
        return candidates[0]
    return None


def merge_sharp_plys(
    face_json: Path,
    ply_dir: Path,
    out_ply: Path,
    *,
    voronoi_clip: bool = True,
) -> Path:
    """
    Merge per-face SHARP PLY files into one approximate world PLY.

    This assumes each per-face PLY uses OpenCV camera coordinates: +x right, +y down, +z forward.
    The transform rotates camera coordinates into the panorama's world frame.
    """
    faces = _load_faces(face_json)
    centers = np.stack([_face_center(f) for f in faces], axis=0)
    all_plys = sorted(ply_dir.rglob("*.ply"))

    merged_vertices = []
    comments: list[str] = []
    base_ply: PlyData | None = None

    for idx, face in enumerate(faces):
        ply_path = _find_ply_for_face(ply_dir, face["name"])
        if ply_path is None:
            # Some SHARP versions may preserve only stem partially. Try same order fallback.
            if idx < len(all_plys):
                ply_path = all_plys[idx]
            else:
                continue

        ply = PlyData.read(str(ply_path))
        if base_ply is None:
            base_ply = ply
            comments.extend(ply.comments)

        vertex = ply["vertex"].data.copy()
        R = np.asarray(face["world_from_camera"], dtype=np.float64)

        p = np.stack([vertex["x"], vertex["y"], vertex["z"]], axis=-1).astype(np.float64)
        p_world = p @ R.T

        keep = np.ones(len(vertex), dtype=bool)
        if voronoi_clip and len(faces) > 1:
            norms = np.linalg.norm(p_world, axis=1, keepdims=True)
            dirs = p_world / np.clip(norms, 1e-9, None)
            best = np.argmax(dirs @ centers.T, axis=1)
            keep = best == idx

        vertex = vertex[keep].copy()
        p_world = p_world[keep]
        vertex["x"] = p_world[:, 0]
        vertex["y"] = p_world[:, 1]
        vertex["z"] = p_world[:, 2]

        rot_names = ["rot_0", "rot_1", "rot_2", "rot_3"]
        if all(name in vertex.dtype.names for name in rot_names):
            q_cam_xyzw = np.stack([vertex[n] for n in rot_names], axis=-1).astype(np.float64)
            q_cam = quaternion_xyzw_to_wxyz(q_cam_xyzw)
            q_R = _quat_from_matrix(R)[None, :]
            q_world = _quat_mul(np.repeat(q_R, len(q_cam), axis=0), q_cam)
            q_world_xyzw = quaternion_wxyz_to_xyzw(q_world)
            for j, n in enumerate(rot_names):
                vertex[n] = q_world_xyzw[:, j]

        merged_vertices.append(vertex)

    if base_ply is None or not merged_vertices:
        raise RuntimeError("No SHARP PLY files were found to merge.")

    all_vertices = np.concatenate(merged_vertices)
    vertex_el = PlyElement.describe(all_vertices, "vertex")
    out = PlyData([vertex_el], text=base_ply.text, byte_order=base_ply.byte_order)
    out.comments.extend(comments)
    out.comments.append("Merged by panosplat-studio from equirectangular perspective crops.")
    out_ply.parent.mkdir(parents=True, exist_ok=True)
    out.write(str(out_ply))
    return out_ply
