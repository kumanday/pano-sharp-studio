#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
uv sync
uv run sharp --help >/dev/null
echo "Apple SHARP is available in this project's uv environment."
echo "Next: uv run pano-sharp-doctor"
