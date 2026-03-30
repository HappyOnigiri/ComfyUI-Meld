"""
Integration tests for meld/image_manager/features/settings/repository.py

Tests cover upsert_setting and get_all_settings using an in-memory SQLite
database. No ComfyUI runtime is required because settings/repository.py
only depends on json and sqlite3.
"""

# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false

import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, create_test_db

# Module-level references populated in setUpModule to avoid importing
# meld.image_manager before ComfyUI mocks are in place.
get_all_settings = None
upsert_setting = None


def setUpModule() -> None:
    """Import settings repository with ComfyUI dependencies mocked."""
    global get_all_settings, upsert_setting
    mock_dict: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        from meld.image_manager.features.settings import repository as _repo

        get_all_settings = _repo.get_all_settings
        upsert_setting = _repo.upsert_setting


class TestSettingsRepository(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()

    def tearDown(self) -> None:
        self.conn.close()

    def test_upsert_inserts_new_key(self) -> None:
        """upsert_setting inserts a new key that did not exist."""
        upsert_setting(self.cursor, "my.key", "hello")
        self.conn.commit()
        result = get_all_settings(self.cursor)
        self.assertEqual(result["my.key"], "hello")

    def test_upsert_updates_existing_key(self) -> None:
        """upsert_setting overwrites the value for an already-existing key."""
        upsert_setting(self.cursor, "my.key", "first")
        self.conn.commit()
        upsert_setting(self.cursor, "my.key", "second")
        self.conn.commit()
        result = get_all_settings(self.cursor)
        self.assertEqual(result["my.key"], "second")

    def test_get_all_empty(self) -> None:
        """get_all_settings returns an empty dict when the table has no rows."""
        result = get_all_settings(self.cursor)
        self.assertEqual(result, {})

    def test_json_roundtrip_types(self) -> None:
        """upsert_setting preserves bool, int, float, string, list, and dict."""
        cases: list[tuple[str, object]] = [
            ("t.bool_true", True),
            ("t.bool_false", False),
            ("t.int", 42),
            ("t.float", 3.14),
            ("t.str", "hello world"),
            ("t.list", [1, "a", True]),
            ("t.dict", {"x": 1, "y": "z"}),
        ]
        for key, val in cases:
            upsert_setting(self.cursor, key, val)
        self.conn.commit()
        result = get_all_settings(self.cursor)
        for key, val in cases:
            self.assertEqual(result[key], val, msg=f"roundtrip failed for {key!r}")

    def test_invalid_json_fallback(self) -> None:
        """get_all_settings falls back to the raw string for malformed JSON values."""
        # Bypass upsert to insert malformed JSON directly
        self.cursor.execute("INSERT INTO settings (key, value) VALUES (?, ?)", ("bad.key", "not-valid-json{{"))
        self.conn.commit()
        result = get_all_settings(self.cursor)
        self.assertEqual(result["bad.key"], "not-valid-json{{")

    def test_defaults_overlay(self) -> None:
        """DB values overlay the hardcoded defaults dict exactly as done in the router."""
        # Simulate the overlay pattern from settings/router.py:get_settings()
        defaults: dict[str, object] = {
            "gallery.trash_retention_days": 30,
            "gallery.lineage_max_depth": 5,
            "gallery.inherit_tags": True,
        }
        # Store an override for one key
        upsert_setting(self.cursor, "gallery.trash_retention_days", 7)
        self.conn.commit()

        db_values = get_all_settings(self.cursor)
        merged = dict(defaults)
        merged.update(db_values)

        self.assertEqual(merged["gallery.trash_retention_days"], 7, "DB value should override default")
        self.assertEqual(merged["gallery.lineage_max_depth"], 5, "Untouched default should remain")
        self.assertEqual(merged["gallery.inherit_tags"], True, "Untouched default should remain")


if __name__ == "__main__":
    unittest.main()
