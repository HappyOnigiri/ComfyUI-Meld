import json
import sqlite3
import sys
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

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
for k in _MOCK_KEYS:
    if k not in sys.modules:
        sys.modules[k] = MagicMock()

from aiohttp import web  # noqa: E402

from py.image_manager.features.analytics.router import post_analytics_counts  # noqa: E402


class TestAnalyticsRouter(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        self.patcher_db = patch("py.image_manager.features.analytics.router.db_connection")
        self.mock_db_ctx = self.patcher_db.start()
        self.mock_conn = MagicMock(spec=sqlite3.Connection)
        self.mock_cursor = MagicMock(spec=sqlite3.Cursor)
        self.mock_conn.cursor.return_value = self.mock_cursor
        self.mock_db_cm = MagicMock()
        self.mock_db_cm.__enter__ = MagicMock(return_value=self.mock_conn)
        self.mock_db_cm.__exit__ = MagicMock(return_value=False)
        self.mock_db_ctx.return_value = self.mock_db_cm

        self.patcher_get_counts = patch("py.image_manager.features.analytics.router.get_counts")
        self.mock_get_counts = self.patcher_get_counts.start()

    def tearDown(self) -> None:
        self.patcher_db.stop()
        self.patcher_get_counts.stop()

    def _make_request(self, json_data: dict[str, object] | list[object] | Exception) -> MagicMock:
        request = MagicMock(spec=web.Request)
        if isinstance(json_data, Exception):
            request.json = AsyncMock(side_effect=json_data)
        else:
            request.json = AsyncMock(return_value=json_data)
        return request

    async def test_post_analytics_counts_success(self) -> None:
        """Valid request returns successful JSON response."""
        request = self._make_request({"category": "positive_prompts", "names": ["1girl", "solo"]})
        self.mock_get_counts.return_value = {"1girl": 100, "solo": 50}

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 200)

        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertTrue(data["success"])
        self.assertEqual(data["data"], {"1girl": 100, "solo": 50})
        self.mock_get_counts.assert_called_once_with(self.mock_cursor, "positive_prompts", ["1girl", "solo"])
        self.mock_cursor.close.assert_called_once()

    async def test_post_analytics_counts_invalid_json(self) -> None:
        """Invalid JSON raises exception in request.json() and returns 400."""
        request = self._make_request(Exception("Invalid JSON"))

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 400)
        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertFalse(data["success"])
        self.assertEqual(data["error"], "Invalid JSON body")

    async def test_post_analytics_counts_not_dict_body(self) -> None:
        """Array JSON returns 400."""
        request = self._make_request(["positive_prompts"])

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 400)
        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertEqual(data["error"], "Request body must be a JSON object")

    async def test_post_analytics_counts_invalid_category(self) -> None:
        """Invalid category returns 400."""
        request = self._make_request({"category": "invalid_cat", "names": ["abc"]})

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 400)
        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertIn("Invalid or missing category", data["error"])

    async def test_post_analytics_counts_empty_names(self) -> None:
        """Empty names fast-paths to empty response without DB call."""
        request = self._make_request({"category": "positive_prompts", "names": []})

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 200)
        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertEqual(data["data"], {})
        self.mock_get_counts.assert_not_called()

    async def test_post_analytics_counts_too_many_names(self) -> None:
        """Requesting over 500 names returns 400."""
        request = self._make_request({"category": "positive_prompts", "names": ["a"] * 501})

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 400)
        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertEqual(data["error"], "Too many names, max 500")

    async def test_post_analytics_counts_db_error(self) -> None:
        """DB Error results in 500 status."""
        request = self._make_request({"category": "positive_prompts", "names": ["error_please"]})
        self.mock_get_counts.side_effect = sqlite3.Error("DB Offline")

        resp = await post_analytics_counts(request)
        self.assertEqual(resp.status, 500)
        assert isinstance(resp, web.Response)
        assert resp.text is not None
        data = json.loads(resp.text)
        self.assertFalse(data["success"])
        self.assertEqual(data["error"], "DB Offline")


if __name__ == "__main__":
    unittest.main()
