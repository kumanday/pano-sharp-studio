from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

from .config import SHARP_BIN


def ensure_sharp_available() -> None:
    if shutil.which(SHARP_BIN) is None and not Path(SHARP_BIN).exists():
        raise RuntimeError(
            f"Apple SHARP CLI not found: {SHARP_BIN!r}. Run `uv sync` in the project root so the pinned "
            "`apple/ml-sharp` dependency is installed into `.venv`, then verify it with `uv run sharp --help`. "
            "If you installed it elsewhere, point SHARP_BIN at that executable in `.env`."
        )


def run_sharp_predict(input_dir: Path, output_dir: Path) -> list[Path]:
    ensure_sharp_available()
    output_dir.mkdir(parents=True, exist_ok=True)
    cmd = [SHARP_BIN, "predict", "-i", str(input_dir), "-o", str(output_dir)]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        raise RuntimeError(
            "SHARP prediction failed.\n"
            f"Command: {' '.join(cmd)}\n"
            f"stdout:\n{proc.stdout}\n"
            f"stderr:\n{proc.stderr}\n"
        )
    return sorted(output_dir.rglob("*.ply"))
