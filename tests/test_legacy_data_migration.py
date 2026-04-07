"""Tests for the one-time py/data -> meld/data migration in client.py."""

import glob
import os
from pathlib import Path

import pytest

from meld.image_manager.common.db import client


def test_no_leftover_py_dir_in_repo() -> None:
    """Guard: the real repo should not have a py/ dir that would trigger migration."""
    assert not os.path.isdir(os.path.join(client._REPO_ROOT, "py")), (
        "Unexpected py/ directory found in repo root. This could cause tests to interact with the real migration logic."
    )


def _patch_client_paths(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> dict[str, str]:
    """Redirect all migration-related constants in client to tmp_path."""
    repo_root = str(tmp_path)
    legacy_py_dir = os.path.join(repo_root, "py")
    legacy_data_dir = os.path.join(legacy_py_dir, "data")
    data_dir = os.path.join(repo_root, "meld", "data")
    migration_marker = os.path.join(data_dir, ".migrated_from_py")

    monkeypatch.setattr(client, "_REPO_ROOT", repo_root)
    monkeypatch.setattr(client, "_LEGACY_PY_DIR", legacy_py_dir)
    monkeypatch.setattr(client, "_LEGACY_DATA_DIR", legacy_data_dir)
    monkeypatch.setattr(client, "DATA_DIR", data_dir)
    monkeypatch.setattr(client, "_MIGRATION_MARKER", migration_marker)

    return {
        "repo_root": repo_root,
        "legacy_py_dir": legacy_py_dir,
        "legacy_data_dir": legacy_data_dir,
        "data_dir": data_dir,
        "migration_marker": migration_marker,
    }


def test_migrates_when_legacy_present_and_new_empty(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    """Full happy-path: legacy data is copied and py/ is renamed to backup."""
    paths = _patch_client_paths(monkeypatch, tmp_path)

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
    assert os.path.exists(os.path.join(paths["data_dir"], "default.db"))
    assert os.path.exists(os.path.join(paths["data_dir"], "active_database.json"))

    # Migration marker written.
    assert os.path.exists(paths["migration_marker"])

    # py/ directory no longer exists.
    assert not os.path.isdir(paths["legacy_py_dir"])

    # Backup directory contains the original data.
    backups = glob.glob(os.path.join(paths["repo_root"], "py_legacy_backup_*"))
    assert len(backups) == 1
    assert os.path.exists(os.path.join(backups[0], "data", "default.db"))


def test_no_op_when_marker_exists(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    """If the marker file exists, migration is skipped entirely."""
    paths = _patch_client_paths(monkeypatch, tmp_path)

    os.makedirs(paths["data_dir"], exist_ok=True)
    open(paths["migration_marker"], "w").close()

    # Create legacy data as a temptation.
    os.makedirs(paths["legacy_data_dir"], exist_ok=True)
    open(os.path.join(paths["legacy_data_dir"], "default.db"), "w").close()

    client._migrate_legacy_py_data()

    # py/ still present (no rename happened).
    assert os.path.isdir(paths["legacy_py_dir"])
    # New side does NOT have default.db from the copy.
    assert not os.path.exists(os.path.join(paths["data_dir"], "default.db"))


def test_no_op_when_legacy_missing(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    """If py/data doesn't exist, migration is a no-op."""
    paths = _patch_client_paths(monkeypatch, tmp_path)
    os.makedirs(paths["data_dir"], exist_ok=True)

    # Should not raise.
    client._migrate_legacy_py_data()

    assert not os.path.exists(paths["migration_marker"])


def test_no_op_when_legacy_empty(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    """If py/data exists but has no meaningful content, migration is skipped."""
    paths = _patch_client_paths(monkeypatch, tmp_path)
    os.makedirs(paths["legacy_data_dir"], exist_ok=True)  # empty dir
    os.makedirs(paths["data_dir"], exist_ok=True)

    client._migrate_legacy_py_data()

    assert not os.path.exists(paths["migration_marker"])
    # py/ still present.
    assert os.path.isdir(paths["legacy_py_dir"])


def test_no_op_when_new_dir_has_data(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    """If meld/data already has work in it, migration must not overwrite it."""
    paths = _patch_client_paths(monkeypatch, tmp_path)

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
        assert f.read() == new_db_content

    # py/ still present (no rename).
    assert os.path.isdir(paths["legacy_py_dir"])


def test_backup_name_collision_falls_back_to_hhmmss(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    """When the YYYYMMDD backup name already exists, HHMMSS suffix is used."""
    from datetime import datetime

    paths = _patch_client_paths(monkeypatch, tmp_path)

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
    assert len(backups) == 1, f"Expected 1 timestamped backup, found: {backups}"
    assert os.path.exists(os.path.join(backups[0], "data", "default.db"))
