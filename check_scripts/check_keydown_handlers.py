#!/usr/bin/env python3
"""
Check that keydown event handlers follow the keybinding propagation policy.

Flags global keydown listeners (window/document) that do not use { capture: true }.
Does not validate stopImmediatePropagation (see .cursor/rules/ui/keybinding-propagation-policy.mdc
for full policy).

Scope: ui/src/**/*.{ts,tsx}
Allowlist: useEscapeToClose.ts, useKeydownCapture.ts (reference implementations).
"""

from __future__ import annotations

import os
import re
import sys

# Files that implement the policy correctly; no need to check them.
# Use normalized relative paths (forward slashes) from repo root.
ALLOWLIST_FILES = {
    "ui/src/hooks/useEscapeToClose.ts",
    "ui/src/hooks/useKeydownCapture.ts",
}

# Matches (window|document).addEventListener("keydown" or 'keydown', handler, ...)
# Captures the third-argument region (optional) in group "options".
# Handler group uses non-greedy catch-all; the optional options group delimits
# the handler for cases like (e) => onKey(fn(a, b)) with nested parens/commas.
KEYDOWN_LISTENER_PATTERN = re.compile(
    r"""
    (?:window|document)\s*\.\s*addEventListener\s*\(\s*
    ["']keydown["']\s*,\s*
    (?P<handler>.*?)
    (?:\s*,\s*(?P<options>\{.*?\}|true|false))?
    \s*\)
    """,
    re.VERBOSE | re.DOTALL,
)

# Patterns that indicate capture is used (third argument).
# Requires capture to be an actual property (not inside a string literal like
# "capture: true"); use (?:^|\{|,)\s* to assert we are at object start or after
# a property delimiter.
CAPTURE_OK_PATTERNS = [
    re.compile(
        r'(?:^|\{|,)\s*(?:"capture"|\'capture\'|capture)\s*:\s*true\b'
    ),  # capture: true (quoted or unquoted key)
    re.compile(r"^\s*true\s*$", re.MULTILINE),  # Legacy: true as useCapture
]


def _has_capture_option(options: str | None) -> bool:
    """Return True if the options string indicates capture phase is used."""
    if options is None:
        return False
    # Normalize: collapse whitespace for matching
    normalized = " ".join(options.split())
    for pat in CAPTURE_OK_PATTERNS:
        if pat.search(normalized):
            return True
    return False


def check_file(filepath: str) -> list[tuple[int, str, str]]:
    """Check a single file for keydown handler policy violations."""
    errors: list[tuple[int, str, str]] = []
    try:
        with open(filepath, encoding="utf-8") as f:
            content = f.read()

        for match in KEYDOWN_LISTENER_PATTERN.finditer(content):
            options = match.group("options")
            if not _has_capture_option(options):
                start = match.start()
                line_num = content.count("\n", 0, start) + 1
                snippet = match.group(0).replace("\n", " ").strip()
                if len(snippet) > 80:
                    snippet = snippet[:77] + "..."
                errors.append(
                    (
                        line_num,
                        snippet,
                        "addEventListener('keydown') must use { capture: true } to intercept before ComfyUI handlers",
                    )
                )
    except OSError as e:
        errors.append((0, filepath, f"Error reading file: {e}"))
        print(f"Error reading {filepath}: {e}")
    return errors


def main() -> None:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(script_dir)
    target_dir = os.path.join("ui", "src")
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        print(f"Directory not found: {search_path}")
        sys.exit(1)

    print("Checking keydown handler policy (capture phase) in ui/src...")

    has_errors = False
    for root, _, files in os.walk(search_path):
        for file in files:
            if not (file.endswith(".ts") or file.endswith(".tsx")):
                continue
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, base_dir)
            rel_path_normalized = rel_path.replace("\\", "/")
            if rel_path_normalized in ALLOWLIST_FILES:
                continue
            errors = check_file(filepath)
            if errors:
                has_errors = True
                print(f"\n[!] Keydown policy violation in {rel_path}:")
                for line_num, snippet, reason in errors:
                    print(f"  Line {line_num}: {snippet}")
                    print(f"    -> {reason}")

    if has_errors:
        print("\nError: Keydown handlers must use { capture: true }.")
        print("  See .cursor/rules/ui/keybinding-propagation-policy.mdc")
        print("  Use useEscapeToClose or useKeydownCapture hooks when possible.")
        sys.exit(1)
    print("Keydown handler policy check passed.")
    sys.exit(0)


if __name__ == "__main__":
    main()
