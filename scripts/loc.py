from __future__ import annotations

import subprocess
from collections import defaultdict
from pathlib import Path


def _git_ls_files() -> list[str]:
    res = subprocess.run(
        ["git", "ls-files"],
        check=True,
        capture_output=True,
        text=True,
    )
    files = [line.strip() for line in res.stdout.splitlines() if line.strip()]
    return files


def _count_lines(path: Path) -> int:
    # Count newline characters in binary for speed and to avoid decode issues.
    data = path.read_bytes()
    if not data:
        return 0
    return data.count(b"\n") + (0 if data.endswith(b"\n") else 1)


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    files = _git_ls_files()

    excluded = {"web/js/gallery_extension.js"}
    files = [f for f in files if f not in excluded]

    per_file: list[tuple[int, str]] = []
    per_ext: dict[str, int] = defaultdict(int)

    for rel in files:
        p = repo_root / rel
        if not p.is_file():
            continue
        try:
            lines = _count_lines(p)
        except OSError:
            continue
        per_file.append((lines, rel))

        ext = p.suffix.lstrip(".") if p.suffix else "no_ext"
        per_ext[ext] += lines

    per_file.sort(key=lambda t: t[0], reverse=True)

    print("=== Lines of code by file ===")
    for lines, rel in per_file:
        # Match wc-ish style: "<lines> <path>"
        print(f"{lines:7d} {rel}")

    print("")
    print("=== Lines of code by extension ===")
    for ext, total in sorted(per_ext.items(), key=lambda t: t[1], reverse=True):
        print(f"{total:10d} {ext}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
