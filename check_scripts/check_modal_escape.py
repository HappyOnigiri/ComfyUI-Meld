#!/usr/bin/env python3
"""
Verify that all modal/overlay UI components close on Escape key.

Enforces agent-config/rules/ui/modal-escape-policy.mdc:
- Any modal/overlay UI MUST close on Escape.
- A "modal" includes UI using createPortal, meld-modal-overlay, or *Modal* components.

This script:
1. Finds modal components (filename pattern or content indicators)
2. Checks for Escape handling (useEscapeToClose, e.key === "Escape", etc.)
3. Reports modal components that lack Escape handling

Scope: ui/src/**/*.{ts,tsx}
"""

import fnmatch
import os
import re
import sys

# -----------------------------------------------------------------------------
# Modal component detection
# -----------------------------------------------------------------------------

# Filename patterns that indicate a modal/overlay component
MODAL_FILENAME_PATTERNS = ("*Modal*", "*Popup*", "*Overlay*")


def matches_modal_filename(filename: str) -> bool:
    """Return True if filename matches any modal pattern (tsx only; excludes hooks/helpers and tests)."""
    if not filename.endswith(".tsx"):
        return False
    if ".test." in filename or ".spec." in filename:
        return False
    return any(fnmatch.fnmatch(filename, p) for p in MODAL_FILENAME_PATTERNS)


# Content patterns: use word boundary to avoid false positives (e.g. createPortalRoot)
HAS_CREATE_PORTAL = re.compile(r"\bcreatePortal\s*\(", re.MULTILINE)
HAS_MELD_MODAL_OVERLAY = re.compile(r"meld-modal-overlay", re.MULTILINE)

# Escape handling indicators
HAS_USE_ESCAPE_TO_CLOSE = re.compile(r"useEscapeToClose\s*\(\s*\{", re.MULTILINE)
HAS_KEY_ESCAPE = re.compile(r'[ek]\.key\s*===\s*["\']Escape["\']', re.MULTILINE)
HAS_ON_KEY_DOWN_ESCAPE = re.compile(r"onKeyDown\s*=\s*\{[^}]*[ek]\.key\s*===\s*[\"']Escape[\"']", re.DOTALL)
# Handles: onKeyDown={(e) => e.key === "Escape" && ...}
HAS_INLINE_KEY_ESCAPE = re.compile(r"onKeyDown=\{[^}]*\.key\s*===\s*[\"']Escape[\"']", re.DOTALL)


def has_create_portal(content: str) -> bool:
    """Return True if file uses createPortal(...) from react-dom."""
    return bool(HAS_CREATE_PORTAL.search(content))


def has_meld_modal_overlay(content: str) -> bool:
    """Return True if file uses meld-modal-overlay class."""
    return bool(HAS_MELD_MODAL_OVERLAY.search(content))


def is_modal_component(filepath: str, content: str) -> bool:
    """
    Return True if the file is a modal/overlay component per policy.

    Only .tsx files are considered (React components); .ts hooks/reducers are excluded.
    Test files (.test.tsx, .spec.tsx) are always excluded.

    A file is a modal if:
    - Filename matches *Modal*.tsx, *Popup*.tsx, *Overlay*.tsx, OR
    - Content contains createPortal(...), OR
    - Content contains meld-modal-overlay (as className, not selector strings)
    """
    filename = os.path.basename(filepath)
    # Exclude test files
    if ".test." in filename or ".spec." in filename:
        return False
    if matches_modal_filename(filename):
        return True
    if has_create_portal(content):
        return True
    if has_meld_modal_overlay(content):
        return True
    return False


def has_escape_handling(content: str) -> bool:
    """
    Return True if the file implements Escape-to-close behavior.

    Indicators:
    - useEscapeToClose({ onEscape: ... })
    - e.key === "Escape" or e.key === 'Escape'
    - onKeyDown with Escape check
    """
    if HAS_USE_ESCAPE_TO_CLOSE.search(content):
        return True
    if HAS_KEY_ESCAPE.search(content):
        return True
    if HAS_ON_KEY_DOWN_ESCAPE.search(content):
        return True
    if HAS_INLINE_KEY_ESCAPE.search(content):
        return True
    return False


# Components that are modal-like but exempt (e.g. wrappers that delegate to children)
# Add basenames only; paths are normalized for comparison.
ALLOWLIST = frozenset(
    {
        "GalleryModals.tsx",  # Wrapper that delegates Escape to child modals
        "ImageViewer.tsx",  # Delegates Escape to useImageViewerLogic/useViewerKeyboardShortcuts
    }
)


def is_allowlisted(filepath: str) -> bool:
    """Return True if the file is in the allowlist."""
    basename = os.path.basename(filepath)
    return basename in ALLOWLIST


# -----------------------------------------------------------------------------
# Main check logic
# -----------------------------------------------------------------------------


def find_modal_components(ui_src: str) -> list[tuple[str, str]]:
    """Return list of (filepath, content) for files that are modal components."""
    modals: list[tuple[str, str]] = []
    for root, _dirs, files in os.walk(ui_src):
        for f in files:
            if not f.endswith(".tsx"):
                continue
            filepath = os.path.join(root, f)
            try:
                content = open(filepath, encoding="utf-8").read()
            except OSError as e:
                print(f"Warning: could not read {filepath}: {e}", file=sys.stderr)
                continue
            if is_modal_component(filepath, content):
                modals.append((filepath, content))
    return modals


def main() -> None:
    base_dir = os.getcwd()
    ui_src = os.path.join(base_dir, "ui", "src")

    if not os.path.isdir(ui_src):
        print(f"Directory not found: {ui_src}")
        sys.exit(1)

    print("Checking modal Escape handling per agent-config/rules/ui/modal-escape-policy.mdc...")

    modals = find_modal_components(ui_src)
    violations: list[str] = []

    for filepath, content in modals:
        if is_allowlisted(filepath):
            continue
        if not has_escape_handling(content):
            rel = os.path.relpath(filepath, base_dir)
            violations.append(rel)

    if violations:
        print("\n[!] Modal/overlay components without Escape-to-close handling:")
        for v in sorted(violations):
            print(f"  - {v}")
        print("\nPolicy: All modals MUST close on Escape.")
        print("Add useEscapeToClose({ onEscape: ... }) or handle key === 'Escape'.")
        print("See agent-config/rules/ui/modal-escape-policy.mdc")
        sys.exit(1)

    print("Modal Escape check passed.")
    sys.exit(0)


if __name__ == "__main__":
    main()
