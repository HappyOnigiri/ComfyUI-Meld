import os
import sys


def resolve_search_path() -> tuple[str, str, str]:
    """Resolves and validates the search directories, returning (base_dir, target_dir, search_path)."""
    target_dir = os.path.join("ui", "src")
    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        if os.path.basename(base_dir) == "ui":
            search_path = os.path.join(base_dir, "src")
            if not os.path.exists(search_path):
                print(f"Directory not found: {search_path}")
                sys.exit(1)
        else:
            print(f"Directory not found: {search_path}")
            sys.exit(1)

    return base_dir, target_dir, search_path
