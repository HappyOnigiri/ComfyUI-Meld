import os
import shutil
import sys
import tempfile
import unittest
from typing import Any
from unittest.mock import MagicMock, patch

_MOCK_KEYS = (
    "folder_paths",
    "server",
    "comfy.cli_args",
    "nodes",
    "comfy",
    "comfy.sd",
    "comfy.utils",
    "comfy.samplers",
)
for k in _MOCK_KEYS:
    if k not in sys.modules:
        sys.modules[k] = MagicMock()

import py.image_manager.common.db.client as client  # noqa: E402
import py.image_manager.common.db.runtime_state as runtime_state  # noqa: E402
import py.image_manager.common.db.schema as schema  # noqa: E402
import py.image_manager.features.databases.service as database_service  # noqa: E402
import py.image_manager.features.importer.service as importer_service  # noqa: E402


class TestDatabaseManager(unittest.TestCase):
    def setUp(self) -> None:
        self.test_dir = tempfile.mkdtemp()
        self.databases_dir = os.path.join(self.test_dir, "databases")
        self.runtime_root_dir = os.path.join(self.test_dir, "runtime")
        self.active_state_path = os.path.join(self.test_dir, "active_database.json")
        self.legacy_default_db_path = os.path.join(self.test_dir, "default.db")

        os.makedirs(self.databases_dir, exist_ok=True)
        os.makedirs(self.runtime_root_dir, exist_ok=True)

        self.patchers: list[Any] = [
            patch.object(client, "DATA_DIR", self.test_dir),
            patch.object(client, "DATABASES_DIR", self.databases_dir),
            patch.object(client, "RUNTIME_ROOT_DIR", self.runtime_root_dir),
            patch.object(client, "ACTIVE_DATABASE_STATE_PATH", self.active_state_path),
            patch.object(client, "LEGACY_DEFAULT_DB_PATH", self.legacy_default_db_path),
            patch.object(client, "DB_PATH", self.legacy_default_db_path),
            patch.object(client, "TRASH_DIR", os.path.join(self.runtime_root_dir, "default", "trash")),
            patch.object(
                client,
                "THUMBNAIL_CACHE_DIR",
                os.path.join(self.runtime_root_dir, "default", "thumbnails"),
            ),
            patch.object(client, "ACTIVE_DATABASE_NAME", client.DEFAULT_DATABASE_NAME),
            patch.object(client, "ACTIVE_DATABASE_GENERATION", 0),
        ]
        for patcher in self.patchers:
            patcher.start()

        runtime_state.set_startup_cleanup_running(False)
        runtime_state.set_analytics_refresh_running(False)
        importer_service.set_scan_running(False)

        client.refresh_active_database_state()
        schema.init_db()

    def tearDown(self) -> None:
        importer_service.set_scan_running(False)
        runtime_state.set_startup_cleanup_running(False)
        runtime_state.set_analytics_refresh_running(False)
        for patcher in reversed(self.patchers):
            patcher.stop()
        shutil.rmtree(self.test_dir)

    def test_create_database_without_switch_keeps_active_database(self) -> None:
        payload = database_service.create_database_and_get_payload("project_a", False)
        self.assertEqual(payload["active_database"], "default")
        self.assertEqual(payload["database_generation"], 0)
        self.assertTrue(os.path.exists(os.path.join(self.databases_dir, "project_a.db")))
        self.assertEqual(sorted(db["name"] for db in payload["databases"]), ["default", "project_a"])

    def test_switch_database_updates_active_state_and_generation(self) -> None:
        database_service.create_database_and_get_payload("project_a", False)

        payload = database_service.switch_database_and_get_payload("project_a")

        self.assertEqual(payload["active_database"], "project_a")
        self.assertEqual(payload["database_generation"], 1)
        self.assertEqual(client.get_active_database_state().name, "project_a")
        self.assertTrue(client.DB_PATH.endswith("project_a.db"))

    def test_delete_active_database_switches_to_fallback(self) -> None:
        database_service.create_database_and_get_payload("project_a", False)
        database_service.switch_database_and_get_payload("project_a")

        payload = database_service.delete_database_and_get_payload("project_a")

        self.assertEqual(payload["active_database"], "default")
        self.assertFalse(os.path.exists(os.path.join(self.databases_dir, "project_a.db")))

    def test_rename_inactive_database_moves_db_and_runtime(self) -> None:
        database_service.create_database_and_get_payload("project_a", False)
        os.makedirs(client.get_database_runtime_dir("project_a"), exist_ok=True)

        payload = database_service.rename_database_and_get_payload("project_a", "project_b")

        self.assertTrue(os.path.exists(os.path.join(self.databases_dir, "project_b.db")))
        self.assertFalse(os.path.exists(os.path.join(self.databases_dir, "project_a.db")))
        self.assertTrue(os.path.isdir(client.get_database_runtime_dir("project_b")))
        self.assertIn("project_b", [db["name"] for db in payload["databases"]])

    def test_rename_active_database_updates_active_state(self) -> None:
        payload = database_service.rename_database_and_get_payload("default", "renamed_default")

        self.assertEqual(payload["active_database"], "renamed_default")
        self.assertEqual(client.get_active_database_state().name, "renamed_default")
        self.assertTrue(os.path.exists(client.get_database_path("renamed_default")))

    def test_delete_last_default_recreates_empty_default_database(self) -> None:
        payload = database_service.delete_database_and_get_payload("default")

        self.assertEqual(payload["active_database"], "default")
        self.assertTrue(os.path.exists(client.get_database_path("default")))
        self.assertGreaterEqual(payload["database_generation"], 1)

    def test_switch_is_blocked_while_scan_is_running(self) -> None:
        database_service.create_database_and_get_payload("project_a", False)
        importer_service.set_scan_running(True)
        try:
            with self.assertRaises(RuntimeError):
                database_service.switch_database_and_get_payload("project_a")
        finally:
            importer_service.set_scan_running(False)

    def test_switch_is_blocked_while_analytics_refresh_is_running(self) -> None:
        database_service.create_database_and_get_payload("project_a", False)
        runtime_state.set_analytics_refresh_running(True)
        try:
            with self.assertRaises(RuntimeError):
                database_service.switch_database_and_get_payload("project_a")
        finally:
            runtime_state.set_analytics_refresh_running(False)


if __name__ == "__main__":
    unittest.main()
