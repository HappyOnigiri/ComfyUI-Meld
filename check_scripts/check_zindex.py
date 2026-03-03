#!/usr/bin/env python3
"""
Z-index layer policy checker.

Enforces the policy defined in .cursor/rules/ui/z-index-layer-policy.mdc:
- Global layers must use var(--meld-z-*).
- Only small local values (1, 2, 3) are allowed for component-scoped stacking.
- Magic numbers (e.g., 10, 11, 1001) are forbidden.

Supports ignore comments: /* z-index-check-ignore */ or // z-index-check-ignore
on the same line or the line immediately before the z-index usage.
"""

import os
import re
import sys

# Match z-index: <value> or zIndex: <value>
# Captures numeric value when it is a raw number (not var(--meld-z-*))
ZINDEX_PATTERN = re.compile(
    r"(?:z-index|zIndex)\s*:\s*(?:"
    r"var\(--meld-z-[a-zA-Z0-9-]+\)|"
    r'["\']?var\(--meld-z-[a-zA-Z0-9-]+\)["\']?|'
    r"(?P<num>\d+)"
    r")"
)

# Policy: component-scoped local stacking values (1, 2, 3) are allowed
ALLOWED_LOCAL = {1, 2, 3}

IGNORE_MARKER = "z-index-check-ignore"


def check_file(filepath: str) -> list[tuple[int, str, str]]:
    """Scan a file for z-index policy violations. Returns list of (line_num, line_content, reason)."""
    errors: list[tuple[int, str, str]] = []
    try:
        with open(filepath, encoding="utf-8") as f:
            lines = f.readlines()

        prev_line = ""
        for i, line in enumerate(lines, 1):
            stripped = line.strip()

            # Skip if current or previous line has ignore marker
            if IGNORE_MARKER in stripped or IGNORE_MARKER in prev_line:
                prev_line = stripped
                continue

            # Remove inline comments for pattern matching (preserve original for report)
            code_part = re.sub(r"/\*.*?\*/", "", line)
            code_part = re.sub(r"//.*", "", code_part)

            for match in ZINDEX_PATTERN.finditer(code_part):
                num_str = match.group("num")
                if num_str is None:
                    # var(--meld-z-*) usage - allowed
                    continue

                num = int(num_str)
                if num in ALLOWED_LOCAL:
                    continue

                errors.append(
                    (
                        i,
                        stripped,
                        f"Magic number z-index: {num} (use var(--meld-z-*) or local 1/2/3 only)",
                    )
                )

            prev_line = stripped

    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return errors


def main() -> None:
    target_dir = os.path.join("ui", "src")
    has_errors = False

    extensions = (".css", ".ts", ".tsx")
    ignore_files = {"types.d.ts"}

    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        print(f"Directory not found: {search_path}")
        sys.exit(1)

    print(f"Checking z-index policy in {target_dir}...")

    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith(extensions) and file not in ignore_files:
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(filepath, base_dir)
                errors = check_file(filepath)
                if errors:
                    has_errors = True
                    print(f"\n[!] Z-index policy violation in {rel_path}:")
                    for line_num, line_content, reason in errors:
                        print(f"  Line {line_num}: {line_content}")
                        print(f"    -> {reason}")

    if has_errors:
        print("\nError: Z-index policy violations detected!")
        print("1. Use var(--meld-z-*) tokens for global layers (see ui/src/styles/gallery/base.css :root).")
        print("2. Only z-index: 1, 2, or 3 are allowed for local component-scoped stacking.")
        print("3. Add /* z-index-check-ignore */ for temporary exceptions during migration.")
        sys.exit(1)
    else:
        print("Z-index policy check passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
