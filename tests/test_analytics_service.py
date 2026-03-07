# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false, reportOptionalIterable=false
import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

# Mock ComfyUI deps only during import; patch.dict restores automatically.
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

CATEGORIES: tuple[str, ...] | None = None
get_category_list = None
get_summary = None
get_counts = None


def setUpModule() -> None:
    """Import analytics service with scoped sys.modules mocks."""
    global CATEGORIES, get_category_list, get_summary, get_counts
    mock_dict = {k: MagicMock() for k in _MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        import py.image_manager.features.analytics.service as _svc  # noqa: E402

        CATEGORIES = _svc.CATEGORIES
        get_category_list = _svc.get_category_list
        get_summary = _svc.get_summary
        get_counts = _svc.get_counts


def create_analytics_schema(cursor: sqlite3.Cursor) -> None:
    """Create minimal analytics tables for testing."""
    cursor.execute("""
		CREATE TABLE analytics_meta (
			key TEXT PRIMARY KEY,
			value TEXT NOT NULL
		)
	""")
    cursor.execute("""
		CREATE TABLE analytics_positive_prompts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			count INTEGER NOT NULL,
			updated_at REAL NOT NULL
		)
	""")
    cursor.execute("""
		CREATE TABLE analytics_negative_prompts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			count INTEGER NOT NULL,
			updated_at REAL NOT NULL
		)
	""")
    cursor.execute("""
		CREATE TABLE analytics_tags (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			count INTEGER NOT NULL,
			updated_at REAL NOT NULL
		)
	""")
    cursor.execute("""
		CREATE TABLE analytics_models (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			count INTEGER NOT NULL,
			updated_at REAL NOT NULL
		)
	""")
    cursor.execute("""
		CREATE TABLE analytics_by_date (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			date TEXT NOT NULL,
			count INTEGER NOT NULL,
			updated_at REAL NOT NULL
		)
	""")
    cursor.execute("""
		CREATE TABLE analytics_by_resolution (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			resolution TEXT NOT NULL,
			count INTEGER NOT NULL,
			updated_at REAL NOT NULL
		)
	""")


class TestAnalyticsService(unittest.TestCase):
    def setUp(self) -> None:
        self.conn = sqlite3.connect(":memory:")
        self.cursor = self.conn.cursor()
        create_analytics_schema(self.cursor)
        self.conn.commit()

    def tearDown(self) -> None:
        self.conn.close()

    def test_get_summary_empty_tables(self) -> None:
        """get_summary returns total_images 0 and empty lists when tables are empty."""
        result = get_summary(self.cursor)
        self.assertEqual(result["total_images"], 0)
        for cat in CATEGORIES:
            self.assertEqual(result[cat], [])

    def test_get_summary_with_data(self) -> None:
        """get_summary returns total_images and top 5 per category."""
        self.cursor.execute("INSERT INTO analytics_meta (key, value) VALUES ('total_images', '42')")
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("landscape", 10, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("portrait", 5, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("nature", 3, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_by_resolution (resolution, count, updated_at) VALUES (?, ?, ?)",
            ("512x512", 20, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_by_resolution (resolution, count, updated_at) VALUES (?, ?, ?)",
            ("768x768", 15, 1.0),
        )
        self.conn.commit()

        result = get_summary(self.cursor)
        self.assertEqual(result["total_images"], 42)
        self.assertEqual(
            result["tags"],
            [{"name": "landscape", "count": 10}, {"name": "portrait", "count": 5}, {"name": "nature", "count": 3}],
        )
        self.assertEqual(
            result["by_resolution"],
            [{"resolution": "512x512", "count": 20}, {"resolution": "768x768", "count": 15}],
        )

    def test_get_summary_limits_to_top_5(self) -> None:
        """get_summary returns at most 5 items per category."""
        self.cursor.execute("INSERT INTO analytics_meta (key, value) VALUES ('total_images', '100')")
        for i in range(7):
            self.cursor.execute(
                "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
                (f"tag{i}", 10 - i, 1.0),
            )
        self.conn.commit()

        result = get_summary(self.cursor)
        self.assertEqual(len(result["tags"]), 5)
        self.assertEqual(result["tags"][0]["name"], "tag0")
        self.assertEqual(result["tags"][4]["name"], "tag4")

    def test_get_category_list_valid_category(self) -> None:
        """get_category_list returns items and total for valid category."""
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("a", 5, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("b", 3, 1.0),
        )
        self.conn.commit()

        items, total = get_category_list(self.cursor, "tags")
        self.assertEqual(total, 2)
        self.assertEqual(len(items), 2)
        self.assertEqual(items[0], {"name": "a", "count": 5})
        self.assertEqual(items[1], {"name": "b", "count": 3})

    def test_get_category_list_limit_offset(self) -> None:
        """get_category_list respects limit and offset."""
        for i in range(5):
            self.cursor.execute(
                "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
                (f"tag{i}", 10 - i, 1.0),
            )
        self.conn.commit()

        items, total = get_category_list(self.cursor, "tags", limit=2, offset=1)
        self.assertEqual(total, 5)
        self.assertEqual(len(items), 2)
        self.assertEqual(items[0]["name"], "tag1")
        self.assertEqual(items[1]["name"], "tag2")

    def test_get_category_list_sort_asc(self) -> None:
        """get_category_list sorts ascending when sort=count_asc."""
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("high", 10, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("low", 1, 1.0),
        )
        self.conn.commit()

        items, _ = get_category_list(self.cursor, "tags", sort="count_asc")
        self.assertEqual(items[0]["name"], "low")
        self.assertEqual(items[1]["name"], "high")

    def test_get_category_list_filter_q(self) -> None:
        """get_category_list filters by q parameter."""
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("landscape", 5, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("portrait", 3, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_tags (name, count, updated_at) VALUES (?, ?, ?)",
            ("landmark", 2, 1.0),
        )
        self.conn.commit()

        items, total = get_category_list(self.cursor, "tags", q="land")
        self.assertEqual(total, 2)
        self.assertEqual({i["name"] for i in items}, {"landscape", "landmark"})

    def test_get_category_list_invalid_category(self) -> None:
        """get_category_list returns empty list for invalid category."""
        items, total = get_category_list(self.cursor, "invalid_category")
        self.assertEqual(items, [])
        self.assertEqual(total, 0)

    def test_get_category_list_by_date_format(self) -> None:
        """get_category_list returns date/resolution format for by_date and by_resolution."""
        self.cursor.execute(
            "INSERT INTO analytics_by_date (date, count, updated_at) VALUES (?, ?, ?)",
            ("2025-03-06", 5, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_by_resolution (resolution, count, updated_at) VALUES (?, ?, ?)",
            ("1024x1024", 3, 1.0),
        )
        self.conn.commit()

        date_items, _ = get_category_list(self.cursor, "by_date")
        self.assertEqual(date_items[0], {"date": "2025-03-06", "count": 5})

        res_items, _ = get_category_list(self.cursor, "by_resolution")
        self.assertEqual(res_items[0], {"resolution": "1024x1024", "count": 3})

    def test_get_counts_valid_category_and_names(self) -> None:
        """get_counts returns correct counts for specific names."""
        self.cursor.execute(
            "INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES (?, ?, ?)",
            ("1girl", 100, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES (?, ?, ?)",
            ("solo", 50, 1.0),
        )
        self.cursor.execute(
            "INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES (?, ?, ?)",
            ("masterpiece", 10, 1.0),
        )
        self.conn.commit()

        counts = get_counts(self.cursor, "positive_prompts", ["1girl", "masterpiece"])
        self.assertEqual(counts, {"1girl": 100, "masterpiece": 10})

    def test_get_counts_invalid_category(self) -> None:
        """get_counts returns empty dict for invalid category."""
        counts = get_counts(self.cursor, "invalid_category", ["1girl"])
        self.assertEqual(counts, {})

    def test_get_counts_empty_names(self) -> None:
        """get_counts returns empty dict for empty names list."""
        counts = get_counts(self.cursor, "positive_prompts", [])
        self.assertEqual(counts, {})

    def test_get_counts_missing_names(self) -> None:
        """get_counts does not return keys for names not in db."""
        self.cursor.execute(
            "INSERT INTO analytics_positive_prompts (name, count, updated_at) VALUES (?, ?, ?)",
            ("1girl", 100, 1.0),
        )
        self.conn.commit()

        counts = get_counts(self.cursor, "positive_prompts", ["1girl", "unknown"])
        self.assertEqual(counts, {"1girl": 100})


if __name__ == "__main__":
    unittest.main()
