import os
import sqlite3
from typing import Any

from ...common.db.client import (
    create_database,
    delete_database,
    get_active_database_state,
    get_database_path,
    list_database_names,
    rename_database,
    switch_active_database,
)
from ...common.db.runtime_state import (
    database_change_guard,
    is_analytics_refresh_running,
    is_startup_cleanup_running,
)
from ..importer.service import get_scan_state


def _count_images(db_path: str) -> int:
    if not os.path.exists(db_path):
        return 0
    conn = sqlite3.connect(db_path)
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM images WHERE deleted_at IS NULL")
        row = cursor.fetchone()
        return int(row[0]) if row else 0
    except sqlite3.Error:
        return 0
    finally:
        conn.close()


def get_database_payload() -> dict[str, Any]:
    active_state = get_active_database_state()
    databases = []
    for name in list_database_names():
        db_path = get_database_path(name)
        databases.append(
            {
                "name": name,
                "filename": os.path.basename(db_path),
                "is_active": name == active_state.name,
                "image_count": _count_images(db_path),
                "can_delete": True,
            }
        )

    return {
        "databases": databases,
        "active_database": active_state.name,
        "database_generation": active_state.generation,
    }


def ensure_database_change_allowed() -> None:
    scan_state = get_scan_state()
    if scan_state.is_running:
        raise RuntimeError("Cannot change database while scan is running")
    if is_analytics_refresh_running():
        raise RuntimeError("Cannot change database while analytics refresh is running")
    if is_startup_cleanup_running():
        raise RuntimeError("Cannot change database while startup cleanup is running")


def create_database_and_get_payload(name: str, switch_to_new: bool) -> dict[str, Any]:
    ensure_database_change_allowed()
    with database_change_guard():
        create_database(name, switch_to_new=switch_to_new)
        return get_database_payload()


def switch_database_and_get_payload(name: str) -> dict[str, Any]:
    ensure_database_change_allowed()
    with database_change_guard():
        switch_active_database(name)
        return get_database_payload()


def delete_database_and_get_payload(name: str) -> dict[str, Any]:
    ensure_database_change_allowed()
    with database_change_guard():
        delete_database(name)
        return get_database_payload()


def rename_database_and_get_payload(name: str, new_name: str) -> dict[str, Any]:
    ensure_database_change_allowed()
    with database_change_guard():
        rename_database(name, new_name)
        return get_database_payload()
