from .db.client import DATA_DIR, DB_PATH, TRASH_DIR, get_db_connection
from .db.schema import init_db
from .repositories.image_repo import calculate_sha256, find_closest_parent
from .repositories.model_repo import add_model_relation, get_or_create_model
from .repositories.settings_repo import get_all_settings, upsert_setting
from .repositories.tag_repo import delete_tag, get_all_tags, rename_tag
from .schemas import TagRecord

# --- DB Settings ---
# Constants and get_db_connection moved to .db.client
# CRUD functions moved to .repositories.*

__all__ = [
    "DATA_DIR",
    "DB_PATH",
    "TRASH_DIR",
    "get_db_connection",
    "init_db",
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
