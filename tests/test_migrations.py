import sqlite3
import sys
import unittest
from unittest.mock import MagicMock

# Mock ComfyUI dependencies before importing any meld module
sys.modules.setdefault("folder_paths", MagicMock())
sys.modules.setdefault("server", MagicMock())
sys.modules.setdefault("comfy", MagicMock())
sys.modules.setdefault("comfy.cli_args", MagicMock())
sys.modules.setdefault("nodes", MagicMock())

from meld.image_manager.common.db.migrations import LATEST_VERSION, migrate  # noqa: E402
from meld.image_manager.common.db.schema import create_schema  # noqa: E402
from meld.image_manager.common.exceptions import MigrationError  # noqa: E402


def _open_memory_db() -> tuple[sqlite3.Connection, sqlite3.Cursor]:
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    return conn, cursor


def _get_version(cursor: sqlite3.Cursor) -> int:
    cursor.execute("SELECT MAX(version) FROM schema_version")
    row = cursor.fetchone()
    return row[0] if row[0] is not None else 0


def _has_table(cursor: sqlite3.Cursor, name: str) -> bool:
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name=?", (name,))
    return cursor.fetchone() is not None


class TestMigrateNewDb(unittest.TestCase):
    """Fresh database: migrate() must create all tables and stamp v1."""

    def setUp(self) -> None:
        self.conn, self.cursor = _open_memory_db()

    def tearDown(self) -> None:
        self.conn.close()

    def test_creates_images_table(self) -> None:
        migrate(self.cursor)
        self.assertTrue(_has_table(self.cursor, "images"))

    def test_stamps_v1(self) -> None:
        migrate(self.cursor)
        self.assertEqual(_get_version(self.cursor), LATEST_VERSION)

    def test_schema_version_table_created(self) -> None:
        migrate(self.cursor)
        self.assertTrue(_has_table(self.cursor, "schema_version"))

    def test_version_row_has_description(self) -> None:
        migrate(self.cursor)
        self.cursor.execute("SELECT description FROM schema_version WHERE version = 1")
        row = self.cursor.fetchone()
        self.assertIsNotNone(row)
        self.assertIsInstance(row[0], str)
        self.assertGreater(len(row[0]), 0)

    def test_version_row_has_applied_at(self) -> None:
        migrate(self.cursor)
        self.cursor.execute("SELECT applied_at FROM schema_version WHERE version = 1")
        row = self.cursor.fetchone()
        self.assertIsNotNone(row)
        self.assertGreater(row[0], 0)


class TestMigrateLegacyDb(unittest.TestCase):
    """Legacy DB (images exists, schema_version absent): stamp only, no DDL re-run."""

    def setUp(self) -> None:
        self.conn, self.cursor = _open_memory_db()
        # Simulate a legacy database by creating the schema without a version table
        create_schema(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_no_schema_version_before_migrate(self) -> None:
        self.assertFalse(_has_table(self.cursor, "schema_version"))

    def test_stamps_v1_on_legacy_db(self) -> None:
        migrate(self.cursor)
        self.assertEqual(_get_version(self.cursor), LATEST_VERSION)

    def test_schema_version_table_created_on_legacy_db(self) -> None:
        migrate(self.cursor)
        self.assertTrue(_has_table(self.cursor, "schema_version"))

    def test_only_one_stamp_row_inserted(self) -> None:
        migrate(self.cursor)
        self.cursor.execute("SELECT COUNT(*) FROM schema_version")
        count = self.cursor.fetchone()[0]
        self.assertEqual(count, 1)


class TestMigrateIdempotent(unittest.TestCase):
    """Calling migrate() twice must be a no-op on the second call."""

    def setUp(self) -> None:
        self.conn, self.cursor = _open_memory_db()

    def tearDown(self) -> None:
        self.conn.close()

    def test_version_unchanged_on_second_call(self) -> None:
        migrate(self.cursor)
        migrate(self.cursor)
        self.assertEqual(_get_version(self.cursor), LATEST_VERSION)

    def test_only_one_stamp_row_after_two_calls(self) -> None:
        migrate(self.cursor)
        migrate(self.cursor)
        self.cursor.execute("SELECT COUNT(*) FROM schema_version")
        count = self.cursor.fetchone()[0]
        self.assertEqual(count, 1)


class TestMigrateVersionOverflow(unittest.TestCase):
    """Stored version > LATEST_VERSION must raise MigrationError."""

    def setUp(self) -> None:
        self.conn, self.cursor = _open_memory_db()

    def tearDown(self) -> None:
        self.conn.close()

    def test_raises_migration_error_on_newer_version(self) -> None:
        future_version = LATEST_VERSION + 1
        self.cursor.execute("CREATE TABLE schema_version (version INTEGER, applied_at REAL, description TEXT)")
        self.cursor.execute(
            "INSERT INTO schema_version VALUES (?, 1.0, 'future')",
            (future_version,),
        )
        with self.assertRaises(MigrationError):
            migrate(self.cursor)

    def test_migration_error_is_database_error_subclass(self) -> None:
        from meld.image_manager.common.exceptions import DatabaseError

        self.assertTrue(issubclass(MigrationError, DatabaseError))


class TestMigrateFailureDoesNotStamp(unittest.TestCase):
    """If a migration function raises, no version stamp must be written."""

    def setUp(self) -> None:
        self.conn, self.cursor = _open_memory_db()

    def tearDown(self) -> None:
        self.conn.close()

    def test_no_stamp_on_migration_failure(self) -> None:
        import meld.image_manager.common.db.migrations as migrations_module

        original_migrations = migrations_module._MIGRATIONS.copy()
        try:
            # Replace v1 with a function that always raises
            def _bad_migration(cursor: sqlite3.Cursor) -> None:
                raise RuntimeError("deliberate failure")

            migrations_module._MIGRATIONS = {1: ("Bad migration", _bad_migration)}
            with self.assertRaises(RuntimeError):
                migrate(self.cursor)
            # schema_version table was created but no row should have been inserted
            if _has_table(self.cursor, "schema_version"):
                self.cursor.execute("SELECT COUNT(*) FROM schema_version")
                count = self.cursor.fetchone()[0]
                self.assertEqual(count, 0)
        finally:
            migrations_module._MIGRATIONS = original_migrations


if __name__ == "__main__":
    unittest.main()
