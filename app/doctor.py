from __future__ import annotations

import json

from .runtime import get_setup_status


def main() -> None:
    print(json.dumps(get_setup_status(), indent=2))


if __name__ == "__main__":
    main()
