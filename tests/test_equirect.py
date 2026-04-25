from __future__ import annotations

import math
import tempfile
import unittest
from pathlib import Path

import numpy as np
from PIL import Image
from sharp.utils.io import load_rgb

from app.equirect import equirect_to_perspective


class EquirectCropTests(unittest.TestCase):
    def test_perspective_crops_embed_sharp_focal_metadata(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            panorama = root / "panorama.png"
            faces = root / "faces"
            Image.fromarray(np.zeros((32, 64, 3), dtype=np.uint8)).save(panorama)

            specs = equirect_to_perspective(
                panorama,
                faces,
                preset="horizon8",
                crop_size=64,
                fov_deg=80.0,
            )
            crop_path = Path(specs[0].image_path)
            _, _, sharp_focal_px = load_rgb(crop_path)

        expected_focal_px = (64 / 2.0) / math.tan(math.radians(80.0) / 2.0)
        self.assertIn("focal_length_px", specs[0].__dict__)
        self.assertLess(abs(sharp_focal_px - expected_focal_px) / expected_focal_px, 0.03)


if __name__ == "__main__":
    unittest.main()
