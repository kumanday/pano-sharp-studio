from __future__ import annotations

import json
import re
import urllib.error
import urllib.parse
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

MAX_REFERENCE_IMAGES = 16
MAX_REFERENCE_BYTES = 50 * 1024 * 1024
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def split_reference_urls(raw: str | None) -> list[str]:
    if not raw:
        return []
    return [item.strip() for item in re.split(r"[\n,]", raw) if item.strip()]


def _validate_reference_count(paths: list[Path], urls: list[str]) -> None:
    total = len(paths) + len(urls)
    if total > MAX_REFERENCE_IMAGES:
        raise RuntimeError(f"GPT image references support up to {MAX_REFERENCE_IMAGES} images; got {total}.")


def _reference_mode(image: Image.Image) -> str:
    if image.mode in {"RGBA", "LA"} or ("transparency" in image.info):
        return "RGBA"
    return "RGB"


def save_reference_bytes(data: bytes, out_dir: Path, stem: str) -> Path:
    if len(data) > MAX_REFERENCE_BYTES:
        raise RuntimeError(f"Reference image is larger than {MAX_REFERENCE_BYTES // (1024 * 1024)}MB.")

    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{stem}.png"
    with Image.open(BytesIO(data)) as image:
        image.convert(_reference_mode(image)).save(out_path, format="PNG")
    return out_path


def _extension_for_url(url: str, content_type: str | None) -> str:
    suffix = Path(urllib.parse.urlparse(url).path).suffix.lower()
    if suffix in SUPPORTED_EXTENSIONS:
        return suffix
    if content_type:
        if "jpeg" in content_type or "jpg" in content_type:
            return ".jpg"
        if "png" in content_type:
            return ".png"
        if "webp" in content_type:
            return ".webp"
    return ".png"


def _read_limited(response) -> bytes:
    chunks: list[bytes] = []
    total = 0
    while True:
        chunk = response.read(1024 * 1024)
        if not chunk:
            break
        total += len(chunk)
        if total > MAX_REFERENCE_BYTES:
            raise RuntimeError(f"Reference image download exceeded {MAX_REFERENCE_BYTES // (1024 * 1024)}MB.")
        chunks.append(chunk)
    return b"".join(chunks)


def download_reference_images(urls: list[str], out_dir: Path) -> list[Path]:
    paths: list[Path] = []
    for index, url in enumerate(urls, start=1):
        parsed = urllib.parse.urlparse(url)
        if parsed.scheme not in {"http", "https"}:
            raise RuntimeError(f"Reference image URL must start with http:// or https://: {url}")

        request = urllib.request.Request(url, headers={"User-Agent": "pano-sharp-studio/0.2"})
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                content_type = response.headers.get("content-type", "")
                extension = _extension_for_url(url, content_type)
                data = _read_limited(response)
        except urllib.error.URLError as exc:
            raise RuntimeError(f"Failed to download reference image {url}: {exc}") from exc

        paths.append(save_reference_bytes(data, out_dir, f"url_{index:02d}{extension}".replace(".", "_")))
    return paths


def prepare_reference_images(
    *,
    existing_paths: list[str],
    urls: list[str],
    out_dir: Path,
) -> list[Path]:
    source_paths = [Path(path).expanduser().resolve() for path in existing_paths]
    _validate_reference_count(source_paths, urls)

    local_paths: list[Path] = []
    for index, path in enumerate(source_paths, start=1):
        if not path.exists() or path.is_dir():
            raise FileNotFoundError(f"Reference image file not found: {path}")
        if path.stat().st_size > MAX_REFERENCE_BYTES:
            raise RuntimeError(f"Reference image is larger than {MAX_REFERENCE_BYTES // (1024 * 1024)}MB: {path}")
        local_paths.append(save_reference_bytes(path.read_bytes(), out_dir / "local", f"local_{index:02d}"))

    downloaded_paths = download_reference_images(urls, out_dir / "urls") if urls else []
    return [*local_paths, *downloaded_paths]


def write_reference_manifest(reference_paths: list[Path], out_path: Path) -> Path:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps([str(path) for path in reference_paths], indent=2))
    return out_path
