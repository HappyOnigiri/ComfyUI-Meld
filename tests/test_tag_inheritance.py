"""
Integration tests for inherit_tags() in meld/image_manager/features/images/repository.py

Tests verify that tag copying from parent to child works correctly using an
in-memory SQLite database. No ComfyUI runtime dependencies are required.
"""

# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false

import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, TestDataFactory, create_test_db

# Populated in setUpModule to defer import until mocks are in place.
inherit_tags = None


def setUpModule() -> None:
    """Import images repository with ComfyUI dependencies mocked."""
    global inherit_tags
    mock_dict: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        from meld.image_manager.features.images import repository as _repo

        inherit_tags = _repo.inherit_tags


class TestInheritTags(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def _get_tag_ids(self, image_id: int) -> set[int]:
        """Helper: return the set of tag_ids linked to image_id."""
        self.cursor.execute("SELECT tag_id FROM tag_image_relations WHERE image_id = ?", (image_id,))
        return {row[0] for row in self.cursor.fetchall()}

    def test_copies_all_parent_tags(self) -> None:
        """All tags from the parent are copied to the child."""
        parent = self.factory.create_image(filename="parent.png")
        child = self.factory.create_image(filename="child.png")
        tag_a = self.factory.create_tag("tagA")
        tag_b = self.factory.create_tag("tagB")
        self.factory.tag_image(parent, tag_a)
        self.factory.tag_image(parent, tag_b)
        self.conn.commit()

        inherit_tags(self.cursor, child, parent)
        self.conn.commit()

        self.assertEqual(self._get_tag_ids(child), {tag_a, tag_b})

    def test_no_duplicate_on_overlap(self) -> None:
        """Tags already on the child are not duplicated when parent has them too."""
        parent = self.factory.create_image(filename="parent.png")
        child = self.factory.create_image(filename="child.png")
        tag = self.factory.create_tag("shared")
        self.factory.tag_image(parent, tag)
        self.factory.tag_image(child, tag)  # child already has this tag
        self.conn.commit()

        inherit_tags(self.cursor, child, parent)
        self.conn.commit()

        self.cursor.execute(
            "SELECT COUNT(*) FROM tag_image_relations WHERE image_id = ? AND tag_id = ?",
            (child, tag),
        )
        count: int = self.cursor.fetchone()[0]
        self.assertEqual(count, 1, "Tag should not be duplicated")

    def test_noop_when_parent_has_no_tags(self) -> None:
        """No rows are inserted when the parent has no tags."""
        parent = self.factory.create_image(filename="parent.png")
        child = self.factory.create_image(filename="child.png")
        self.conn.commit()

        inherit_tags(self.cursor, child, parent)
        self.conn.commit()

        self.assertEqual(self._get_tag_ids(child), set())

    def test_noop_when_parent_id_zero(self) -> None:
        """inherit_tags does nothing (early return) when parent_id is 0/falsy."""
        child = self.factory.create_image(filename="child.png")
        self.conn.commit()

        # parent_id=0 is falsy — the function must early-return without querying
        inherit_tags(self.cursor, child, 0)
        self.conn.commit()

        self.assertEqual(self._get_tag_ids(child), set())

    def test_preserves_child_own_tags(self) -> None:
        """Tags already on the child that the parent does NOT have are kept."""
        parent = self.factory.create_image(filename="parent.png")
        child = self.factory.create_image(filename="child.png")
        parent_tag = self.factory.create_tag("from_parent")
        child_tag = self.factory.create_tag("child_only")
        self.factory.tag_image(parent, parent_tag)
        self.factory.tag_image(child, child_tag)
        self.conn.commit()

        inherit_tags(self.cursor, child, parent)
        self.conn.commit()

        self.assertEqual(self._get_tag_ids(child), {parent_tag, child_tag})


if __name__ == "__main__":
    unittest.main()
