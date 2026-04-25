from __future__ import annotations

import math
import struct
import tempfile
import unittest
from pathlib import Path

import numpy as np
from plyfile import PlyData, PlyElement

from app.ply_merge import _quat_from_matrix, _quat_mul
from app.splat_export import (
    SPLAT_ROW_BYTES,
    export_ply_to_splat,
    expected_splat_size,
    quaternion_wxyz_to_xyzw,
    quaternion_xyzw_to_wxyz,
)


def write_tiny_ply(path: Path) -> None:
    dtype = [
        ("x", "f4"),
        ("y", "f4"),
        ("z", "f4"),
        ("f_dc_0", "f4"),
        ("f_dc_1", "f4"),
        ("f_dc_2", "f4"),
        ("opacity", "f4"),
        ("scale_0", "f4"),
        ("scale_1", "f4"),
        ("scale_2", "f4"),
        ("rot_0", "f4"),
        ("rot_1", "f4"),
        ("rot_2", "f4"),
        ("rot_3", "f4"),
    ]
    vertex = np.array(
        [(1.0, 2.0, 3.0, 0.0, 0.0, 0.0, 0.0, math.log(2), math.log(3), math.log(4), 0.0, 0.0, 0.0, 1.0)],
        dtype=dtype,
    )
    PlyData([PlyElement.describe(vertex, "vertex")], text=False).write(path)


class SplatExportTests(unittest.TestCase):
    def test_exports_standard_splat_rows(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            ply_path = root / "world.ply"
            splat_path = root / "viewer" / "world.splat"
            manifest_path = root / "viewer" / "manifest.json"
            write_tiny_ply(ply_path)

            manifest = export_ply_to_splat(ply_path, splat_path, manifest_path, chunk_size=1)
            data = splat_path.read_bytes()

        self.assertEqual(len(data), expected_splat_size(1))
        self.assertEqual(len(data), SPLAT_ROW_BYTES)
        self.assertEqual(manifest["splat_count"], 1)
        self.assertEqual(struct.unpack_from("<fff", data, 0), (1.0, 2.0, 3.0))
        self.assertAlmostEqual(struct.unpack_from("<f", data, 12)[0], 2.0)
        self.assertAlmostEqual(struct.unpack_from("<f", data, 16)[0], 3.0)
        self.assertAlmostEqual(struct.unpack_from("<f", data, 20)[0], 4.0)
        self.assertEqual(tuple(data[24:28]), (127, 127, 127, 127))
        self.assertEqual(tuple(data[28:32]), (255, 128, 128, 128))

    def test_quaternion_merge_convention_outputs_xyzw(self) -> None:
        angle = math.pi / 2
        rotation_z = np.array(
            [
                [math.cos(angle), -math.sin(angle), 0.0],
                [math.sin(angle), math.cos(angle), 0.0],
                [0.0, 0.0, 1.0],
            ],
            dtype=np.float64,
        )
        q_r = _quat_from_matrix(rotation_z)[None, :]
        q_identity_xyzw = np.array([[0.0, 0.0, 0.0, 1.0]], dtype=np.float64)
        q_world = _quat_mul(q_r, quaternion_xyzw_to_wxyz(q_identity_xyzw))
        q_world_xyzw = quaternion_wxyz_to_xyzw(q_world)

        self.assertTrue(np.allclose(q_world_xyzw[0], [0.0, 0.0, math.sin(angle / 2), math.cos(angle / 2)]))


if __name__ == "__main__":
    unittest.main()
