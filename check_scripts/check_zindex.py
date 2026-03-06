#!/usr/bin/env python3
"""
Z-index layer policy checker.

Enforces the policy defined in agent-config/rules/ui/z-index-layer-policy.mdc:
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
# Lookbehind ensures we don't match suffixes like "--my-z-index"; includes comma for compact literals
# Captures the value; stops at comma, semicolon, brace, or newline so object literals work
ZINDEX_PATTERN = re.compile(r"(?:(?<=^)|(?<=[\s{;.,]))(?:z-index|zIndex)(?=\s*:)\s*:\s*(?P<value>[^,;}\n]+)")

# Allowed: var(--meld-z-*) token exactly; if quoted, opening and closing quote must match
VAR_TOKEN_PATTERN = re.compile(r"^(?:var\(--meld-z-[A-Za-z0-9-]+\)|(['\"])var\(--meld-z-[A-Za-z0-9-]+\)\1)$")

# Policy: component-scoped local stacking values (1, 2, 3) are allowed
ALLOWED_LOCAL = {1, 2, 3}

IGNORE_MARKER = "z-index-check-ignore"

# Regex to test if a line is "standalone" ignore (line is only comment-wrapped marker, no bare marker)
_STANDALONE_IGNORE_PATTERN = re.compile(
    rf"^\s*(?:/\*\s*{re.escape(IGNORE_MARKER)}\s*\*/"
    rf"|//\s*{re.escape(IGNORE_MARKER)}\s*)\s*$"
)


class _JsScanner:
    """
    Scans JavaScript/TypeScript/CSS source for strings and comments.
    Tracks state for single/double/backtick strings, block/line comments, and escapes.
    """

    def __init__(self, s: str) -> None:
        self.s = s
        self.i = 0
        self.in_single = False
        self.in_double = False
        self.in_backtick = False
        self.in_block_comment = False
        self.in_line_comment = False
        self.escape_next = False

    def _reset(self) -> None:
        """Reset position and state."""
        self.i = 0
        self.in_single = False
        self.in_double = False
        self.in_backtick = False
        self.in_block_comment = False
        self.in_line_comment = False
        self.escape_next = False

    def _advance_one(self, *, escape_in_code: bool = True) -> bool:
        """
        Advance one character, update state. Returns False if at end.
        escape_in_code: when True, treat \\ as escape in code; when False, only in strings.
        """
        if self.i >= len(self.s):
            return False
        c = self.s[self.i]
        if self.escape_next:
            self.escape_next = False
            self.i += 1
            return True
        if c == "\\":
            if escape_in_code or self.in_single or self.in_double or self.in_backtick:
                self.escape_next = True
            self.i += 1
            return True
        if self.in_backtick:
            if c == "`":
                self.in_backtick = False
            self.i += 1
            return True
        if self.in_single:
            if c == "'":
                self.in_single = False
            self.i += 1
            return True
        if self.in_double:
            if c == '"':
                self.in_double = False
            self.i += 1
            return True
        if self.in_block_comment:
            if c == "*" and self.i + 1 < len(self.s) and self.s[self.i + 1] == "/":
                self.in_block_comment = False
                self.i += 2
            else:
                self.i += 1
            return True
        if self.in_line_comment:
            if c == "\n":
                self.in_line_comment = False
            self.i += 1
            return True

        # In code: check for string/comment starters
        if c == "`":
            self.in_backtick = True
            self.i += 1
            return True
        if c == "'":
            self.in_single = True
            self.i += 1
            return True
        if c == '"':
            self.in_double = True
            self.i += 1
            return True
        if c == "/" and self.i + 1 < len(self.s):
            n = self.s[self.i + 1]
            if n == "*":
                self.in_block_comment = True
                self.i += 2
                return True
            if n == "/":
                self.in_line_comment = True
                self.i += 2
                return True
        self.i += 1
        return True

    def advance_until(self, pos: int, *, escape_in_code: bool = True) -> None:
        """Advance from current position to pos (exclusive), updating state."""
        while self.i < pos and self.i < len(self.s):
            self._advance_one(escape_in_code=escape_in_code)

    def is_pos_within_string(self, pos: int) -> bool:
        """Return True if position pos is inside a string."""
        if pos <= 0 or pos >= len(self.s):
            return False
        self._reset()
        self.advance_until(pos)
        return self.in_double or self.in_single or self.in_backtick

    def find_string_end_from(self, pos: int) -> int:
        """
        Given we're inside a string at pos, return the position after the closing quote.
        Assumes advance_until(pos) has been called (or will scan from 0 to pos first).
        """
        self._reset()
        self.advance_until(pos)
        target = '"' if self.in_double else ("'" if self.in_single else "`")
        self.escape_next = False
        while self.i < len(self.s):
            c = self.s[self.i]
            if self.escape_next:
                self.escape_next = False
                self.i += 1
                continue
            if c == "\\":
                self.escape_next = True
                self.i += 1
                continue
            if c == target:
                return self.i + 1
            self.i += 1
        return len(self.s)

    def search_marker_within_comments(self, marker: str) -> bool:
        """Return True if marker appears anywhere inside a comment (block or line)."""
        self._reset()
        while self.i < len(self.s):
            if self.in_block_comment or self.in_line_comment:
                if self.s[self.i : self.i + len(marker)] == marker:
                    return True
            if not self._advance_one(escape_in_code=False):
                break
        return False


def _marker_in_comment(line: str) -> bool:
    """Return True if IGNORE_MARKER appears inside a comment (not in a string)."""
    scanner = _JsScanner(line)
    return scanner.search_marker_within_comments(IGNORE_MARKER)


def _is_within_string(s: str, pos: int) -> bool:
    """Return True if position pos in s is inside a single-, double-, or backtick-quoted string."""
    scanner = _JsScanner(s)
    return scanner.is_pos_within_string(pos)


def _find_string_end(s: str, pos: int) -> int:
    """Given we're inside a string at pos, return the position after the closing quote."""
    scanner = _JsScanner(s)
    return scanner.find_string_end_from(pos)


def check_file(filepath: str) -> list[tuple[int, str, str]]:
    """Scan a file for z-index policy violations. Returns list of (line_num, line_content, reason)."""
    errors: list[tuple[int, str, str]] = []
    try:
        with open(filepath, encoding="utf-8") as f:
            lines = f.readlines()

        prev_was_standalone_ignore = False
        in_block_comment = False
        for i, line in enumerate(lines, 1):
            stripped = line.strip()

            # Inline vs standalone ignore marker:
            # - Inline: marker appears alongside other code (e.g. zIndex: 2, /* z-index-check-ignore */)
            #   -> skip only the current line, do NOT set prev_was_standalone_ignore
            # - Standalone: line is only the marker or comment-wrapped marker -> next line is skipped
            # - Only accept marker when it appears inside a comment (not in strings like "z-index-check-ignore")
            if _marker_in_comment(line):
                is_standalone = bool(_STANDALONE_IGNORE_PATTERN.match(stripped))
                prev_was_standalone_ignore = is_standalone
                continue

            if prev_was_standalone_ignore:
                prev_was_standalone_ignore = False
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
                        if _is_within_string(remaining, block_start):
                            # /* is inside a string (e.g. template literal), skip the string
                            string_end = _find_string_end(remaining, block_start)
                            code_part += remaining[idx:string_end]
                            idx = string_end
                        else:
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

            prev_was_standalone_ignore = False

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
