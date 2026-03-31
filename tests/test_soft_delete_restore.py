"""
Integration tests for soft-delete, permanent-delete, restore, and cleanup logic.

The SQL for delete/restore is extracted from router.py and tested directly
against an in-memory SQLite database.  perform_cleanup() from importer/service.py
is tested by patching db_connection and folder_paths.
"""

# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false

import sqlite3
import sys
import time
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, TestDataFactory, create_test_db, make_db_ctx

perform_cleanup = None
_IMPORTER_SVC = "meld.image_manager.features.importer.service"

# Populated in setUpModule; imported here after mocks are installed.
bulk_permanent_delete = None
bulk_soft_delete = None
collect_deleted_ancestors = None
permanent_delete = None
restore_image = None
soft_delete = None


def setUpModule() -> None:
    """Import importer service and repository functions with ComfyUI dependencies mocked."""
    global perform_cleanup, bulk_permanent_delete, bulk_soft_delete
    global collect_deleted_ancestors, permanent_delete, restore_image, soft_delete
    mock_dict: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        from meld.image_manager.features.images import repository as _repo
        from meld.image_manager.features.importer import service as _svc

        perform_cleanup = _svc.perform_cleanup
        bulk_permanent_delete = _repo.bulk_permanent_delete
        bulk_soft_delete = _repo.bulk_soft_delete
        collect_deleted_ancestors = _repo.collect_deleted_ancestors
        permanent_delete = _repo.permanent_delete
        restore_image = _repo.restore_image
        soft_delete = _repo.soft_delete


