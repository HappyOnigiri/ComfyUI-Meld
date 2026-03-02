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

# Matches canonical ComfyUI script imports only:
# - static: from "/scripts/api.js" / import "/scripts/app.js"
# - dynamic: import("/scripts/api.js") / import("/scripts/app.js")
# Captures the import path in group "specifier".
PATTERN = re.compile(
    r"""
    (?:
        (?:from|import)\s+['"](?P<static>/scripts/(?:api|app)\.js)['"]
        |
        import\(\s*['"](?P<dynamic>/scripts/(?:api|app)\.js)['"]\s*\)
    )
    """,
    re.VERBOSE,
)

ALLOWED_SPECIFIERS = {"/scripts/api.js", "/scripts/app.js"}


def is_relative(path: str) -> bool:
    """Return True when specifier does not use absolute-leading slash."""
    return not path.startswith("/")


def check_file(filepath: str) -> tuple[list[tuple[int, str, str]], bool]:
    """Check a single file and return (lint_errors, had_read_error)."""
    errors: list[tuple[int, str, str]] = []
    had_read_error = False
    try:
        with open(filepath, encoding="utf-8") as f:
            for i, line in enumerate(f, 1):
                # Static import forms: from "..." / import "..."
                for static_match in re.finditer(r'(?:from|import)\s+[\'"]([^\'"]+)[\'"]', line):
                    specifier = static_match.group(1)
                    if "scripts/" not in specifier:
                        continue
                    if is_relative(specifier):
                        errors.append(
                            (
                                i,
                                line.strip(),
                                f'Use absolute path "/scripts/..." instead of "{specifier}"',
                            )
                        )
                        continue
                    if specifier not in ALLOWED_SPECIFIERS:
                        errors.append(
                            (
                                i,
                                line.strip(),
                                f'Only "/scripts/api.js" and "/scripts/app.js" are allowed, got "{specifier}"',
                            )
                        )

                # Dynamic import form: import("...")
                for dynamic_match in re.finditer(r'import\(\s*[\'"]([^\'"]+)[\'"]\s*\)', line):
                    specifier = dynamic_match.group(1)
                    if "scripts/" not in specifier:
                        continue
                    if is_relative(specifier):
                        errors.append(
                            (
                                i,
                                line.strip(),
                                f'Use absolute path "/scripts/..." instead of "{specifier}"',
                            )
                        )
                        continue
                    if specifier not in ALLOWED_SPECIFIERS:
                        errors.append(
                            (
                                i,
                                line.strip(),
                                f'Only "/scripts/api.js" and "/scripts/app.js" are allowed, got "{specifier}"',
                            )
                        )
    except Exception as e:
        had_read_error = True
        print(f"Error reading {filepath}: {e}")
    return errors, had_read_error


def main() -> None:
    target_dir = os.path.join("ui", "src")
    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        print(f"Directory not found: {search_path}")
        sys.exit(1)

    print(f"Checking ComfyUI script import paths in {target_dir}...")

    has_errors = False
    read_error_count = 0
    ignore_files = {"types.d.ts"}

    for root, _, files in os.walk(search_path):
        for file in files:
            if not (file.endswith(".ts") or file.endswith(".tsx")):
                continue
            if file in ignore_files:
                continue
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, base_dir)
            errors, had_read_error = check_file(filepath)
            if had_read_error:
                read_error_count += 1
            if errors:
                has_errors = True
                print(f"\n[!] Relative ComfyUI script import in {rel_path}:")
                for line_num, line_content, reason in errors:
                    print(f"  Line {line_num}: {line_content}")
                    print(f"    -> {reason}")

    if read_error_count > 0:
        print(f"\nError: Failed to read {read_error_count} file(s) during import path check.")
        sys.exit(1)
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
