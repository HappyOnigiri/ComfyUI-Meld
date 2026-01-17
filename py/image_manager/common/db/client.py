import os
import sqlite3

# --- DB Settings ---
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "default.db")
TRASH_DIR = os.path.join(DATA_DIR, "trash")


def get_db_connection() -> sqlite3.Connection:
    return sqlite3.connect(DB_PATH)
