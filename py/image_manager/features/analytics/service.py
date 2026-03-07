"""
Analytics aggregation service.

Aggregates image statistics from source tables and stores results in analytics_* cache tables.
Runs in background on startup; API reads from cache for instant response.
"""

import logging
import sqlite3
import time
from typing import Any

from ...common.db.client import get_db_connection

CATEGORIES = (
    "positive_prompts",
    "negative_prompts",
    "tags",
    "models",
    "by_date",
    "by_resolution",
)

# Map category to (table_name, name_column) for name-based categories
CATEGORY_TABLE_MAP = {
    "positive_prompts": "analytics_positive_prompts",
    "negative_prompts": "analytics_negative_prompts",
    "tags": "analytics_tags",
    "models": "analytics_models",
    "by_date": "analytics_by_date",
    "by_resolution": "analytics_by_resolution",
}

# Name column: name, date, or resolution
CATEGORY_NAME_COL = {
    "positive_prompts": "name",
    "negative_prompts": "name",
    "tags": "name",
    "models": "name",
    "by_date": "date",
    "by_resolution": "resolution",
}


def run_aggregation() -> None:
    """
    Run full analytics aggregation and write results to analytics_* tables.
    Called from background thread on startup.
    """
    start_ms = time.perf_counter() * 1000
    conn = get_db_connection()
    cursor = conn.cursor()
    updated_at = time.time()
    try:
        # Total images
        cursor.execute("SELECT COUNT(*) FROM images WHERE deleted_at IS NULL")
        total = cursor.fetchone()[0]
        cursor.execute(
            "INSERT OR REPLACE INTO analytics_meta (key, value) VALUES (?, ?)",
            ("total_images", str(total)),
        )
        cursor.execute(
            "INSERT OR REPLACE INTO analytics_meta (key, value) VALUES (?, ?)",
            ("updated_at", str(updated_at)),
        )

        # Positive prompts
        cursor.execute("DELETE FROM analytics_positive_prompts")
        cursor.execute("""
            SELECT pp.name, COUNT(DISTINCT r.image_id) as cnt
            FROM positive_prompts pp
            JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id
            JOIN images i ON r.image_id = i.id AND i.deleted_at IS NULL
            GROUP BY pp.id ORDER BY cnt DESC
        """)
        cursor.executemany(
            "INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES (?, ?, ?)",
            [(row[0], row[1], updated_at) for row in cursor.fetchall()],
        )

        # Negative prompts
        cursor.execute("DELETE FROM analytics_negative_prompts")
        cursor.execute("""
            SELECT np.name, COUNT(DISTINCT r.image_id) as cnt
            FROM negative_prompts np
            JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id
            JOIN images i ON r.image_id = i.id AND i.deleted_at IS NULL
            GROUP BY np.id ORDER BY cnt DESC
        """)
        cursor.executemany(
            "INSERT INTO analytics_negative_prompts (name, count, updated_at) VALUES (?, ?, ?)",
            [(row[0], row[1], updated_at) for row in cursor.fetchall()],
        )

        # Tags
        cursor.execute("DELETE FROM analytics_tags")
        cursor.execute("""
            SELECT t.name, COUNT(DISTINCT r.image_id) as cnt
            FROM tags t
            JOIN tag_image_relations r ON t.id = r.tag_id
            JOIN images i ON r.image_id = i.id AND i.deleted_at IS NULL
            GROUP BY t.id ORDER BY cnt DESC
        """)
        cursor.executemany(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            [(row[0], row[1], updated_at) for row in cursor.fetchall()],
        )

        # Models
        cursor.execute("DELETE FROM analytics_models")
        cursor.execute("""
            SELECT m.name, COUNT(DISTINCT r.image_id) as cnt
            FROM models m
            JOIN model_image_relations r ON m.id = r.model_id
            JOIN images i ON r.image_id = i.id AND i.deleted_at IS NULL
            GROUP BY m.id ORDER BY cnt DESC
        """)
        cursor.executemany(
            "INSERT INTO analytics_models (name, count, updated_at) VALUES (?, ?, ?)",
            [(row[0], row[1], updated_at) for row in cursor.fetchall()],
        )

        # By date (LocalTime)
        cursor.execute("DELETE FROM analytics_by_date")
        cursor.execute("""
            SELECT strftime('%Y-%m-%d', created_at, 'unixepoch', 'localtime') as d, COUNT(*) as cnt
            FROM images
            WHERE deleted_at IS NULL AND created_at IS NOT NULL
            GROUP BY d ORDER BY d DESC
        """)
        cursor.executemany(
            "INSERT INTO analytics_by_date (date, count, updated_at) VALUES (?, ?, ?)",
            [(row[0], row[1], updated_at) for row in cursor.fetchall()],
        )

        # By resolution
        cursor.execute("DELETE FROM analytics_by_resolution")
        cursor.execute("""
            SELECT CAST(width AS TEXT) || 'x' || CAST(height AS TEXT) as res, COUNT(*) as cnt
            FROM images
            WHERE deleted_at IS NULL AND width IS NOT NULL AND height IS NOT NULL
            GROUP BY width, height ORDER BY cnt DESC
        """)
        cursor.executemany(
            "INSERT INTO analytics_by_resolution (resolution, count, updated_at) VALUES (?, ?, ?)",
            [(row[0], row[1], updated_at) for row in cursor.fetchall()],
        )

        conn.commit()
        elapsed_ms = (time.perf_counter() * 1000) - start_ms
        logging.info("[Meld] Analytics aggregation completed in %.0f ms", elapsed_ms)
    except Exception as e:
        conn.rollback()
        logging.exception(f"[Meld] Analytics aggregation failed: {e}")
        raise
    finally:
        conn.close()


