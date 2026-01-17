import os
import sqlite3

from .client import TRASH_DIR, get_db_connection


def init_db() -> None:
    os.makedirs(TRASH_DIR, exist_ok=True)
    conn = get_db_connection()
    cursor = conn.cursor()
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
            deleted_at REAL
        )
    """)

    # Add phash column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN phash TEXT")
    except sqlite3.OperationalError:
        pass

    # Add width column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN width INTEGER")
    except sqlite3.OperationalError:
        pass

    # Add height column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN height INTEGER")
    except sqlite3.OperationalError:
        pass

    # Add sha256 column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN sha256 TEXT")
    except sqlite3.OperationalError:
        pass

    # Add parent_id column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN parent_id INTEGER")
    except sqlite3.OperationalError:
        pass

    # Add metadata columns if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN positive_prompt TEXT")
    except sqlite3.OperationalError:
        pass
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN negative_prompt TEXT")
    except sqlite3.OperationalError:
        pass
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN workflow TEXT")
    except sqlite3.OperationalError:
        pass

    # Add type column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN type TEXT DEFAULT 'output'")
    except sqlite3.OperationalError:
        pass

    # Add deleted_at column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN deleted_at REAL")
    except sqlite3.OperationalError:
        pass

    # Migration: is_deleted -> deleted_at
    try:
        cursor.execute("SELECT id FROM images WHERE is_deleted = 1 AND deleted_at IS NULL")
        rows = cursor.fetchall()
        if rows:
            import time

            now = time.time()
            for (img_id,) in rows:
                cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (now, img_id))
    except sqlite3.OperationalError:
        # is_deleted column might not exist
        pass

    # Migration: Update width/height for existing images if NULL
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
                        base_dir = ""  # subfolder is absolute
                    else:
                        continue

                    full_path = os.path.join(base_dir, subfolder, filename)
                    if os.path.exists(full_path):
                        with Image.open(full_path) as img:
                            w, h = img.size
                            cursor.execute("UPDATE images SET width = ?, height = ? WHERE id = ?", (w, h, img_id))
                except Exception:
                    continue
            conn.commit()
    except Exception:
        pass

    # Add strength column to relations if not exists
    try:
        cursor.execute("ALTER TABLE positive_prompt_image_relations ADD COLUMN strength REAL DEFAULT 1.0")
    except sqlite3.OperationalError:
        pass
    try:
        cursor.execute("ALTER TABLE negative_prompt_image_relations ADD COLUMN strength REAL DEFAULT 1.0")
    except sqlite3.OperationalError:
        pass

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

    # Indices
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_created_at ON images(created_at)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_parent_id ON images(parent_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_pp_name ON positive_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_np_name ON negative_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_model_name ON models(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tag_name ON tags(name)")

    # Unique indices for relations to prevent duplicates
    # Cleanup duplicates before creating unique index
    try:
        cursor.execute("""
            DELETE FROM tag_image_relations
            WHERE id NOT IN (
                SELECT MIN(id)
                FROM tag_image_relations
                GROUP BY tag_id, image_id
            )
        """)
        cursor.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_tag_rel_unique ON tag_image_relations(tag_id, image_id)")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("""
            DELETE FROM model_image_relations
            WHERE id NOT IN (
                SELECT MIN(id)
                FROM model_image_relations
                GROUP BY model_id, image_id
            )
        """)
        cursor.execute(
            "CREATE UNIQUE INDEX IF NOT EXISTS idx_model_rel_unique ON model_image_relations(model_id, image_id)"
        )
    except sqlite3.OperationalError:
        pass
    # Note: prompt relations include 'strength', so uniqueness might be (prompt_id, image_id, strength)
    # but usually we only want one entry per prompt per image regardless of strength, or we update the strength.
    # For now, let's focus on tags as requested.

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

    # Data Migration: model_name -> models table
    try:
        cursor.execute("SELECT id, model_name FROM images WHERE model_name IS NOT NULL AND model_name != ''")
        rows = cursor.fetchall()
        for img_id, model_name in rows:
            cursor.execute("INSERT OR IGNORE INTO models (name) VALUES (?)", (model_name,))
            cursor.execute("SELECT id FROM models WHERE name = ?", (model_name,))
            m_id = cursor.fetchone()[0]
            cursor.execute(
                "INSERT OR IGNORE INTO model_image_relations (image_id, model_id) VALUES (?, ?)", (img_id, m_id)
            )
        # Clear model_name column to avoid re-migration (optional, but safer to keep it for now)
        # cursor.execute("UPDATE images SET model_name = NULL")
    except sqlite3.OperationalError:
        # images table might not have model_name column in new installations
        pass

    conn.commit()
    conn.close()
