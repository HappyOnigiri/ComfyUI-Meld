from __future__ import annotations

import subprocess
from pathlib import Path


def _git_ls_files() -> list[str]:
    res = subprocess.run(
        ["git", "ls-files"],
        check=True,
        capture_output=True,
        text=True,
    )
    return [line.strip() for line in res.stdout.splitlines() if line.strip()]


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]

    print("Checking and fixing trailing newlines for .md and .mdc files...")

    files = _git_ls_files()
    targets = [f for f in files if f.endswith(".md") or f.endswith(".mdc")]

    fixed_count = 0
    for rel in targets:
        p = repo_root / rel
        if not p.is_file():
            continue

        try:
            content = p.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            # Skip non-UTF-8 files if any
            continue
        except OSError:
            continue

        if not content:
            # Handle empty files by adding a single newline if desired,
            # or just skip. Usually, empty files should have one newline.
            new_content = "\n"
        else:
            # Remove all trailing newlines/spaces and add exactly one newline
            new_content = content.rstrip() + "\n"

        if content != new_content:
            p.write_text(new_content, encoding="utf-8")
            print(f"Fixed trailing newline: {rel}")
            fixed_count += 1

    if fixed_count > 0:
        print(f"Total files fixed: {fixed_count}")
    else:
        print("All .md and .mdc files have correct trailing newlines.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
