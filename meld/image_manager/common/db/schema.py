import os
import sqlite3

from .client import db_connection, get_trash_dir
from .migrations import migrate


def create_schema(cursor: sqlite3.Cursor) -> None:
    """Create all tables and indexes for a fresh Meld database.

    This function is idempotent (uses IF NOT EXISTS) and contains no
    migration logic.  It is the single source of truth for the DDL and
    is called by both init_db() and the test helpers.

    Note: UNIQUE index creation is wrapped in try/except so this function
    is safe to call on existing databases that may still have duplicate rows
    (migration cleanup in init_db() will handle them before retrying).
    """
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            subfolder TEXT,
            created_at REAL,
            sha256 TEXT,
            phash TEXT,
            width INTEGER,
            height INTEGER,
            parent_id INTEGER,
            positive_prompt TEXT,
            negative_prompt TEXT,
            workflow TEXT,
            type TEXT DEFAULT 'output',
            deleted_at REAL,
            user_notes TEXT DEFAULT ''
        )
    """)

    # Normalized Tables
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS positive_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS negative_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS models (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    """)

    # Relations
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS positive_prompt_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            positive_prompt_id INTEGER,
            strength REAL DEFAULT 1.0,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(positive_prompt_id) REFERENCES positive_prompts(id)
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS negative_prompt_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            negative_prompt_id INTEGER,
            strength REAL DEFAULT 1.0,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(negative_prompt_id) REFERENCES negative_prompts(id)
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS model_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            model_id INTEGER,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(model_id) REFERENCES models(id)
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tag_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            tag_id INTEGER,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(tag_id) REFERENCES tags(id)
        )
    """)

    # Settings Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT
        )
    """)

    # Favorites Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            query TEXT,
            created_at REAL
        )
    """)

    # Analytics cache tables (for image analytics feature)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_meta (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_positive_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            count INTEGER NOT NULL,
            updated_at REAL NOT NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_analytics_pp_count ON analytics_positive_prompts(count DESC)")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_negative_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            count INTEGER NOT NULL,
            updated_at REAL NOT NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_analytics_np_count ON analytics_negative_prompts(count DESC)")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            count INTEGER NOT NULL,
            updated_at REAL NOT NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_analytics_tags_count ON analytics_tags(count DESC)")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_models (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            count INTEGER NOT NULL,
            updated_at REAL NOT NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_analytics_models_count ON analytics_models(count DESC)")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_by_date (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            count INTEGER NOT NULL,
            updated_at REAL NOT NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_analytics_by_date_date ON analytics_by_date(date DESC)")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analytics_by_resolution (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            resolution TEXT NOT NULL,
            count INTEGER NOT NULL,
            updated_at REAL NOT NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_analytics_resolution_count ON analytics_by_resolution(count DESC)")

    # Indices
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_created_at ON images(created_at)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_parent_id ON images(parent_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_pp_name ON positive_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_np_name ON negative_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_model_name ON models(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tag_name ON tags(name)")

    # Unique indices for relations to prevent duplicates.
    # Wrapped in try/except because on databases that still have duplicate rows
    # (before the cleanup migration in init_db() runs) this would fail.
    # init_db() removes duplicates then issues the same CREATE UNIQUE INDEX so
    # it is always applied by the end of initialisation.
    try:
        cursor.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_tag_rel_unique ON tag_image_relations(tag_id, image_id)")
    except (sqlite3.OperationalError, sqlite3.IntegrityError):
        pass

    try:
        cursor.execute(
            "CREATE UNIQUE INDEX IF NOT EXISTS idx_model_rel_unique ON model_image_relations(model_id, image_id)"
        )
    except (sqlite3.OperationalError, sqlite3.IntegrityError):
        pass

    # Added indices for frequency analysis
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_pp_rel_ppid ON positive_prompt_image_relations(positive_prompt_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_np_rel_npid ON negative_prompt_image_relations(negative_prompt_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tag_rel_tagid ON tag_image_relations(tag_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_model_rel_mid ON model_image_relations(model_id)")

    # New indices for performance improvement (2026-01-12)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_sha256 ON images(sha256)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_phash ON images(phash)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_filename_subfolder ON images(filename, subfolder)")

    # Optimize list query (deleted_at filter + sort)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_deleted_at_created_at ON images(deleted_at, created_at)")


def init_db(db_path: str | None = None, trash_dir: str | None = None) -> None:
    os.makedirs(trash_dir or get_trash_dir(), exist_ok=True)
    with db_connection(db_path) as conn:
        cursor = conn.cursor()
        migrate(cursor)
        conn.commit()
