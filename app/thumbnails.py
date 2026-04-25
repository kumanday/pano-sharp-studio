from __future__ import annotations

from pathlib import Path

from PIL import Image

THUMBNAIL_REL_PATH = "preview_thumbnail.jpg"
THUMBNAIL_SIZE = (480, 240)


def ensure_preview_thumbnail(run_dir: Path) -> Path | None:
    panorama_path = run_dir / "panorama.png"
    thumbnail_path = run_dir / THUMBNAIL_REL_PATH
    if thumbnail_path.exists():
        return thumbnail_path
    if not panorama_path.exists():
        return None

    with Image.open(panorama_path) as image:
        thumbnail = image.convert("RGB")
        thumbnail.thumbnail(THUMBNAIL_SIZE, Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", THUMBNAIL_SIZE, (4, 10, 20))
        offset = (
            (THUMBNAIL_SIZE[0] - thumbnail.width) // 2,
            (THUMBNAIL_SIZE[1] - thumbnail.height) // 2,
        )
        canvas.paste(thumbnail, offset)
        thumbnail_path.parent.mkdir(parents=True, exist_ok=True)
        canvas.save(thumbnail_path, format="JPEG", quality=82, optimize=True)

    return thumbnail_path
