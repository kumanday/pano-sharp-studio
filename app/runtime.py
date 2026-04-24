from __future__ import annotations

import copy
import platform
import shutil
import subprocess
import sys
import time
from pathlib import Path

from .config import OPENAI_API_KEY, SHARP_BIN

SETUP_CACHE_TTL_SECONDS = 15.0
_setup_cache: tuple[float, dict] | None = None


def _sharp_executable() -> str | None:
    if Path(SHARP_BIN).exists():
        return str(Path(SHARP_BIN))
    return shutil.which(SHARP_BIN)


def _torch_check() -> tuple[bool, str]:
    try:
        import torch
    except Exception as exc:  # pragma: no cover - defensive runtime reporting
        return False, f"torch import failed: {exc}"

    backends: list[str] = []
    if torch.cuda.is_available():
        backends.append("cuda")
    if getattr(torch.backends, "mps", None) and torch.backends.mps.is_available():
        backends.append("mps")
    if not backends:
        backends.append("cpu")

    return True, f"torch {torch.__version__}; available backend(s): {', '.join(backends)}"


def _sharp_cli_check() -> tuple[bool, str]:
    executable = _sharp_executable()
    if not executable:
        return False, f"{SHARP_BIN!r} is not installed yet"

    try:
        proc = subprocess.run(
            [executable, "--help"],
            capture_output=True,
            text=True,
            timeout=10,
        )
    except subprocess.TimeoutExpired:
        return False, f"`{executable} --help` timed out"
    if proc.returncode != 0:
        stderr = proc.stderr.strip() or proc.stdout.strip() or "unknown error"
        return False, f"`{executable} --help` failed: {stderr}"

    return True, f"CLI detected at {executable}"


def _compute_setup_status() -> dict:
    python_ok = sys.version_info[:2] == (3, 13)
    python_detail = (
        f"Python {platform.python_version()} matches SHARP's recommended 3.13 runtime"
        if python_ok
        else f"Python {platform.python_version()} detected; this project is pinned to 3.13"
    )

    torch_ok, torch_detail = _torch_check()
    sharp_ok, sharp_detail = _sharp_cli_check()
    key_ok = bool(OPENAI_API_KEY)
    key_detail = "OPENAI_API_KEY is configured" if key_ok else "OPENAI_API_KEY is missing from .env"

    checks = [
        {"name": "Python", "ok": python_ok, "detail": python_detail},
        {"name": "OpenAI API key", "ok": key_ok, "detail": key_detail},
        {"name": "Torch runtime", "ok": torch_ok, "detail": torch_detail},
        {"name": "Apple SHARP CLI", "ok": sharp_ok, "detail": sharp_detail},
    ]

    recommended_commands: list[str] = []
    if not python_ok or not sharp_ok or not torch_ok:
        recommended_commands.append("uv sync")
    if not key_ok:
        recommended_commands.append("cp .env.example .env")
    if sharp_ok:
        recommended_commands.append("uv run sharp --help")
    else:
        recommended_commands.append("uv run pano-sharp-doctor")

    return {
        "ready": all(check["ok"] for check in checks),
        "checks": checks,
        "recommended_commands": recommended_commands,
    }


def get_setup_status() -> dict:
    global _setup_cache

    now = time.monotonic()
    if _setup_cache and now - _setup_cache[0] < SETUP_CACHE_TTL_SECONDS:
        return copy.deepcopy(_setup_cache[1])

    status = _compute_setup_status()
    _setup_cache = (now, status)
    return copy.deepcopy(status)
