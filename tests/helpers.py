"""
Shared test helpers: in-memory SQLite setup and ComfyUI dependency mocking.

All helpers are intentionally dependency-free from ComfyUI or image_manager
so they can be imported before any sys.modules patching.
"""

import sqlite3
import sys
from unittest.mock import MagicMock

# Modules that must be mocked before any meld.image_manager import,
# because meld/image_manager/__init__.py imports api.py which transitively
# imports folder_paths, server, and comfy.* from the ComfyUI runtime.
COMFYUI_MOCK_KEYS = (
    "folder_paths",
    "server",
    "comfy",
    "comfy.cli_args",
    "comfy.sd",
    "comfy.utils",
    "comfy.samplers",
    "nodes",
)


def install_comfyui_mocks() -> dict[str, MagicMock]:
    """Inject MagicMock stubs for ComfyUI runtime dependencies into sys.modules.

    Call this before importing any meld.image_manager module to prevent
    ImportError on machines without a ComfyUI installation.
    """
    mocks: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    sys.modules.update(mocks)
    return mocks


def make_db_ctx(conn: sqlite3.Connection) -> MagicMock:
    """Return a mock context manager that yields the given connection.

    Use this to patch db_connection() in tests so the function under test
    operates against an in-memory SQLite database rather than the real one.

    Example::

        with patch("module.db_connection", return_value=make_db_ctx(self.conn)):
            result = function_under_test()
    """
    ctx = MagicMock()
    ctx.__enter__ = MagicMock(return_value=conn)
    ctx.__exit__ = MagicMock(return_value=False)
    return ctx


def create_test_db() -> sqlite3.Connection:
    """Return an in-memory SQLite connection with the full Meld schema applied.

    Uses the production DDL from schema.py so tests always reflect the
    current table structure and index set without any migration logic that
    depends on ComfyUI runtime directories (folder_paths, PIL file I/O, etc.).

    Implementation note: importing meld.image_manager.common.db.schema
    triggers meld/image_manager/__init__.py which eagerly imports api.py (it
    requires ComfyUI runtime modules).  Tests that use patch.dict() for
    temporary mocking remove those entries from sys.modules when the with-block
    exits, so by the time setUp() calls this function the mocks are gone.
    We reinstall them permanently here if absent; the stubs are harmless for
    the purposes of schema-only test fixtures.
    """
    if "server" not in sys.modules:
        install_comfyui_mocks()

    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    from meld.image_manager.common.db.schema import create_schema

    create_schema(cursor)
    conn.commit()
    return conn


class TestDataFactory:
    """Convenience factory for inserting test rows into the Meld schema."""

    def __init__(self, cursor: sqlite3.Cursor) -> None:
        self.cursor = cursor

    def create_image(
        self,
        filename: str = "test.png",
        subfolder: str = "",
        created_at: float = 1000.0,
        sha256: str | None = None,
        phash: str | None = None,
        width: int = 512,
        height: int = 512,
        parent_id: int | None = None,
        img_type: str = "output",
        deleted_at: float | None = None,
    ) -> int:
        """Insert a row into images and return its id."""
        self.cursor.execute(
            """
            INSERT INTO images
            (filename, subfolder, created_at, sha256, phash, width, height, parent_id, type, deleted_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (filename, subfolder, created_at, sha256, phash, width, height, parent_id, img_type, deleted_at),
        )
        row_id: int = self.cursor.lastrowid  # type: ignore[assignment]
        return row_id

    def create_tag(self, name: str) -> int:
        """Insert or ignore a tag row and return its id."""
        self.cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (name,))
        self.cursor.execute("SELECT id FROM tags WHERE name = ?", (name,))
        tag_id: int = self.cursor.fetchone()[0]
        return tag_id

    def tag_image(self, image_id: int, tag_id: int) -> None:
        """Link a tag to an image (INSERT OR IGNORE handles duplicates)."""
        self.cursor.execute(
            "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)",
            (image_id, tag_id),
        )

    def create_positive_prompt(self, name: str) -> int:
        """Insert or ignore a positive_prompt row and return its id."""
        self.cursor.execute("INSERT OR IGNORE INTO positive_prompts (name) VALUES (?)", (name,))
        self.cursor.execute("SELECT id FROM positive_prompts WHERE name = ?", (name,))
        prompt_id: int = self.cursor.fetchone()[0]
        return prompt_id

    def link_positive_prompt(self, image_id: int, prompt_id: int, strength: float = 1.0) -> None:
        """Link a positive prompt to an image."""
        self.cursor.execute(
            "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id, strength) VALUES (?, ?, ?)",
            (image_id, prompt_id, strength),
        )

    def create_model(self, name: str) -> int:
        """Insert or ignore a model row and return its id."""
        self.cursor.execute("INSERT OR IGNORE INTO models (name) VALUES (?)", (name,))
        self.cursor.execute("SELECT id FROM models WHERE name = ?", (name,))
        model_id: int = self.cursor.fetchone()[0]
        return model_id

    def link_model(self, image_id: int, model_id: int) -> None:
        """Link a model to an image (INSERT OR IGNORE handles duplicates)."""
        self.cursor.execute(
            "INSERT OR IGNORE INTO model_image_relations (image_id, model_id) VALUES (?, ?)",
            (image_id, model_id),
        )

    def create_setting(self, key: str, value: object) -> None:
        """Upsert a settings row (JSON-encoded value)."""
        import json

        self.cursor.execute(
            "INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)",
            (key, json.dumps(value)),
        )