class TestSoftDelete(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_soft_delete_sets_deleted_at(self) -> None:
        """Soft-deleting an image sets deleted_at to a non-NULL timestamp."""
        img = self.factory.create_image(filename="img.png")
        self.conn.commit()

        now = time.time()
        soft_delete(self.cursor, img, now)
        self.conn.commit()

        self.cursor.execute("SELECT deleted_at FROM images WHERE id = ?", (img,))
        deleted_at = self.cursor.fetchone()[0]
        self.assertIsNotNone(deleted_at)
        self.assertAlmostEqual(deleted_at, now, places=0)

    def test_permanent_delete_cascades(self) -> None:
        """Permanent delete removes the image row, clears parent_id on children, and purges all relation rows."""
        parent = self.factory.create_image(filename="p.png")
        child = self.factory.create_image(filename="c.png", parent_id=parent)
        tag = self.factory.create_tag("t1")
        self.factory.tag_image(parent, tag)
        model = self.factory.create_model("sdxl")
        self.factory.link_model(parent, model)
        pp = self.factory.create_positive_prompt("1girl")
        self.factory.link_positive_prompt(parent, pp)
        self.conn.commit()

        permanent_delete(self.cursor, parent)
        self.conn.commit()

        # image row is gone
        self.cursor.execute("SELECT id FROM images WHERE id = ?", (parent,))
        self.assertIsNone(self.cursor.fetchone())

        # child's parent_id is cleared
        self.cursor.execute("SELECT parent_id FROM images WHERE id = ?", (child,))
        self.assertIsNone(self.cursor.fetchone()[0])

        # relation rows are purged
        for table in ("tag_image_relations", "model_image_relations", "positive_prompt_image_relations"):
            self.cursor.execute(f"SELECT COUNT(*) FROM {table} WHERE image_id = ?", (parent,))
            self.assertEqual(self.cursor.fetchone()[0], 0, f"{table} should have no rows for deleted image")


class TestRestore(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_restore_clears_deleted_at(self) -> None:
        """Restoring an image sets its deleted_at back to NULL."""
        img = self.factory.create_image(filename="img.png", deleted_at=9000.0)
        self.conn.commit()

        restore_image(self.cursor, img)
        self.conn.commit()

        self.cursor.execute("SELECT deleted_at FROM images WHERE id = ?", (img,))
        self.assertIsNone(self.cursor.fetchone()[0])

    def test_restore_includes_deleted_ancestors(self) -> None:
        """The ancestor CTE walks up the chain and collects all deleted ancestors."""
        grandparent = self.factory.create_image(filename="gp.png", deleted_at=8000.0)
        parent = self.factory.create_image(filename="p.png", parent_id=grandparent, deleted_at=8001.0)
        child = self.factory.create_image(filename="c.png", parent_id=parent, deleted_at=8002.0)
        self.conn.commit()

        ids_to_restore = collect_deleted_ancestors(self.cursor, [child])
        # All three are deleted and must be collected for restoration
        self.assertIn(child, ids_to_restore)
        self.assertIn(parent, ids_to_restore)
        self.assertIn(grandparent, ids_to_restore)

    def test_restore_skips_non_deleted_ancestors(self) -> None:
        """Ancestors that are NOT deleted are not included in the restore set.

        The CTE continues walking up only while the current node is deleted
        (WHERE l.deleted_at IS NOT NULL in the recursive step).
        """
        grandparent = self.factory.create_image(filename="gp.png")  # live
        parent = self.factory.create_image(filename="p.png", parent_id=grandparent, deleted_at=8001.0)
        child = self.factory.create_image(filename="c.png", parent_id=parent, deleted_at=8002.0)
        self.conn.commit()

        ids_to_restore = collect_deleted_ancestors(self.cursor, [child])
        self.assertIn(child, ids_to_restore)
        self.assertIn(parent, ids_to_restore)
        # grandparent is live — the CTE must stop at parent
        self.assertNotIn(grandparent, ids_to_restore)


class TestBulkSoftDelete(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_bulk_soft_delete_marks_multiple(self) -> None:
        """bulk_soft_delete sets deleted_at on targeted images and leaves others untouched."""
        ids = [self.factory.create_image(filename=f"img{i}.png") for i in range(5)]
        self.conn.commit()

        now = time.time()
        target_ids = ids[:3]
        bulk_soft_delete(self.cursor, target_ids, now)
        self.conn.commit()

        # Targeted images must have deleted_at set
        for img_id in target_ids:
            self.cursor.execute("SELECT deleted_at FROM images WHERE id = ?", (img_id,))
            deleted_at = self.cursor.fetchone()[0]
            self.assertIsNotNone(deleted_at, f"Image {img_id} must be soft-deleted")
            self.assertAlmostEqual(deleted_at, now, places=0)

        # Remaining images must be untouched
        for img_id in ids[3:]:
            self.cursor.execute("SELECT deleted_at FROM images WHERE id = ?", (img_id,))
            self.assertIsNone(self.cursor.fetchone()[0], f"Image {img_id} must not be soft-deleted")

    def test_bulk_soft_delete_empty_list(self) -> None:
        """bulk_soft_delete with an empty list raises no error."""
        bulk_soft_delete(self.cursor, [], time.time())


class TestBulkPermanentDelete(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_bulk_permanent_delete_cascades(self) -> None:
        """bulk_permanent_delete removes image rows, clears child parent_id, and purges relations."""
        ids = []
        for i in range(3):
            img_id = self.factory.create_image(filename=f"img{i}.png")
            ids.append(img_id)
            tag = self.factory.create_tag(f"tag{i}")
            self.factory.tag_image(img_id, tag)

        # Create a child whose parent is one of the images being deleted
        child = self.factory.create_image(filename="child.png", parent_id=ids[0])
        self.conn.commit()

        bulk_permanent_delete(self.cursor, ids)
        self.conn.commit()

        # All target image rows must be gone
        for img_id in ids:
            self.cursor.execute("SELECT id FROM images WHERE id = ?", (img_id,))
            self.assertIsNone(self.cursor.fetchone(), f"Image {img_id} must be permanently deleted")

        # Child's parent_id must be cleared
        self.cursor.execute("SELECT parent_id FROM images WHERE id = ?", (child,))
        self.assertIsNone(self.cursor.fetchone()[0], "Child parent_id must be set to NULL")

        # Relation rows for deleted images must be purged
        for img_id in ids:
            self.cursor.execute("SELECT COUNT(*) FROM tag_image_relations WHERE image_id = ?", (img_id,))
            self.assertEqual(self.cursor.fetchone()[0], 0, f"Relations for image {img_id} must be removed")

    def test_bulk_permanent_delete_empty_list(self) -> None:
        """bulk_permanent_delete with an empty list raises no error."""
        bulk_permanent_delete(self.cursor, [])


class TestPerformCleanup(unittest.TestCase):
    """Tests for perform_cleanup() — patches db_connection and folder_paths."""

    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def _run_cleanup(self, mock_folder_paths: MagicMock, mock_get_trash_dir: MagicMock) -> int:
        """Invoke perform_cleanup() with the in-memory DB and supplied mocks."""
        with (
            patch(f"{_IMPORTER_SVC}.db_connection", return_value=make_db_ctx(self.conn)),
            patch(f"{_IMPORTER_SVC}.folder_paths", mock_folder_paths),
            patch(f"{_IMPORTER_SVC}.get_trash_dir", mock_get_trash_dir),
            patch("os.path.exists", return_value=False),
        ):
            return perform_cleanup()

    def test_cleanup_marks_missing_files(self) -> None:
        """Images whose files are missing on disk get a deleted_at timestamp."""
        img = self.factory.create_image(filename="missing.png", img_type="output")
        # Insert a setting for retention days so perform_cleanup does not crash
        self.factory.create_setting("gallery.trash_retention_days", 30)
        self.conn.commit()

        mock_fp = MagicMock()
        mock_fp.get_output_directory.return_value = "/nonexistent"
        mock_trash = MagicMock(return_value="/tmp/trash")

        self._run_cleanup(mock_fp, mock_trash)

        self.cursor.execute("SELECT deleted_at FROM images WHERE id = ?", (img,))
        deleted_at = self.cursor.fetchone()[0]
        self.assertIsNotNone(deleted_at, "Missing file must be marked as deleted")

    def test_cleanup_purges_expired_trash(self) -> None:
        """Images with deleted_at older than the retention period are permanently deleted."""
        old_ts = time.time() - 10.0  # 10 seconds in the past
        img = self.factory.create_image(filename="old.png", deleted_at=old_ts, img_type="output")
        # retention_days=0 → threshold=now → any deleted_at < now is expired
        self.factory.create_setting("gallery.trash_retention_days", 0)
        self.conn.commit()

        mock_fp = MagicMock()
        mock_fp.get_output_directory.return_value = "/nonexistent"
        mock_trash = MagicMock(return_value="/tmp/trash")

        self._run_cleanup(mock_fp, mock_trash)

        self.cursor.execute("SELECT id FROM images WHERE id = ?", (img,))
        self.assertIsNone(self.cursor.fetchone(), "Expired trash image must be permanently deleted")


if __name__ == "__main__":
    unittest.main()
