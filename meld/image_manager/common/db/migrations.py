"""Database migration runner for Meld.

Design:
- schema_version table tracks applied migration versions.
- Legacy DB detection: images table exists but schema_version does not
  -> run _migrate_v1 (idempotent) then stamp v1, so any missing DDL/data
  changes from old init_db are applied before marking the DB as current.
- Version overflow: current DB version > LATEST_VERSION -> MigrationError
  (prevents old code from running against a newer schema).
- Each migration function receives a cursor and performs its changes.
  Stamping happens only after the function returns successfully.
"""

import os
import sqlite3
import time
from collections.abc import Callable
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    pass

from ..exceptions import MigrationError

# Bump this constant whenever a new migration entry is added.
LATEST_VERSION = 1

_CREATE_VERSION_TABLE = """
    CREATE TABLE IF NOT EXISTS schema_version (
        version INTEGER NOT NULL,
        applied_at REAL NOT NULL,
        description TEXT NOT NULL
    )
"""


def _get_current_version(cursor: sqlite3.Cursor) -> int:
    """Return the highest applied migration version, or 0 if none."""
    cursor.execute("SELECT MAX(version) FROM schema_version")
    row = cursor.fetchone()
    return row[0] if row[0] is not None else 0


def _stamp(cursor: sqlite3.Cursor, version: int, description: str) -> None:
    cursor.execute(
        "INSERT INTO schema_version (version, applied_at, description) VALUES (?, ?, ?)",
        (version, time.time(), description),
    )


def _is_legacy_db(cursor: sqlite3.Cursor) -> bool:
    """Return True if images table exists but schema_version does not.

    This indicates a database created before versioned migrations were
    introduced.  In this case we run _migrate_v1 (idempotent) then stamp v1.
    """
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='images'")
    has_images = cursor.fetchone() is not None
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='schema_version'")
    has_version = cursor.fetchone() is not None
    return has_images and not has_version


# ---------------------------------------------------------------------------
# Individual migration functions
# ---------------------------------------------------------------------------


