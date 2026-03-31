"""Unit tests for ScanState thread-safe state management."""

from __future__ import annotations

import sys
import unittest
from typing import TYPE_CHECKING
from unittest.mock import MagicMock

from tests.helpers import COMFYUI_MOCK_KEYS

if TYPE_CHECKING:
    from meld.image_manager.features.importer.scan_state import ScanState


def setUpModule() -> None:
    mocks = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    sys.modules.update(mocks)


def tearDownModule() -> None:
    for key in COMFYUI_MOCK_KEYS:
        sys.modules.pop(key, None)


class TestScanState(unittest.TestCase):
    def _make(self) -> ScanState:
        from meld.image_manager.features.importer.scan_state import ScanState

        return ScanState()

    def test_initial_state(self) -> None:
        state = self._make()
        self.assertFalse(state.is_running)
        self.assertFalse(state.should_cancel)

    def test_try_start_sets_running(self) -> None:
        state = self._make()
        result = state.try_start()
        self.assertTrue(result)
        self.assertTrue(state.is_running)

    def test_try_start_prevents_double_start(self) -> None:
        """Second try_start() returns False when already running."""
        state = self._make()
        self.assertTrue(state.try_start())
        self.assertFalse(state.try_start())
        self.assertTrue(state.is_running)

    def test_try_start_resets_counters(self) -> None:
        state = self._make()
        state.try_start()
        state.set_new_count(5)
        state.set_updated_count(3)
        state.set_total_count(8)
        state.mark_finished()

        # Second start should reset all counters
        state.try_start()
        status = state.get_status()
        self.assertEqual(status.new_count, 0)
        self.assertEqual(status.updated_count, 0)
        self.assertEqual(status.total_count, 0)

    def test_mark_finished_clears_state(self) -> None:
        state = self._make()
        state.try_start()
        state.request_cancel()
        state.mark_finished()
        self.assertFalse(state.is_running)
        self.assertFalse(state.should_cancel)

    def test_request_cancel_sets_flag(self) -> None:
        state = self._make()
        state.request_cancel()
        self.assertTrue(state.should_cancel)

    def test_get_status_returns_snapshot(self) -> None:
        """Changes after get_status() do not affect the returned snapshot."""
        state = self._make()
        state.try_start()
        state.set_updated_count(10)

        snapshot = state.get_status()
        self.assertEqual(snapshot.updated_count, 10)

        # Mutating state after snapshot should not affect the snapshot
        state.set_updated_count(99)
        self.assertEqual(snapshot.updated_count, 10)

    def test_get_status_fields(self) -> None:
        state = self._make()
        state.try_start()
        state.set_new_count(2)
        state.set_updated_count(3)
        state.set_total_count(5)
        state.request_cancel()

        status = state.get_status()
        self.assertTrue(status.is_running)
        self.assertTrue(status.should_cancel)
        self.assertEqual(status.new_count, 2)
        self.assertEqual(status.updated_count, 3)
        self.assertEqual(status.total_count, 5)


if __name__ == "__main__":
    unittest.main()
