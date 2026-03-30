"""
Integration tests for py/image_manager/features/analytics/service.py

Tests for run_aggregation() patch db_connection to use an in-memory SQLite
database so the function writes to a controlled state.  Tests for the
cursor-based functions (get_summary, get_category_list, get_counts) pass the
cursor directly.
"""

# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false

import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, TestDataFactory, create_test_db, make_db_ctx

# Populated in setUpModule.
run_aggregation = None
get_summary = None
get_category_list = None
get_counts = None

_SERVICE_MODULE = "meld.image_manager.features.analytics.service"


def setUpModule() -> None:
    """Import analytics service with ComfyUI dependencies mocked."""
    global run_aggregation, get_summary, get_category_list, get_counts
    mock_dict: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        import meld.image_manager.features.analytics.service as _svc

        run_aggregation = _svc.run_aggregation
        get_summary = _svc.get_summary
        get_category_list = _svc.get_category_list
        get_counts = _svc.get_counts


class TestRunAggregation(unittest.TestCase):
    """Tests for run_aggregation() — patches db_connection with in-memory DB."""

    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def _run(self) -> None:
        """Invoke run_aggregation() against the in-memory DB."""
        with patch(f"{_SERVICE_MODULE}.db_connection", return_value=make_db_ctx(self.conn)):
            run_aggregation()

    def test_total_excludes_deleted(self) -> None:
        """run_aggregation counts only non-deleted images in total_images."""
        self.factory.create_image(filename="a.png")
        self.factory.create_image(filename="b.png")
        self.factory.create_image(filename="c.png", deleted_at=9999.0)  # soft-deleted
        self.factory.create_image(filename="d.png", deleted_at=9999.0)
        self.conn.commit()
        self._run()

        self.cursor.execute("SELECT value FROM analytics_meta WHERE key = 'total_images'")
        row = self.cursor.fetchone()
        self.assertIsNotNone(row)
        self.assertEqual(int(row[0]), 2)

    def test_positive_prompts_aggregation(self) -> None:
        """run_aggregation tallies each positive prompt's distinct image count."""
        img1 = self.factory.create_image(filename="i1.png")
        img2 = self.factory.create_image(filename="i2.png")
        _img3 = self.factory.create_image(filename="i3.png")
        pp = self.factory.create_positive_prompt("masterpiece")
        self.factory.link_positive_prompt(img1, pp)
        self.factory.link_positive_prompt(img2, pp)
        self.conn.commit()
        self._run()

        self.cursor.execute("SELECT count FROM analytics_positive_prompts WHERE name = 'masterpiece'")
        row = self.cursor.fetchone()
        self.assertIsNotNone(row)
        self.assertEqual(row[0], 2)

    def test_tags_aggregation(self) -> None:
        """run_aggregation counts distinct images per tag."""
        img1 = self.factory.create_image(filename="i1.png")
        img2 = self.factory.create_image(filename="i2.png")
        tag = self.factory.create_tag("landscape")
        self.factory.tag_image(img1, tag)
        self.factory.tag_image(img2, tag)
        self.conn.commit()
        self._run()

        self.cursor.execute("SELECT count FROM analytics_tags WHERE name = 'landscape'")
        self.assertEqual(self.cursor.fetchone()[0], 2)

    def test_models_aggregation(self) -> None:
        """run_aggregation counts distinct images per model."""
        img1 = self.factory.create_image(filename="i1.png")
        img_del = self.factory.create_image(filename="i2.png", deleted_at=9999.0)
        model = self.factory.create_model("sdxl")
        self.factory.link_model(img1, model)
        self.factory.link_model(img_del, model)  # deleted — must not count
        self.conn.commit()
        self._run()

        self.cursor.execute("SELECT count FROM analytics_models WHERE name = 'sdxl'")
        self.assertEqual(self.cursor.fetchone()[0], 1, "Deleted images must not contribute to model count")

    def test_by_date_grouping(self) -> None:
        """run_aggregation groups non-deleted images by local calendar date."""
        # Two images on the same Unix day (2020-01-01 00:00 UTC+0)
        self.factory.create_image(filename="a.png", created_at=1577836800.0)
        self.factory.create_image(filename="b.png", created_at=1577836800.0 + 60)
        self.factory.create_image(filename="c.png", created_at=1577836800.0, deleted_at=9999.0)
        self.conn.commit()
        self._run()

        self.cursor.execute("SELECT SUM(count) FROM analytics_by_date")
        total = self.cursor.fetchone()[0]
        self.assertEqual(total, 2, "Deleted images must be excluded from by_date count")

    def test_by_resolution_grouping(self) -> None:
        """run_aggregation groups non-deleted images by WxH resolution string."""
        self.factory.create_image(filename="a.png", width=512, height=512)
        self.factory.create_image(filename="b.png", width=512, height=512)
        self.factory.create_image(filename="c.png", width=1024, height=768)
        self.factory.create_image(filename="d.png", width=512, height=512, deleted_at=9999.0)
        self.conn.commit()
        self._run()

        self.cursor.execute("SELECT count FROM analytics_by_resolution WHERE resolution = '512x512'")
        self.assertEqual(self.cursor.fetchone()[0], 2)

    def test_full_rebuild_clears_old(self) -> None:
        """A second call to run_aggregation completely replaces the previous results."""
        img1 = self.factory.create_image(filename="i1.png")
        pp_old = self.factory.create_positive_prompt("old_prompt")
        self.factory.link_positive_prompt(img1, pp_old)
        self.conn.commit()
        self._run()

        # Now change the data: soft-delete img1, add a new image with a new prompt
        self.cursor.execute("UPDATE images SET deleted_at = 9999.0 WHERE id = ?", (img1,))
        img2 = self.factory.create_image(filename="i2.png")
        pp_new = self.factory.create_positive_prompt("new_prompt")
        self.factory.link_positive_prompt(img2, pp_new)
        self.conn.commit()
        self._run()

        # old_prompt should no longer appear (its only image is deleted)
        self.cursor.execute("SELECT COUNT(*) FROM analytics_positive_prompts WHERE name = 'old_prompt'")
        self.assertEqual(self.cursor.fetchone()[0], 0, "Old prompt must be gone after rebuild")

        # new_prompt must be present
        self.cursor.execute("SELECT count FROM analytics_positive_prompts WHERE name = 'new_prompt'")
        self.assertEqual(self.cursor.fetchone()[0], 1)


