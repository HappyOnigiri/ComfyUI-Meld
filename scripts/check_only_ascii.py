from __future__ import annotations

import re
import subprocess
from pathlib import Path

EXCLUDE_RE = re.compile(r"(\.ja\.md$|^docs/ja/|^\.cursor/rules/|^web/js/gallery_extension\.js$)")


def _git_ls_files() -> list[str]:
    res = subprocess.run(
        ["git", "ls-files"],
        check=True,
        capture_output=True,
        text=True,
    )
    return [line.strip() for line in res.stdout.splitlines() if line.strip()]


def _first_non_ascii_locations(data: bytes, max_hits: int = 20) -> list[tuple[int, int]]:
    """
    Return (line_no, col_no) pairs (1-based) for non-ASCII bytes (> 0x7F).
    This is intentionally byte-based: the repository enforces ASCII-only source code.
    """
    hits: list[tuple[int, int]] = []
    line_no = 1
    col_no = 1
    for b in data:
        if b == 0x0A:  # \n
            line_no += 1
            col_no = 1
            continue
        if b > 0x7F:
            hits.append((line_no, col_no))
            if len(hits) >= max_hits:
                break
        col_no += 1
    return hits


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]

    print("Checking for non-ASCII characters...")

    files = _git_ls_files()
    targets = [f for f in files if not EXCLUDE_RE.search(f)]

    any_errors = False
    for rel in targets:
        p = repo_root / rel
        if not p.is_file():
            continue
        try:
            data = p.read_bytes()
        except OSError:
            continue

        hits = _first_non_ascii_locations(data)
        if not hits:
            continue

        any_errors = True
        for line_no, col_no in hits:
            print(f"{rel}:{line_no}:{col_no}: non-ASCII byte found")

    if any_errors:
        print("Error: Non-ASCII characters found!")
        return 1

    print("All files are ASCII (English) only.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
