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
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            subfolder TEXT,
            created_at REAL,
            sha256 TEXT,
            parent_id INTEGER
        )
    ''')

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
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS positive_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS negative_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')

    # Relations
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS positive_prompt_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            positive_prompt_id INTEGER,
            strength REAL DEFAULT 1.0,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(positive_prompt_id) REFERENCES positive_prompts(id)
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS negative_prompt_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            negative_prompt_id INTEGER,
            strength REAL DEFAULT 1.0,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(negative_prompt_id) REFERENCES negative_prompts(id)
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tag_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            tag_id INTEGER,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(tag_id) REFERENCES tags(id)
        )
    ''')

    # Settings Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT
        )
    ''')

    # Indices
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_created_at ON images(created_at)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_parent_id ON images(parent_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_pp_name ON positive_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_np_name ON negative_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tag_name ON tags(name)")

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
            return bin(int(h1, 16) ^ int(h2, 16)).count('1')
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
                break # Latest exact match found

    return best_id
