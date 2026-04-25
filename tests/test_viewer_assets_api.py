from __future__ import annotations

import json
import shutil
import unittest

from fastapi.testclient import TestClient

from app.main import app
from app.store import init_job, job_dir


class ViewerAssetsApiTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(app)
        self.job_id = "testviewerapi"
        shutil.rmtree(job_dir(self.job_id), ignore_errors=True)
        init_job(self.job_id, "viewer test")

    def tearDown(self) -> None:
        shutil.rmtree(job_dir(self.job_id), ignore_errors=True)

    def test_missing_before_conversion(self) -> None:
        response = self.client.get(f"/api/jobs/{self.job_id}/viewer-assets")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["state"], "missing")
        self.assertEqual(response.json()["stage"], "missing")

    def test_missing_with_panorama_can_start_world_stage(self) -> None:
        (job_dir(self.job_id) / "panorama.png").write_bytes(b"fake")

        response = self.client.get(f"/api/jobs/{self.job_id}/viewer-assets")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["state"], "missing")
        self.assertEqual(response.json()["stage"], "world")

    def test_prepare_fails_without_panorama(self) -> None:
        response = self.client.post(f"/api/jobs/{self.job_id}/viewer-assets")

        self.assertEqual(response.status_code, 400)
        self.assertIn("Preview", response.json()["detail"])

    def test_ready_asset_is_idempotent(self) -> None:
        viewer_dir = job_dir(self.job_id) / "viewer"
        viewer_dir.mkdir(parents=True)
        (viewer_dir / "world.splat").write_bytes(b"0" * 32)
        (viewer_dir / "manifest.json").write_text(json.dumps({"asset": "viewer/world.splat", "splat_count": 1}))

        first = self.client.get(f"/api/jobs/{self.job_id}/viewer-assets")
        second = self.client.post(f"/api/jobs/{self.job_id}/viewer-assets")

        self.assertEqual(first.status_code, 200)
        self.assertEqual(second.status_code, 200)
        self.assertEqual(first.json()["state"], "ready")
        self.assertEqual(second.json()["state"], "ready")
        self.assertEqual(second.json()["stage"], "ready")

    def test_file_traversal_is_blocked(self) -> None:
        response = self.client.get(f"/api/jobs/{self.job_id}/files/../../pyproject.toml")

        self.assertEqual(response.status_code, 404)


if __name__ == "__main__":
    unittest.main()
