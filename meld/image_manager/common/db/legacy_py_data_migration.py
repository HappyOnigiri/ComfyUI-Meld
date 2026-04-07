"""One-time migration from <repo>/py/data to <repo>/meld/data.

PR #113 renamed py/ -> meld/ to eliminate PyPI `py` namespace-package
shadowing.  Users upgrading from before that PR have their SQLite DBs and
runtime files left behind in <repo>/py/data.  This module copies them into
the new meld/data location, then renames the entire <repo>/py directory so
`import py` stops resolving to the local namespace package.

Intentional isolation: this file is kept separate from client.py so that,
once the migration is no longer needed, it can be deleted along with the
two lines that call it in client.py -- no further surgery required.
"""

import logging
import os
import shutil
from datetime import datetime

logger = logging.getLogger(__name__)


def migrate_legacy_py_data(data_dir: str) -> None:
    """Copy <repo>/py/data into data_dir and rename <repo>/py to a backup.

    Derives all paths from data_dir (expected to be <repo>/meld/data):
      repo_root        = dirname(dirname(data_dir))
      legacy_py_dir    = repo_root/py
      legacy_data_dir  = repo_root/py/data
      migration_marker = data_dir/.migrated_from_py

    The function is idempotent: a marker file prevents re-runs, and strict
    guards prevent clobbering work users already did on the new layout.
    """
    # data_dir = <repo>/meld/data  ->  meld  ->  <repo>
    repo_root = os.path.dirname(os.path.dirname(data_dir))
    legacy_py_dir = os.path.join(repo_root, "py")
    legacy_data_dir = os.path.join(legacy_py_dir, "data")
    migration_marker = os.path.join(data_dir, ".migrated_from_py")

    if os.path.exists(migration_marker):
        return
    if not os.path.isdir(legacy_data_dir):
        return

    # Legacy must have meaningful content.
    legacy_signals = ("active_database.json", "default.db", "databases", "runtime")
    if not any(os.path.exists(os.path.join(legacy_data_dir, s)) for s in legacy_signals):
        return

    # New data_dir must look empty; never clobber in-progress work.
    new_signals = ("active_database.json", "default.db")
    if any(os.path.exists(os.path.join(data_dir, s)) for s in new_signals):
        return
    new_databases = os.path.join(data_dir, "databases")
    if os.path.isdir(new_databases) and any(f for f in os.listdir(new_databases) if not f.startswith(".")):
        return
    # Also guard against a populated runtime/ directory (trash/thumbnail state),
    # mirroring the databases/ check above to prevent overwriting live runtime data.
    new_runtime = os.path.join(data_dir, "runtime")
    if os.path.isdir(new_runtime) and any(f for f in os.listdir(new_runtime) if not f.startswith(".")):
        return

    # Step 1: copy data into meld/data.
    # Record existence before copy so the error handler can avoid deleting
    # a pre-existing directory that was not created by this migration.
    data_dir_existed = os.path.exists(data_dir)
    try:
        shutil.copytree(legacy_data_dir, data_dir, dirs_exist_ok=True)
    except OSError:
        logger.exception("Failed to copy legacy py/data to %s; leaving legacy intact", data_dir)
        # Only remove data_dir if this migration created it; never delete a
        # pre-existing directory, as it may contain user data that passed the
        # guard (e.g. dotfiles or other entries not covered by the checks above).
        if not data_dir_existed:
            shutil.rmtree(data_dir, ignore_errors=True)
        return

    # Step 2: rename <repo>/py so it no longer shadows the PyPI `py` package.
    now = datetime.now()
    backup_name = f"py_legacy_backup_{now.strftime('%Y%m%d')}"
    backup_path = os.path.join(repo_root, backup_name)
    if os.path.exists(backup_path):
        backup_path = os.path.join(repo_root, f"py_legacy_backup_{now.strftime('%Y%m%d_%H%M%S')}")
    renamed = _rename_with_pycache_fallback(legacy_py_dir, backup_path)

    # Step 2.5: remove thumbnails from the backup directory.
    # Thumbnails were already copied into meld/data and are fully regenerable,
    # so keeping duplicates in the backup only wastes disk space.
    if renamed:
        _drop_backup_thumbnails(backup_path)

    # Step 3: write the marker (always, so we do not retry on next boot).
    try:
        with open(migration_marker, "w", encoding="utf-8") as f:
            f.write(f"{now.isoformat()}\nbackup={backup_path if renamed else '(rename failed; py/ still present)'}\n")
    except OSError:
        logger.exception("Failed to write migration marker at %s", migration_marker)

    if renamed:
        logger.info(
            "Migrated legacy data from py/data to %s. Old directory preserved at %s (safe to delete once verified).",
            data_dir,
            backup_path,
        )


def _rename_with_pycache_fallback(src: str, dst: str) -> bool:
    """Attempt os.rename(src, dst); retry after clearing __pycache__ on OSError.

    On Windows, Python holds open handles to __pycache__/*.pyc files that
    were imported during ComfyUI startup, blocking os.rename.  Removing the
    pycache dirs (they are regenerable) and retrying resolves this.

    Returns True if the rename succeeded, False otherwise.
    """
    try:
        os.rename(src, dst)
        return True
    except OSError:
        pass

    for dirpath, dirnames, _ in os.walk(src, topdown=False):
        for d in list(dirnames):
            if d == "__pycache__":
                shutil.rmtree(os.path.join(dirpath, d), ignore_errors=True)
    try:
        os.rename(src, dst)
        return True
    except OSError:
        logger.warning(
            "Copied legacy data but failed to rename %s. Please rename or "
            "delete this directory manually to avoid shadowing the PyPI "
            "`py` package.",
            src,
        )
        return False


def _drop_backup_thumbnails(backup_path: str) -> None:
    """Delete thumbnails/ subdirs inside backup_path/data/runtime/<db>/.

    Thumbnails are fully regenerable and were already copied into meld/data,
    so keeping duplicates in the backup only wastes disk space.
    """
    runtime_backup = os.path.join(backup_path, "data", "runtime")
    if not os.path.isdir(runtime_backup):
        return
    for entry in os.scandir(runtime_backup):
        if entry.is_dir(follow_symlinks=False):
            thumbnails_dir = os.path.join(entry.path, "thumbnails")
            if os.path.isdir(thumbnails_dir):
                shutil.rmtree(thumbnails_dir, ignore_errors=True)
