from __future__ import annotations

import re
import subprocess
from pathlib import Path

TS_IGNORE = "@ts-ignore"
EXPLICIT_ANY_RE = re.compile(r"(:|as)\s+any\b")


def _git_ls_files() -> list[str]:
    res = subprocess.run(
        ["git", "ls-files"],
        check=True,
        capture_output=True,
        text=True,
    )
    return [line.strip() for line in res.stdout.splitlines() if line.strip()]


def _iter_ts_sources(files: list[str]) -> list[str]:
    out: list[str] = []
    for f in files:
        if not f.startswith("ui/src/"):
            continue
        if f.endswith(".ts") or f.endswith(".tsx"):
            out.append(f)
    return out


def _line_matches(text: str, needle: str) -> list[int]:
    hits: list[int] = []
    for idx, line in enumerate(text.splitlines(), start=1):
        if needle in line:
            hits.append(idx)
    return hits


def _regex_line_matches(text: str, pattern: re.Pattern[str]) -> list[int]:
    hits: list[int] = []
    for idx, line in enumerate(text.splitlines(), start=1):
        if pattern.search(line):
            hits.append(idx)
    return hits


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    files = _iter_ts_sources(_git_ls_files())

    any_errors = False

    print("Checking for @ts-ignore...")
    for rel in files:
        p = repo_root / rel
        if not p.is_file():
            continue
        try:
            text = p.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for line_no in _line_matches(text, TS_IGNORE):
            any_errors = True
            print(f"{rel}:{line_no}: Error: @ts-ignore found! Use @ts-expect-error instead if necessary.")

    print("Checking for explicit any...")
    for rel in files:
        p = repo_root / rel
        if not p.is_file():
            continue
        try:
            text = p.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for line_no in _regex_line_matches(text, EXPLICIT_ANY_RE):
            any_errors = True
            print(f"{rel}:{line_no}: Error: explicit any found! Please use more specific types.")

    if any_errors:
        return 1

    print("TypeScript rules check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