def _migrate_v1(cursor: sqlite3.Cursor) -> None:
    """Create all tables/indexes and apply legacy column/data migrations.

    This combines the original create_schema() DDL with all the ALTER TABLE
    and data-migration logic that previously lived inline in init_db().

    Ordering requirement: ALTER TABLE statements on the images and relation
    tables must run before create_schema() so that the indexes create_schema
    creates on those columns (e.g. idx_images_parent_id) do not fail with
    "no such column" on a legacy database that is missing them.

    Lazy import of create_schema avoids a circular import between schema.py
    (which imports migrate from this module) and this module.
    """
    # --- Step 1: Legacy column additions (idempotent via try/except) ---
    # Must run before create_schema so that indexes on these columns succeed.

    for alter_sql in [
        "ALTER TABLE images ADD COLUMN phash TEXT",
        "ALTER TABLE images ADD COLUMN user_notes TEXT DEFAULT ''",
        "ALTER TABLE images ADD COLUMN width INTEGER",
        "ALTER TABLE images ADD COLUMN height INTEGER",
        "ALTER TABLE images ADD COLUMN sha256 TEXT",
        "ALTER TABLE images ADD COLUMN parent_id INTEGER",
        "ALTER TABLE images ADD COLUMN positive_prompt TEXT",
        "ALTER TABLE images ADD COLUMN negative_prompt TEXT",
        "ALTER TABLE images ADD COLUMN workflow TEXT",
        "ALTER TABLE images ADD COLUMN type TEXT DEFAULT 'output'",
        "ALTER TABLE images ADD COLUMN deleted_at REAL",
    ]:
        try:
            cursor.execute(alter_sql)
        except sqlite3.OperationalError:
            pass

    # Add strength column to prompt relation tables (also before create_schema)
    for alter_sql in [
        "ALTER TABLE positive_prompt_image_relations ADD COLUMN strength REAL DEFAULT 1.0",
        "ALTER TABLE negative_prompt_image_relations ADD COLUMN strength REAL DEFAULT 1.0",
    ]:
        try:
            cursor.execute(alter_sql)
        except sqlite3.OperationalError:
            pass

    # --- Step 2: Create any missing tables and all indexes ---
    # CREATE TABLE IF NOT EXISTS is a no-op for existing tables.
    # All indexes (including those on columns added in step 1) are now safe.

    # Lazy import to break the schema.py <-> migrations.py circular dependency.
    from .schema import create_schema  # noqa: PLC0415

    create_schema(cursor)

    # --- Step 3: Data migrations ---

    # Backfill NULL user_notes to empty string
    try:
        cursor.execute("UPDATE images SET user_notes = '' WHERE user_notes IS NULL")
    except sqlite3.OperationalError:
        pass

    # Migration: is_deleted -> deleted_at
    try:
        cursor.execute("SELECT id FROM images WHERE is_deleted = 1 AND deleted_at IS NULL")
        rows = cursor.fetchall()
        if rows:
            now = time.time()
            for (img_id,) in rows:
                cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (now, img_id))
    except sqlite3.OperationalError:
        # is_deleted column does not exist in new databases
        pass

    # Backfill width/height from image files on disk
    try:
        cursor.execute("SELECT id, filename, subfolder, type FROM images WHERE width IS NULL OR height IS NULL")
        rows = cursor.fetchall()
        if rows:
            import folder_paths
            from PIL import Image

            for img_id, filename, subfolder, img_type in rows:
                try:
                    if img_type == "output":
                        base_dir = folder_paths.get_output_directory()
                    elif img_type == "input":
                        base_dir = folder_paths.get_input_directory()
                    elif img_type == "temp":
                        base_dir = folder_paths.get_temp_directory()
                    elif img_type == "custom":
                        base_dir = ""  # subfolder is the absolute path
                    else:
                        continue
                    full_path = os.path.join(base_dir, subfolder, filename)
                    if os.path.exists(full_path):
                        with Image.open(full_path) as img:
                            w, h = img.size
                            cursor.execute(
                                "UPDATE images SET width = ?, height = ? WHERE id = ?",
                                (w, h, img_id),
                            )
                except Exception:
                    continue
    except Exception:
        pass

    # Remove duplicate relation rows then ensure unique indexes exist
    for delete_sql, index_sql in [
        (
            """DELETE FROM tag_image_relations
               WHERE id NOT IN (
                   SELECT MIN(id) FROM tag_image_relations GROUP BY tag_id, image_id
               )""",
            "CREATE UNIQUE INDEX IF NOT EXISTS idx_tag_rel_unique ON tag_image_relations(tag_id, image_id)",
        ),
        (
            """DELETE FROM model_image_relations
               WHERE id NOT IN (
                   SELECT MIN(id) FROM model_image_relations GROUP BY model_id, image_id
               )""",
            "CREATE UNIQUE INDEX IF NOT EXISTS idx_model_rel_unique ON model_image_relations(model_id, image_id)",
        ),
    ]:
        try:
            cursor.execute(delete_sql)
            cursor.execute(index_sql)
        except sqlite3.OperationalError:
            pass

    # Data migration: model_name column -> models normalisation table
    try:
        cursor.execute("SELECT id, model_name FROM images WHERE model_name IS NOT NULL AND model_name != ''")
        rows = cursor.fetchall()
        for img_id, model_name in rows:
            cursor.execute("INSERT OR IGNORE INTO models (name) VALUES (?)", (model_name,))
            cursor.execute("SELECT id FROM models WHERE name = ?", (model_name,))
            m_id = cursor.fetchone()[0]
            cursor.execute(
                "INSERT OR IGNORE INTO model_image_relations (image_id, model_id) VALUES (?, ?)",
                (img_id, m_id),
            )
    except sqlite3.OperationalError:
        # model_name column does not exist in new databases
        pass


# ---------------------------------------------------------------------------
# Migration registry
# ---------------------------------------------------------------------------

_MIGRATIONS: dict[int, tuple[str, Callable[[sqlite3.Cursor], None]]] = {
    1: ("Initial schema with all tables and legacy migrations", _migrate_v1),
}


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------


def migrate(cursor: sqlite3.Cursor) -> None:
    """Apply all pending migrations to the database.

    Handles three cases:
    1. Fresh database: runs every migration in order.
    2. Legacy database (images table present, schema_version absent):
       runs _migrate_v1 (all ALTERs are idempotent) then creates
       schema_version and stamps v1 so missing columns/data are applied.
    3. Already-versioned database: applies only migrations newer than
       the current version.

    Raises MigrationError if the stored version exceeds LATEST_VERSION
    (e.g. the database was created by a newer version of the software).
    """
    if _is_legacy_db(cursor):
        # Legacy DB: may be missing columns/data changes bundled into v1.
        # All ALTER TABLE statements inside _migrate_v1 are idempotent
        # (wrapped in try/except), so running it here is safe even when
        # some changes are already present.
        _migrate_v1(cursor)
        cursor.execute(_CREATE_VERSION_TABLE)
        description, _ = _MIGRATIONS[1]
        _stamp(cursor, 1, description)
        return

    cursor.execute(_CREATE_VERSION_TABLE)
    current = _get_current_version(cursor)

    if current > LATEST_VERSION:
        raise MigrationError(
            f"Database schema version {current} is newer than the supported "
            f"version {LATEST_VERSION}. Please upgrade ComfyUI-Meld."
        )

    for version in sorted(_MIGRATIONS):
        if version <= current:
            continue
        description, fn = _MIGRATIONS[version]
        fn(cursor)
        _stamp(cursor, version, description)
