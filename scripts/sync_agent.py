import shutil
import sys
from pathlib import Path


def sync_directories(src_dir: Path, dst_dir: Path) -> None:
    """
    Synchronize src_dir to dst_dir, mirroring its content.
    Similar to rsync -av --delete.
    """
    if not src_dir.exists():
        print(f"Error: Source directory {src_dir} does not exist.")
        sys.exit(1)

    # Ensure destination exists
    dst_dir.mkdir(parents=True, exist_ok=True)

    # Get all items in source and destination
    src_items = {p.relative_to(src_dir) for p in src_dir.rglob("*")}
    dst_items = {p.relative_to(dst_dir) for p in dst_dir.rglob("*")}

    # Delete items in destination that are not in source
    for item in sorted(dst_items - src_items, reverse=True):
        p = dst_dir / item
        if p.is_dir():
            shutil.rmtree(p)
            print(f"Removed directory: {p}")
        else:
            p.unlink()
            print(f"Removed file: {p}")

    # Copy items from source to destination
    for item in sorted(src_items):
        src_p = src_dir / item
        dst_p = dst_dir / item

        if src_p.is_dir():
            dst_p.mkdir(parents=True, exist_ok=True)
        else:
            # Only copy if different or doesn't exist
            if (
                not dst_p.exists()
                or src_p.stat().st_mtime > dst_p.stat().st_mtime
                or src_p.stat().st_size != dst_p.stat().st_size
            ):
                dst_p.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src_p, dst_p)
                print(f"Synced: {item}")


if __name__ == "__main__":
    # Project root is the parent directory of this script's directory (scripts/)
    project_root = Path(__file__).parent.parent
    src = project_root / ".cursor"
    dst = project_root / ".agent"

    print(f"Synchronizing {src} to {dst}...")
    sync_directories(src, dst)
    print("Synchronization complete.")
