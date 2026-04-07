"""Tests for the one-time py/data -> meld/data migration."""

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
from meld.image_manager.common.db import legacy_py_data_migration as migration  # noqa: E402


class TestNoLeftoverPyDir(unittest.TestCase):
    def test_no_leftover_py_dir_in_repo(self) -> None:
        """Guard: the real repo should not have a py/ dir that would trigger migration."""
        repo_root = os.path.dirname(os.path.dirname(client.DATA_DIR))
        self.assertFalse(
            os.path.isdir(os.path.join(repo_root, "py")),
            "Unexpected py/ directory found in repo root. "
            "This could cause tests to interact with the real migration logic.",
        )


class TestLegacyDataMigration(unittest.TestCase):
    """Tests for migrate_legacy_py_data(), passing data_dir as an argument."""

    def setUp(self) -> None:
        self._tmp_dir = tempfile.mkdtemp()

        repo_root = self._tmp_dir
        legacy_py_dir = os.path.join(repo_root, "py")
        legacy_data_dir = os.path.join(legacy_py_dir, "data")
        # data_dir = <repo>/meld/data so that dirname(dirname(data_dir)) == repo_root
        data_dir = os.path.join(repo_root, "meld", "data")
        migration_marker = os.path.join(data_dir, ".migrated_from_py")

        self.paths: dict[str, str] = {
            "repo_root": repo_root,
            "legacy_py_dir": legacy_py_dir,
            "legacy_data_dir": legacy_data_dir,
            "data_dir": data_dir,
            "migration_marker": migration_marker,
        }

    def tearDown(self) -> None:
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

        migration.migrate_legacy_py_data(paths["data_dir"])

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

        migration.migrate_legacy_py_data(paths["data_dir"])

        # py/ still present (no rename happened).
        self.assertTrue(os.path.isdir(paths["legacy_py_dir"]))
        # New side does NOT have default.db from the copy.
        self.assertFalse(os.path.exists(os.path.join(paths["data_dir"], "default.db")))

    def test_no_op_when_legacy_missing(self) -> None:
        """If py/data doesn't exist, migration is a no-op."""
        paths = self.paths
        os.makedirs(paths["data_dir"], exist_ok=True)

        # Should not raise.
        migration.migrate_legacy_py_data(paths["data_dir"])

        self.assertFalse(os.path.exists(paths["migration_marker"]))

    def test_no_op_when_legacy_empty(self) -> None:
        """If py/data exists but has no meaningful content, migration is skipped."""
        paths = self.paths
        os.makedirs(paths["legacy_data_dir"], exist_ok=True)  # empty dir
        os.makedirs(paths["data_dir"], exist_ok=True)

        migration.migrate_legacy_py_data(paths["data_dir"])

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

        migration.migrate_legacy_py_data(paths["data_dir"])

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

        migration.migrate_legacy_py_data(paths["data_dir"])

        # A HHMMSS-suffixed backup should have been created.
        backups = glob.glob(os.path.join(paths["repo_root"], f"py_legacy_backup_{today}_??????"))
        self.assertEqual(len(backups), 1, f"Expected 1 timestamped backup, found: {backups}")
        self.assertTrue(os.path.exists(os.path.join(backups[0], "data", "default.db")))