def get_summary(cursor: sqlite3.Cursor) -> dict[str, Any]:
    """Read summary (top 5 per category) from cache tables."""
    result: dict[str, Any] = {"total_images": 0}

    cursor.execute("SELECT value FROM analytics_meta WHERE key = 'total_images'")
    row = cursor.fetchone()
    if row:
        try:
            result["total_images"] = int(row[0])
        except (ValueError, TypeError):
            pass

    for cat, table in CATEGORY_TABLE_MAP.items():
        name_col = CATEGORY_NAME_COL[cat]
        cursor.execute(f"SELECT {name_col}, count FROM {table} ORDER BY count DESC, {name_col} ASC LIMIT 5")
        rows = cursor.fetchall()
        if cat == "by_date":
            result[cat] = [{"date": r[0], "count": r[1]} for r in rows]
        elif cat == "by_resolution":
            result[cat] = [{"resolution": r[0], "count": r[1]} for r in rows]
        else:
            result[cat] = [{"name": r[0], "count": r[1]} for r in rows]

    return result


def get_category_list(
    cursor: sqlite3.Cursor,
    category: str,
    limit: int = 100,
    offset: int = 0,
    sort: str = "count_desc",
    q: str | None = None,
) -> tuple[list[dict[str, Any]], int]:
    """
    Read full list for a category with optional filter and sort.
    Returns (items, total_count).
    """
    if category not in CATEGORY_TABLE_MAP:
        return [], 0

    table = CATEGORY_TABLE_MAP[category]
    name_col = CATEGORY_NAME_COL[category]

    order = "count ASC, {name_col} ASC" if sort == "count_asc" else "count DESC, {name_col} ASC"
    if sort not in ("count_desc", "count_asc"):
        order = "count DESC, {name_col} ASC"
    order_clause_raw = f"ORDER BY {order.format(name_col=name_col)}"

    where = ""
    params: list[Any] = []
    if q and q.strip():
        where = f" WHERE {name_col} LIKE ? COLLATE NOCASE"
        params.append(f"%{q.strip()}%")

    count_sql = f"SELECT COUNT(*) FROM {table}{where}"
    cursor.execute(count_sql, params)
    total = cursor.fetchone()[0]

    order_clause = order_clause_raw
    fetch_sql = f"SELECT {name_col}, count FROM {table}{where} {order_clause} LIMIT ? OFFSET ?"
    cursor.execute(fetch_sql, params + [limit, offset])
    rows = cursor.fetchall()

    if category == "by_date":
        items = [{"date": r[0], "count": r[1]} for r in rows]
    elif category == "by_resolution":
        items = [{"resolution": r[0], "count": r[1]} for r in rows]
    else:
        items = [{"name": r[0], "count": r[1]} for r in rows]

    return items, total


def get_counts(
    cursor: sqlite3.Cursor,
    category: str,
    names: list[str],
) -> dict[str, int]:
    """
    Read counts for specific names in a category.
    Returns {name: count}.
    """
    if category not in CATEGORY_TABLE_MAP or not names:
        return {}

    table = CATEGORY_TABLE_MAP[category]
    name_col = CATEGORY_NAME_COL[category]

    placeholders = ",".join(["?"] * len(names))
    sql = f"SELECT {name_col}, count FROM {table} WHERE {name_col} IN ({placeholders})"

    cursor.execute(sql, names)
    rows = cursor.fetchall()

    return {r[0]: r[1] for r in rows}
