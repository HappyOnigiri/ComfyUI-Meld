"""
Integration tests for the lineage recursive CTEs used in
py/image_manager/features/images/router.py.

The SQL is extracted from the router into local helpers so that the traversal
logic can be tested against an in-memory SQLite database without requiring the
full aiohttp / ComfyUI stack.
"""

import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, TestDataFactory, create_test_db

# ---------------------------------------------------------------------------
# SQL helpers extracted from router.py (lines 1111-1133 and 444-461)
# ---------------------------------------------------------------------------


def get_lineage_ids(cursor: sqlite3.Cursor, image_id: int) -> list[int]:
    """Return the ids of all non-deleted images in the lineage tree rooted at image_id.

    Mirrors the recursive CTE used in /meld/lineage (router.py:1111-1133).
    Both ancestors and descendants are included; deleted images are excluded.
    """
    sql = """
    WITH RECURSIVE
    ancestors(id) AS (
        SELECT id FROM images WHERE id = ?
        UNION
        SELECT i.parent_id FROM images i JOIN ancestors a ON i.id = a.id WHERE i.parent_id IS NOT NULL
    ),
    descendants(id) AS (
        SELECT id FROM images WHERE id = ?
        UNION
        SELECT i.id FROM images i JOIN descendants d ON i.parent_id = d.id
    )
    SELECT i.id FROM images i
    WHERE (i.id IN (SELECT id FROM ancestors) OR i.id IN (SELECT id FROM descendants))
      AND i.deleted_at IS NULL
    ORDER BY i.created_at
    """
    cursor.execute(sql, (image_id, image_id))
    return [row[0] for row in cursor.fetchall()]


def get_ancestors_limited(cursor: sqlite3.Cursor, image_id: int, max_depth: int) -> list[int]:
    """Return ancestor ids up to max_depth levels above image_id.

    Mirrors the depth-limited ancestor CTE used in list-images (router.py:444-461).
    """
    sql = """
    WITH RECURSIVE lineage AS (
        SELECT i.id as start_id, i.parent_id, 1 as depth
        FROM images i
        WHERE i.id = ? AND i.parent_id IS NOT NULL
        UNION ALL
        SELECT l.start_id, i.parent_id, l.depth + 1
        FROM images i
        JOIN lineage l ON i.id = l.parent_id
        WHERE i.parent_id IS NOT NULL AND l.depth < ?
    )
    SELECT i.id
    FROM lineage l
    JOIN images i ON l.parent_id = i.id
    WHERE i.deleted_at IS NULL
    ORDER BY l.depth
    """
    cursor.execute(sql, (image_id, max_depth))
    return [row[0] for row in cursor.fetchall()]


def setUpModule() -> None:
    """Mock ComfyUI modules so that meld.image_manager imports cleanly."""
    mock_dict: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        # Trigger package __init__ with mocks active; result is cached in sys.modules.
        import meld.image_manager  # noqa: F401


class TestLineageCTE(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_linear_chain(self) -> None:
        """A linear chain A->B->C->D; querying from B returns all four nodes."""
        img_a = self.factory.create_image(filename="a.png", created_at=100.0)
        img_b = self.factory.create_image(filename="b.png", created_at=200.0, parent_id=img_a)
        img_c = self.factory.create_image(filename="c.png", created_at=300.0, parent_id=img_b)
        img_d = self.factory.create_image(filename="d.png", created_at=400.0, parent_id=img_c)
        self.conn.commit()

        result = get_lineage_ids(self.cursor, img_b)
        self.assertEqual(set(result), {img_a, img_b, img_c, img_d})

    def test_branching_tree(self) -> None:
        """One parent with multiple children; all nodes are returned."""
        parent = self.factory.create_image(filename="p.png", created_at=100.0)
        child1 = self.factory.create_image(filename="c1.png", created_at=200.0, parent_id=parent)
        child2 = self.factory.create_image(filename="c2.png", created_at=300.0, parent_id=parent)
        self.conn.commit()

        result = get_lineage_ids(self.cursor, parent)
        self.assertEqual(set(result), {parent, child1, child2})

    def test_deleted_excluded(self) -> None:
        """Nodes with deleted_at set are excluded from lineage traversal."""
        parent = self.factory.create_image(filename="p.png", created_at=100.0)
        child_live = self.factory.create_image(filename="cl.png", created_at=200.0, parent_id=parent)
        child_del = self.factory.create_image(filename="cd.png", created_at=300.0, parent_id=parent, deleted_at=9999.0)
        self.conn.commit()

        result = get_lineage_ids(self.cursor, parent)
        self.assertIn(parent, result)
        self.assertIn(child_live, result)
        self.assertNotIn(child_del, result)

    def test_isolated_node(self) -> None:
        """An image with no parent and no children returns only itself."""
        img = self.factory.create_image(filename="solo.png", created_at=100.0)
        self.conn.commit()

        result = get_lineage_ids(self.cursor, img)
        self.assertEqual(result, [img])

    def test_depth_limit(self) -> None:
        """get_ancestors_limited respects max_depth; deeper ancestors are excluded.

        Chain: A -> B -> C -> D (D is deepest).
        From D with max_depth=1, only C should be returned.
        From D with max_depth=2, C and B should be returned.
        """
        img_a = self.factory.create_image(filename="a.png", created_at=100.0)
        img_b = self.factory.create_image(filename="b.png", created_at=200.0, parent_id=img_a)
        img_c = self.factory.create_image(filename="c.png", created_at=300.0, parent_id=img_b)
        img_d = self.factory.create_image(filename="d.png", created_at=400.0, parent_id=img_c)
        self.conn.commit()

        result_1 = get_ancestors_limited(self.cursor, img_d, max_depth=1)
        self.assertEqual(result_1, [img_c], "depth=1 must return only direct parent")

        result_2 = get_ancestors_limited(self.cursor, img_d, max_depth=2)
        self.assertEqual(set(result_2), {img_c, img_b}, "depth=2 must return C and B")
        self.assertNotIn(img_a, result_2, "A is 3 levels up and must be excluded")


if __name__ == "__main__":
    unittest.main()