class TestGetSummaryFromCache(unittest.TestCase):
    """Tests for get_summary() reading from analytics cache tables."""

    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()

    def tearDown(self) -> None:
        self.conn.close()

    def test_get_summary_top5(self) -> None:
        """get_summary returns at most 5 items per category, ordered by count desc."""
        self.cursor.execute("INSERT INTO analytics_meta (key, value) VALUES ('total_images', '20')")
        for i in range(7):
            self.cursor.execute(
                "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, 1.0)",
                (f"tag{i}", 10 - i),
            )
        self.conn.commit()

        result = get_summary(self.cursor)
        self.assertEqual(result["total_images"], 20)
        self.assertEqual(len(result["tags"]), 5)
        self.assertEqual(result["tags"][0]["name"], "tag0")
        self.assertEqual(result["tags"][4]["name"], "tag4")


class TestGetCategoryListFromCache(unittest.TestCase):
    """Tests for get_category_list() pagination and search."""

    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        for i in range(6):
            self.cursor.execute(
                "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, 1.0)",
                (f"tag{i}", 10 - i),
            )
        self.conn.commit()

    def tearDown(self) -> None:
        self.conn.close()

    def test_get_category_list_pagination(self) -> None:
        """limit and offset correctly page through results."""
        items, total = get_category_list(self.cursor, "tags", limit=2, offset=2)
        self.assertEqual(total, 6)
        self.assertEqual(len(items), 2)
        # Default sort is count_desc; offset=2 skips tag0 and tag1
        self.assertEqual(items[0]["name"], "tag2")

    def test_get_category_list_search(self) -> None:
        """q parameter filters by LIKE match on the name column."""
        self.cursor.execute("INSERT INTO analytics_tags (name, count, updated_at) VALUES ('landscape', 5, 1.0)")
        self.cursor.execute("INSERT INTO analytics_tags (name, count, updated_at) VALUES ('landmark', 3, 1.0)")
        self.cursor.execute("INSERT INTO analytics_tags (name, count, updated_at) VALUES ('portrait', 2, 1.0)")
        self.conn.commit()

        items, total = get_category_list(self.cursor, "tags", q="land")
        self.assertEqual(total, 2)
        names = {i["name"] for i in items}
        self.assertEqual(names, {"landscape", "landmark"})


class TestGetCountsFromCache(unittest.TestCase):
    """Tests for get_counts() retrieving specific names."""

    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.cursor.execute(
            "INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES ('1girl', 100, 1.0)"
        )
        self.cursor.execute("INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES ('solo', 50, 1.0)")
        self.conn.commit()

    def tearDown(self) -> None:
        self.conn.close()

    def test_get_counts_specific_names(self) -> None:
        """get_counts returns counts only for the requested names."""
        result = get_counts(self.cursor, "positive_prompts", ["1girl", "solo"])
        self.assertEqual(result, {"1girl": 100, "solo": 50})

    def test_get_counts_missing_name_omitted(self) -> None:
        """Names not in the cache table are simply absent from the result dict."""
        result = get_counts(self.cursor, "positive_prompts", ["1girl", "missing"])
        self.assertEqual(result, {"1girl": 100})


if __name__ == "__main__":
    unittest.main()
