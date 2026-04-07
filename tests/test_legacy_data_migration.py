"""Tests for the one-time py/data -> meld/data migration in client.py."""

import glob
import os
import shutil
import tempfile
import unittest
from datetime import datetime

from tests.helpers import install_comfyui_mocks

# Must be called before any meld.image_manager import to satisfy ComfyUI stubs.
install_comfyui_mocks()

from meld.image_manager.common.db import client  # noqa: E402


class TestNoLeftoverPyDir(unittest.TestCase):
    def test_no_leftover_py_dir_in_repo(self) -> None:
        """Guard: the real repo should not have a py/ dir that would trigger migration."""
        self.assertFalse(
            os.path.isdir(os.path.join(client._REPO_ROOT, "py")),
            "Unexpected py/ directory found in repo root. "
            "This could cause tests to interact with the real migration logic.",
        )


class TestLegacyDataMigration(unittest.TestCase):
    """Tests that patch client module globals to redirect migration paths to a tmp dir."""

    def setUp(self) -> None:
        self._tmp_dir = tempfile.mkdtemp()

        repo_root = self._tmp_dir
        legacy_py_dir = os.path.join(repo_root, "py")
        legacy_data_dir = os.path.join(legacy_py_dir, "data")
        data_dir = os.path.join(repo_root, "meld", "data")
        migration_marker = os.path.join(data_dir, ".migrated_from_py")

        self.paths: dict[str, str] = {
            "repo_root": repo_root,
            "legacy_py_dir": legacy_py_dir,
            "legacy_data_dir": legacy_data_dir,
            "data_dir": data_dir,
            "migration_marker": migration_marker,
        }

        # Save original module-level constants so tearDown can restore them.
        self._orig: dict[str, str] = {
            "_REPO_ROOT": client._REPO_ROOT,
            "_LEGACY_PY_DIR": client._LEGACY_PY_DIR,
            "_LEGACY_DATA_DIR": client._LEGACY_DATA_DIR,
            "DATA_DIR": client.DATA_DIR,
            "_MIGRATION_MARKER": client._MIGRATION_MARKER,
        }

        # Redirect all migration-related constants to the tmp directory.
        client._REPO_ROOT = repo_root
        client._LEGACY_PY_DIR = legacy_py_dir
        client._LEGACY_DATA_DIR = legacy_data_dir
        client.DATA_DIR = data_dir
        client._MIGRATION_MARKER = migration_marker

    def tearDown(self) -> None:
        # Restore original client module attributes.
        client._REPO_ROOT = self._orig["_REPO_ROOT"]
        client._LEGACY_PY_DIR = self._orig["_LEGACY_PY_DIR"]
        client._LEGACY_DATA_DIR = self._orig["_LEGACY_DATA_DIR"]
        client.DATA_DIR = self._orig["DATA_DIR"]
        client._MIGRATION_MARKER = self._orig["_MIGRATION_MARKER"]

        shutil.rmtree(self._tmp_dir, ignore_errors=True)

    def test_migrates_when_legacy_present_and_new_empty(self) -> None:
        """Full happy-path: legacy data is copied and py/ is renamed to backup."""
        paths = self.paths

        # Set up legacy py/data with meaningful content.
        os.makedirs(paths["legacy_data_dir"], exist_ok=True)
        legacy_db = os.path.join(paths["legacy_data_dir"], "default.db")
        legacy_json = os.path.join(paths["legacy_data_dir"], "active_database.json")
        open(legacy_db, "w").close()
        open(legacy_json, "w").close()

        # New meld/data is empty.
        os.makedirs(paths["data_dir"], exist_ok=True)

        client._migrate_legacy_py_data()

        # Copied files exist in new location.
        self.assertTrue(os.path.exists(os.path.join(paths["data_dir"], "default.db")))
        self.assertTrue(os.path.exists(os.path.join(paths["data_dir"], "active_database.json")))

        # Migration marker written.
        self.assertTrue(os.path.exists(paths["migration_marker"]))

        # py/ directory no longer exists.
        self.assertFalse(os.path.isdir(paths["legacy_py_dir"]))

        # Backup directory contains the original data.
        backups = glob.glob(os.path.join(paths["repo_root"], "py_legacy_backup_*"))
        self.assertEqual(len(backups), 1)
        self.assertTrue(os.path.exists(os.path.join(backups[0], "data", "default.db")))

    def test_no_op_when_marker_exists(self) -> None:
        """If the marker file exists, migration is skipped entirely."""
        paths = self.paths

        os.makedirs(paths["data_dir"], exist_ok=True)
        open(paths["migration_marker"], "w").close()

        # Create legacy data as a temptation.
        os.makedirs(paths["legacy_data_dir"], exist_ok=True)
        open(os.path.join(paths["legacy_data_dir"], "default.db"), "w").close()

        client._migrate_legacy_py_data()

        # py/ still present (no rename happened).
        self.assertTrue(os.path.isdir(paths["legacy_py_dir"]))
        # New side does NOT have default.db from the copy.
        self.assertFalse(os.path.exists(os.path.join(paths["data_dir"], "default.db")))

    def test_no_op_when_legacy_missing(self) -> None:
        """If py/data doesn't exist, migration is a no-op."""
        paths = self.paths
        os.makedirs(paths["data_dir"], exist_ok=True)

        # Should not raise.
        client._migrate_legacy_py_data()

        self.assertFalse(os.path.exists(paths["migration_marker"]))

    def test_no_op_when_legacy_empty(self) -> None:
        """If py/data exists but has no meaningful content, migration is skipped."""
        paths = self.paths
        os.makedirs(paths["legacy_data_dir"], exist_ok=True)  # empty dir
        os.makedirs(paths["data_dir"], exist_ok=True)

        client._migrate_legacy_py_data()

        self.assertFalse(os.path.exists(paths["migration_marker"]))
        # py/ still present.
        self.assertTrue(os.path.isdir(paths["legacy_py_dir"]))

    def test_no_op_when_new_dir_has_data(self) -> None:
        """If meld/data already has work in it, migration must not overwrite it."""
        paths = self.paths

        # Legacy has data.
        os.makedirs(paths["legacy_data_dir"], exist_ok=True)
        open(os.path.join(paths["legacy_data_dir"], "default.db"), "w").close()

        # New side also has a default.db with specific contents.
        os.makedirs(paths["data_dir"], exist_ok=True)
        new_db_path = os.path.join(paths["data_dir"], "default.db")
        new_db_content = b"new-side-content"
        with open(new_db_path, "wb") as f:
            f.write(new_db_content)

        client._migrate_legacy_py_data()

        # New side content is unchanged.
        with open(new_db_path, "rb") as f:
            self.assertEqual(f.read(), new_db_content)

        # py/ still present (no rename).
        self.assertTrue(os.path.isdir(paths["legacy_py_dir"]))

    def test_backup_name_collision_falls_back_to_hhmmss(self) -> None:
        """When the YYYYMMDD backup name already exists, HHMMSS suffix is used."""
        paths = self.paths

        # Create legacy data.
        os.makedirs(paths["legacy_data_dir"], exist_ok=True)
        open(os.path.join(paths["legacy_data_dir"], "default.db"), "w").close()
        os.makedirs(paths["data_dir"], exist_ok=True)

        # Pre-create the YYYYMMDD backup to force collision.
        today = datetime.now().strftime("%Y%m%d")
        collision_path = os.path.join(paths["repo_root"], f"py_legacy_backup_{today}")
        os.makedirs(collision_path)

        client._migrate_legacy_py_data()

        # A HHMMSS-suffixed backup should have been created.
        backups = glob.glob(os.path.join(paths["repo_root"], f"py_legacy_backup_{today}_??????"))
        self.assertEqual(len(backups), 1, f"Expected 1 timestamped backup, found: {backups}")
        self.assertTrue(os.path.exists(os.path.join(backups[0], "data", "default.db")))
