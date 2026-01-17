import hashlib
import json
import os
import sqlite3

from .schemas import TagRecord

# --- DB Settings ---
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "default.db")
TRASH_DIR = os.path.join(DATA_DIR, "trash")


def init_db() -> None:
    os.makedirs(TRASH_DIR, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
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


def get_db_connection() -> sqlite3.Connection:
    return sqlite3.connect(DB_PATH)


def get_all_settings(cursor: sqlite3.Cursor) -> dict:
    cursor.execute("SELECT key, value FROM settings")
    rows = cursor.fetchall()
    settings = {}
    for key, value in rows:
        try:
            settings[key] = json.loads(value)
        except Exception:
            settings[key] = value
    return settings


def upsert_setting(cursor: sqlite3.Cursor, key: str, value: object) -> None:
    json_value = json.dumps(value)
    cursor.execute(
        "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
        (key, json_value),
    )


def get_or_create_model(cursor: sqlite3.Cursor, name: str) -> int | None:
    if not name:
        return None
    cursor.execute("INSERT OR IGNORE INTO models (name) VALUES (?)", (name,))
    cursor.execute("SELECT id FROM models WHERE name = ?", (name,))
    row = cursor.fetchone()
    return row[0] if row else None


def add_model_relation(cursor: sqlite3.Cursor, image_id: int | None, model_id: int | None) -> None:
    if image_id and model_id:
        cursor.execute(
            "INSERT OR IGNORE INTO model_image_relations (image_id, model_id) VALUES (?, ?)", (image_id, model_id)
        )


def get_all_tags(cursor: sqlite3.Cursor) -> list[TagRecord]:
    cursor.execute("SELECT id, name FROM tags ORDER BY name ASC")
    rows = cursor.fetchall()
    return [TagRecord(id=row[0], name=row[1]) for row in rows]


def delete_tag(conn: sqlite3.Connection, tag_id: int) -> bool:
    cursor = conn.cursor()
    try:
        # Delete relations first
        cursor.execute("DELETE FROM tag_image_relations WHERE tag_id = ?", (tag_id,))
        # Delete the tag itself
        cursor.execute("DELETE FROM tags WHERE id = ?", (tag_id,))
        conn.commit()
        return cursor.rowcount > 0
    except Exception:
        conn.rollback()
        raise


def rename_tag(conn: sqlite3.Connection, tag_id: int, new_name: str) -> bool:
    cursor = conn.cursor()
    try:
        # Check if the new name already exists
        cursor.execute("SELECT id FROM tags WHERE name = ?", (new_name,))
        if cursor.fetchone():
            return False

        cursor.execute("UPDATE tags SET name = ? WHERE id = ?", (new_name, tag_id))
        conn.commit()
        return cursor.rowcount > 0
    except Exception:
        conn.rollback()
        raise


def calculate_sha256(file_path: str) -> str | None:
    if not os.path.exists(file_path):
        return None
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()


def find_closest_parent(
    phash: str | None,
    cursor: sqlite3.Cursor,
    threshold: int | None = None,
    exclude_id: int | None = None,
    before_timestamp: float | None = None,
    sort_strategy: str = "phash_only",
) -> int | None:
    if not phash:
        return None

    if threshold is None:
        # Fetch from settings if not provided
        cursor.execute("SELECT value FROM settings WHERE key = ?", ("gallery.suggest_phash_threshold",))
        row = cursor.fetchone()
        if row:
            try:
                val = json.loads(row[0])
                threshold = val if isinstance(val, int) else 8
            except Exception:
                threshold = 8
        else:
            threshold = 8

    # Final fallback to ensure threshold is not None for type checkers
    if threshold is None:
        threshold = 8

    query = "SELECT id, phash, created_at FROM images WHERE phash IS NOT NULL AND deleted_at IS NULL"
    params: list[int | float] = []

    if exclude_id:
        query += " AND id != ?"
        params.append(exclude_id)

    if before_timestamp:
        query += " AND created_at < ?"
        params.append(before_timestamp)

    # For performance, we still want some order, but we'll do the final selection in Python
    query += " ORDER BY created_at DESC"

    cursor.execute(query, params)
    rows = cursor.fetchall()

    def hamming_distance(h1: str, h2: str) -> int:
        try:
            return bin(int(h1, 16) ^ int(h2, 16)).count("1")
        except Exception:
            return 999

    candidates = []
    for img_id, other_phash, other_created_at in rows:
        dist = hamming_distance(phash, other_phash)
        if dist <= threshold:
            candidates.append({"id": img_id, "dist": dist, "created_at": other_created_at})
            if dist == 0 and sort_strategy != "phash_created":
                return img_id  # Optimization: Exact match found and we don't need further sorting

    if not candidates:
        return None

    if sort_strategy == "phash_created" and before_timestamp:
        # Sort by "similarity bucket" first, then by recency.
        # This ensures that if multiple images are "similar enough" (e.g., distance <= 4),
        # the most recent one (immediate ancestor) is chosen as the parent.
        candidates.sort(key=lambda x: (x["dist"] // 5, -x["created_at"]))
    else:
        # Default: Sort by distance (ASC), then by created_at (DESC - most recent first)
        candidates.sort(key=lambda x: (x["dist"], -x["created_at"]))

    return candidates[0]["id"]
