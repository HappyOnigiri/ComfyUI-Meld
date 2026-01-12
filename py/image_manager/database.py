import hashlib
import json
import os
import sqlite3

# --- DB Settings ---
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "default.db")


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            subfolder TEXT,
            created_at REAL,
            sha256 TEXT,
            parent_id INTEGER,
            positive_prompt TEXT,
            negative_prompt TEXT,
            workflow TEXT
        )
    """)

    # Add phash column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN phash TEXT")
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

    # Add is_deleted column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN is_deleted INTEGER DEFAULT 0")
    except sqlite3.OperationalError:
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

    # Optimize list query (is_deleted filter + sort)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_is_deleted_created_at ON images(is_deleted, created_at)")

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


def get_db_connection():
    return sqlite3.connect(DB_PATH)


def get_all_settings(cursor):
    cursor.execute("SELECT key, value FROM settings")
    rows = cursor.fetchall()
    settings = {}
    for key, value in rows:
        try:
            settings[key] = json.loads(value)
        except Exception:
            settings[key] = value
    return settings


def upsert_setting(cursor, key, value):
    json_value = json.dumps(value)
    cursor.execute(
        "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
        (key, json_value),
    )


def get_or_create_model(cursor, name):
    if not name:
        return None
    cursor.execute("INSERT OR IGNORE INTO models (name) VALUES (?)", (name,))
    cursor.execute("SELECT id FROM models WHERE name = ?", (name,))
    row = cursor.fetchone()
    return row[0] if row else None


def add_model_relation(cursor, image_id, model_id):
    if image_id and model_id:
        cursor.execute(
            "INSERT OR IGNORE INTO model_image_relations (image_id, model_id) VALUES (?, ?)", (image_id, model_id)
        )


def calculate_sha256(file_path):
    if not os.path.exists(file_path):
        return None
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()


def find_closest_parent(phash, cursor, threshold=8, exclude_id=None, before_timestamp=None):
    if not phash:
        return None

    query = "SELECT id, phash FROM images WHERE phash IS NOT NULL AND is_deleted = 0"
    params = []

    if exclude_id:
        query += " AND id != ?"
        params.append(exclude_id)

    if before_timestamp:
        query += " AND created_at < ?"
        params.append(before_timestamp)

    query += " ORDER BY id DESC"

    cursor.execute(query, params)
    rows = cursor.fetchall()

    def hamming_distance(h1, h2):
        try:
            return bin(int(h1, 16) ^ int(h2, 16)).count("1")
        except Exception:
            return 999

    best_id = None
    min_dist = threshold + 1

    for img_id, other_phash in rows:
        dist = hamming_distance(phash, other_phash)
        if dist < min_dist:
            min_dist = dist
            best_id = img_id
            if min_dist == 0:
                break  # Latest exact match found

    return best_id
