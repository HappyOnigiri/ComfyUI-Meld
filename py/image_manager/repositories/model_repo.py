import sqlite3


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
