import sqlite3

from ..schemas import TagRecord


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
