from __future__ import annotations

import shutil
import tempfile
import unittest
from pathlib import Path

from PIL import Image

from app.models import CreateJobRequest, JobState
from app.pipeline import run_job
from app.store import job_dir, read_status


class PipelineStageTests(unittest.TestCase):
    def test_can_stop_after_panorama_import(self) -> None:
        job_id = "testpanostop"
        shutil.rmtree(job_dir(job_id), ignore_errors=True)
        try:
            with tempfile.TemporaryDirectory() as temp_dir:
                source = Path(temp_dir) / "pano.png"
                Image.new("RGB", (16, 8), "blue").save(source)

                run_job(
                    job_id,
                    CreateJobRequest(
                        prompt="imported",
                        source_panorama_path=str(source),
                        run_reconstruction=False,
                    ),
                )

            status = read_status(job_id)
            self.assertEqual(status["state"], JobState.complete.value)
            self.assertEqual(status["artifacts"], {"panorama": "panorama.png"})
            self.assertFalse((job_dir(job_id) / "faces").exists())
            self.assertFalse((job_dir(job_id) / "world.ply").exists())
        finally:
            shutil.rmtree(job_dir(job_id), ignore_errors=True)


if __name__ == "__main__":
    unittest.main()
