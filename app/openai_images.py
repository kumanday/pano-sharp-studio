from __future__ import annotations

import base64
from pathlib import Path

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
    quality: str = "medium",
    output_format: str = "png",
) -> Path:
    client = OpenAI()
    result = client.images.generate(
        model="gpt-image-2",
        prompt=build_panorama_prompt(prompt),
        size=size,
        quality=quality,
        output_format=output_format,
    )
    image_base64 = result.data[0].b64_json
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(image_base64))
    return out_path
