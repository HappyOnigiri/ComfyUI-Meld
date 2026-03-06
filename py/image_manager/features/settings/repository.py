import json
import sqlite3
from typing import Any


def get_all_settings(cursor: sqlite3.Cursor) -> dict[str, Any]:
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
