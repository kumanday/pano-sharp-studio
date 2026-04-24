from __future__ import annotations

import base64
from contextlib import ExitStack
from pathlib import Path
from typing import Iterable

from openai import OpenAI


def build_panorama_prompt(user_prompt: str) -> str:
    """Prompt wrapper that nudges GPT Image 2 toward usable 360 equirectangular output."""
    return f"""
Create a seamless 360-degree equirectangular panorama image for a Gaussian splat reconstruction pipeline.

Scene description:
{user_prompt}

Requirements:
- Output must be a true 2:1 equirectangular panorama.
- Left and right edges must match seamlessly.
- Avoid visible borders, frames, fisheye circles, text, UI, watermarks, labels, or captions.
- Use a single coherent camera position at the center of the scene.
- Keep foreground objects clear enough for perspective crops.
- Make ceiling/sky and floor/ground plausible across the full sphere.
""".strip()


def generate_panorama(
    prompt: str,
    out_path: Path,
    *,
    size: str = "3840x1920",
    quality: str = "high",
    output_format: str = "png",
    reference_image_paths: Iterable[Path] | None = None,
) -> Path:
    client = OpenAI()
    panorama_prompt = build_panorama_prompt(prompt)
    reference_paths = [Path(path) for path in reference_image_paths or []]

    if reference_paths:
        with ExitStack() as stack:
            images = [stack.enter_context(path.open("rb")) for path in reference_paths]
            result = client.images.edit(
                model="gpt-image-2",
                image=images,
                prompt=panorama_prompt,
                size=size,
                quality=quality,
                output_format=output_format,
            )
    else:
        result = client.images.generate(
            model="gpt-image-2",
            prompt=panorama_prompt,
            size=size,
            quality=quality,
            output_format=output_format,
        )

    image_base64 = result.data[0].b64_json
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(image_base64))
    return out_path
