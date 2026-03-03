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

# Match z-index: <value> or zIndex: <value> (standalone CSS/JS property only)
# Lookbehind ensures we don't match suffixes like "--my-z-index"; fixed-width alternation required
# Captures the value (trailing comma and !important accepted, stripped in normalization)
ZINDEX_PATTERN = re.compile(r"(?:(?<=^)|(?<=[\s{;.]))(?:z-index|zIndex)(?=\s*:)\s*:\s*(?P<value>[^;}\n]+)")

# Allowed: var(--meld-z-*) token exactly; if quoted, opening and closing quote must match
VAR_TOKEN_PATTERN = re.compile(r"^(?:var\(--meld-z-[A-Za-z0-9-]+\)|(['\"])var\(--meld-z-[A-Za-z0-9-]+\)\1)$")

# Policy: component-scoped local stacking values (1, 2, 3) are allowed
ALLOWED_LOCAL = {1, 2, 3}

IGNORE_MARKER = "z-index-check-ignore"


def _is_within_string(s: str, pos: int) -> bool:
    """Return True if position pos in s is inside a single- or double-quoted string."""
    if pos <= 0 or pos >= len(s):
        return False
    i = 0
    in_double = False
    in_single = False
    escape_next = False
    while i < pos:
        c = s[i]
        if escape_next:
            escape_next = False
            i += 1
            continue
        if c == "\\":
            escape_next = True
            i += 1
            continue
        if in_double:
            if c == '"':
                in_double = False
            i += 1
            continue
        if in_single:
            if c == "'":
                in_single = False
            i += 1
            continue
        if c == '"':
            in_double = True
            i += 1
            continue
        if c == "'":
            in_single = True
            i += 1
            continue
        i += 1
    return in_double or in_single


def _find_string_end(s: str, pos: int) -> int:
    """Given we're inside a string at pos, return the position after the closing quote."""
    in_double = False
    in_single = False
    escape_next = False
    i = 0
    while i < pos:
        c = s[i]
        if escape_next:
            escape_next = False
            i += 1
            continue
        if c == "\\":
            escape_next = True
            i += 1
            continue
        if in_double:
            if c == '"':
                in_double = False
            i += 1
            continue
        if in_single:
            if c == "'":
                in_single = False
            i += 1
            continue
        if c == '"':
            in_double = True
            i += 1
            continue
        if c == "'":
            in_single = True
            i += 1
            continue
        i += 1
    target = '"' if in_double else "'"
    escape_next = False
    while i < len(s):
        c = s[i]
        if escape_next:
            escape_next = False
            i += 1
            continue
        if c == "\\":
            escape_next = True
            i += 1
            continue
        if c == target:
            return i + 1
        i += 1
    return len(s)


def check_file(filepath: str) -> list[tuple[int, str, str]]:
    """Scan a file for z-index policy violations. Returns list of (line_num, line_content, reason)."""
    errors: list[tuple[int, str, str]] = []
    try:
        with open(filepath, encoding="utf-8") as f:
            lines = f.readlines()

        prev_line = ""
        in_block_comment = False
        for i, line in enumerate(lines, 1):
            stripped = line.strip()

            # Inline vs standalone ignore marker:
            # - Inline: marker appears alongside other code (e.g. zIndex: 2, /* z-index-check-ignore */)
            #   -> skip only the current line, do NOT set prev_line
            # - Standalone: line is only the marker or comment-wrapped marker -> set prev_line so next line is skipped
            if IGNORE_MARKER in stripped:
                is_standalone = bool(
                    re.match(
                        rf"^\s*(?:/\*\s*{re.escape(IGNORE_MARKER)}\s*\*/"
                        rf"|//\s*{re.escape(IGNORE_MARKER)}\s*"
                        rf"|{re.escape(IGNORE_MARKER)})\s*$",
                        stripped,
                    )
                )
                if is_standalone:
                    prev_line = stripped
                continue

            if IGNORE_MARKER in prev_line:
                prev_line = stripped
                continue

            # Multi-line block comment handling: track state across lines
            code_part = ""
            idx = 0
            remaining = line
            while idx < len(remaining):
                if in_block_comment:
                    end_idx = remaining.find("*/", idx)
                    if end_idx != -1:
                        idx = end_idx + 2
                        in_block_comment = False
                    else:
                        idx = len(remaining)
                else:
                    # Check for block start before single-line comment (/* can appear in // line)
                    block_start = remaining.find("/*", idx)
                    slash_start = remaining.find("//", idx)
                    if block_start != -1 and (slash_start == -1 or block_start < slash_start):
                        code_part += remaining[idx:block_start]
                        end_idx = remaining.find("*/", block_start + 2)
                        if end_idx != -1:
                            idx = end_idx + 2
                        else:
                            idx = len(remaining)
                            in_block_comment = True
                    elif slash_start != -1:
                        if _is_within_string(remaining, slash_start):
                            # // is inside a string (e.g. "http://..."), include the whole string
                            string_end = _find_string_end(remaining, slash_start)
                            code_part += remaining[idx:string_end]
                            idx = string_end
                        else:
                            code_part += remaining[idx:slash_start]
                            idx = len(remaining)
                    else:
                        code_part += remaining[idx:]
                        idx = len(remaining)

            prev_line = stripped

            for match in ZINDEX_PATTERN.finditer(code_part):
                value = match.group("value").strip().rstrip(",")
                value = re.sub(r"\s*!important\s*$", "", value).strip()

                # Allow: var(--meld-z-*) token exactly
                if VAR_TOKEN_PATTERN.fullmatch(value):
                    continue

                # Allow: non-negative integer in ALLOWED_LOCAL (1, 2, 3)
                if value.isdigit():
                    num = int(value)
                    if num in ALLOWED_LOCAL:
                        continue
                    errors.append(
                        (
                            i,
                            stripped,
                            f"Magic number z-index: {num} (use var(--meld-z-*) or local 1/2/3 only)",
                        )
                    )
                    continue

                # Reject: auto, inherit, negative numbers, calc(...), var(--other), etc.
                errors.append(
                    (
                        i,
                        stripped,
                        f"Invalid z-index value: {value!r} (use var(--meld-z-*) or local 1/2/3 only)",
                    )
                )

    except Exception as e:
        errors.append(
            (0, filepath, f"Error reading file: {e}"),
        )
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
                        if line_num == 0:
                            print(f"  File read error: {line_content}")
                        else:
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
