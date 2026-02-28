import sqlite3
import sys
import unittest
from unittest.mock import MagicMock

# Mock ComfyUI dependencies
sys.modules["folder_paths"] = MagicMock()
sys.modules["server"] = MagicMock()
sys.modules["comfy.cli_args"] = MagicMock()
sys.modules["nodes"] = MagicMock()
sys.modules["comfy"] = MagicMock()
sys.modules["comfy.sd"] = MagicMock()
sys.modules["comfy.utils"] = MagicMock()
sys.modules["comfy.samplers"] = MagicMock()

from py.image_manager.common.constants import RESERVED_TAG_KEYWORD  # noqa: E402
from py.image_manager.features.search.service import SearchService  # noqa: E402


class TestSearchService(unittest.TestCase):
    def setUp(self) -> None:
        self.conn = sqlite3.connect(":memory:")
        self.cursor = self.conn.cursor()
        self.cursor.execute("""
            CREATE TABLE images (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                filename TEXT,
                subfolder TEXT,
                created_at REAL,
                deleted_at REAL
            )
        """)
        self.cursor.execute("""
            CREATE TABLE tags (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT UNIQUE
            )
        """)
        self.cursor.execute("""
            CREATE TABLE tag_image_relations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image_id INTEGER,
                tag_id INTEGER,
                FOREIGN KEY(image_id) REFERENCES images(id),
                FOREIGN KEY(tag_id) REFERENCES tags(id)
            )
        """)

        # Add some test data
        # Image 1: tagged with 'blue'
        self.cursor.execute("INSERT INTO images (filename, created_at) VALUES ('img1.png', 1000)")
        self.cursor.execute("INSERT INTO tags (name) VALUES ('blue')")
        self.cursor.execute("INSERT INTO tag_image_relations (image_id, tag_id) VALUES (1, 1)")

        # Image 2: untagged
        self.cursor.execute("INSERT INTO images (filename, created_at) VALUES ('img2.png', 2000)")

        self.conn.commit()

    def tearDown(self) -> None:
        self.conn.close()

    def test_search_tag_none(self) -> None:
        sql, params, order = SearchService.build_search_sql(f"tag:{RESERVED_TAG_KEYWORD}")
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()

        # Should find image 2
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 2)
        self.assertIsNone(order)

    def test_search_tag_none_quoted(self) -> None:
        sql, params, order = SearchService.build_search_sql(f'tag:"{RESERVED_TAG_KEYWORD}"')
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()

        # Should find image 2
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 2)
        self.assertIsNone(order)

    def test_search_tag_existing(self) -> None:
        sql, params, order = SearchService.build_search_sql("tag:blue")
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()

        # Should find image 1
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 1)
        self.assertIsNone(order)

    def test_search_sort_asc(self) -> None:
        sql, params, order = SearchService.build_search_sql("sort:created_at_asc")
        self.assertEqual(order, "i.created_at ASC")

    def test_search_sort_desc(self) -> None:
        sql, params, order = SearchService.build_search_sql("sort:created_at_desc")
        self.assertEqual(order, "i.created_at DESC")

    def test_search_id_exact(self) -> None:
        sql, params, order = SearchService.build_search_sql("id:1")
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 1)

    def test_search_id_not_exact(self) -> None:
        sql, params, order = SearchService.build_search_sql("-id:1")
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 2)

    def test_search_filename_exact(self) -> None:
        sql, params, order = SearchService.build_search_sql('filename:"img1.png"')
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 1)

    def test_search_filename_partial(self) -> None:
        sql, params, order = SearchService.build_search_sql("filename:g1.p")
        query = f"SELECT id FROM images i WHERE 1=1 {sql}"
        self.cursor.execute(query, params)
        results = self.cursor.fetchall()
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0][0], 1)

    def test_suggestions_do_not_include_none(self) -> None:
        suggestions = SearchService.get_suggestions(self.cursor, "", prefix_filter="tag")
        none_suggestion = next((s for s in suggestions if s["value"] == RESERVED_TAG_KEYWORD), None)
        self.assertIsNone(none_suggestion)


if __name__ == "__main__":
    unittest.main()
