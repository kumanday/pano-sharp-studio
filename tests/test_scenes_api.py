from __future__ import annotations

import json
import shutil
import unittest

from fastapi.testclient import TestClient
from PIL import Image

from app.main import app
from app.store import init_job, job_dir


class ScenesApiTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(app)
        self.job_id = "testsceneapi"
        shutil.rmtree(job_dir(self.job_id), ignore_errors=True)
        init_job(self.job_id, "misty loaded scene")

    def tearDown(self) -> None:
        shutil.rmtree(job_dir(self.job_id), ignore_errors=True)

    def test_lists_only_ready_high_fidelity_renders_with_thumbnails(self) -> None:
        run_dir = job_dir(self.job_id)
        viewer_dir = run_dir / "viewer"
        viewer_dir.mkdir(parents=True)
        (viewer_dir / "world.splat").write_bytes(b"0" * 64)
        (viewer_dir / "manifest.json").write_text(
            json.dumps({"asset": "viewer/world.splat", "splat_count": 2, "asset_bytes": 64})
        )

        missing_thumbnail = self.client.get("/api/scenes").json()
        self.assertFalse(any(scene["id"] == self.job_id for scene in missing_thumbnail))

        Image.new("RGB", (480, 240), "green").save(run_dir / "preview_thumbnail.jpg")
        response = self.client.get("/api/scenes")

        self.assertEqual(response.status_code, 200)
        scene = next(scene for scene in response.json() if scene["id"] == self.job_id)
        self.assertEqual(scene["prompt"], "misty loaded scene")
        self.assertEqual(scene["thumbnail"], "preview_thumbnail.jpg")
        self.assertEqual(scene["viewer_url"], f"/viewer/{self.job_id}")
        self.assertEqual(scene["manifest"]["splat_count"], 2)

    def test_delete_job_removes_run_data(self) -> None:
        run_dir = job_dir(self.job_id)
        (run_dir / "panorama.png").write_bytes(b"fake")

        response = self.client.delete(f"/api/jobs/{self.job_id}")

        self.assertEqual(response.status_code, 200)
        self.assertFalse(run_dir.exists())

    def test_delete_job_rejects_missing_run(self) -> None:
        shutil.rmtree(job_dir(self.job_id), ignore_errors=True)

        response = self.client.delete(f"/api/jobs/{self.job_id}")

        self.assertEqual(response.status_code, 404)


if __name__ == "__main__":
    unittest.main()
