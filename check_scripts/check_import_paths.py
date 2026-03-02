#!/usr/bin/env python3
"""
Check that ComfyUI scripts (api.js, app.js) are imported via absolute paths.

Enforces .cursor/rules/web.mdc: ComfyUI scripts must use /scripts/api.js and
/scripts/app.js. Relative paths (e.g. ../../../scripts/api.js) break the build
when files are moved.

Scope: ui/src/**/*.{ts,tsx}
Excluded: types.d.ts (declaration file; tsc needs relative patterns for resolution)
"""

import os
import re
import sys

# Matches: from "X" or import "X" where X contains scripts/api.js or scripts/app.js
# Captures the import path (group 1)
PATTERN = re.compile(r'(?:from|import)\s+[\'"]([^\'"]*scripts/(?:api|app)\.js)[\'"]')


def is_relative(path: str) -> bool:
    """Return True if path is relative (../ or ./)."""
    return path.startswith("..") or path.startswith("./")


def check_file(filepath: str) -> list[tuple[int, str, str]]:
    """Check a single file for relative ComfyUI script imports. Return list of (line, content, message)."""
    errors: list[tuple[int, str, str]] = []
    try:
        with open(filepath, encoding="utf-8") as f:
            for i, line in enumerate(f, 1):
                for match in PATTERN.finditer(line):
                    path = match.group(1)
                    if is_relative(path):
                        errors.append(
                            (
                                i,
                                line.strip(),
                                f'Use absolute path "/scripts/..." instead of relative "{path}"',
                            )
                        )
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return errors


def main() -> None:
    target_dir = os.path.join("ui", "src")
    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        print(f"Directory not found: {search_path}")
        sys.exit(0)

    print(f"Checking ComfyUI script import paths in {target_dir}...")

    has_errors = False
    ignore_files = {"types.d.ts"}

    for root, _, files in os.walk(search_path):
        for file in files:
            if not (file.endswith(".ts") or file.endswith(".tsx")):
                continue
            if file in ignore_files:
                continue
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, base_dir)
            errors = check_file(filepath)
            if errors:
                has_errors = True
                print(f"\n[!] Relative ComfyUI script import in {rel_path}:")
                for line_num, line_content, reason in errors:
                    print(f"  Line {line_num}: {line_content}")
                    print(f"    -> {reason}")

    if has_errors:
        print("\nError: Use absolute paths for ComfyUI scripts.")
        print('  Allowed:  from "/scripts/api.js" or from "/scripts/app.js"')
        print('  Forbidden: from "../../scripts/api.js" or similar relative paths')
        print("  See .cursor/rules/web.mdc (Import Paths section)")
        sys.exit(1)
    else:
        print("Import path check passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
