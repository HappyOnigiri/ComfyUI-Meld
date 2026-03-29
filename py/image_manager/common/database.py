from ..features.images.repository import calculate_sha256, find_closest_parent
from ..features.settings.repository import get_all_settings, upsert_setting
from ..features.tags.repository import delete_tag, get_all_tags, rename_tag
from .db.client import (
    ACTIVE_DATABASE_STATE_PATH,
    DATA_DIR,
    DATABASES_DIR,
    DB_PATH,
    RUNTIME_ROOT_DIR,
    TRASH_DIR,
    ActiveDatabaseState,
    create_database,
    delete_database,
    get_active_database_state,
    get_database_path,
    get_db_connection,
    get_thumbnail_cache_dir,
    get_trash_dir,
    list_database_names,
    refresh_active_database_state,
    switch_active_database,
)
from .db.schema import init_db
from .model_repo import add_model_relation, get_or_create_model
from .schemas import TagRecord

# --- DB Settings ---
# Constants and get_db_connection moved to .db.client
# CRUD functions moved to .features.*.repository

__all__ = [
    "DATA_DIR",
    "DATABASES_DIR",
    "RUNTIME_ROOT_DIR",
    "ACTIVE_DATABASE_STATE_PATH",
    "DB_PATH",
    "TRASH_DIR",
    "get_db_connection",
    "get_trash_dir",
    "get_thumbnail_cache_dir",
    "init_db",
    "ActiveDatabaseState",
    "get_active_database_state",
    "refresh_active_database_state",
    "list_database_names",
    "get_database_path",
    "create_database",
    "switch_active_database",
    "delete_database",
    "TagRecord",
    "get_all_settings",
    "upsert_setting",
    "get_all_tags",
    "delete_tag",
    "rename_tag",
    "get_or_create_model",
    "add_model_relation",
    "calculate_sha256",
    "find_closest_parent",
]
