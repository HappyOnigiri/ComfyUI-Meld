"""
Integration tests for find_closest_parent() in meld/image_manager/features/images/repository.py

All tests use an in-memory SQLite database. phash values are 16-character hex
strings representing 64-bit perceptual hashes; hamming distance is computed by
XOR-ing the two hex integers and counting set bits.
"""

# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false

import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, TestDataFactory, create_test_db

# Populated in setUpModule to defer import until mocks are in place.
find_closest_parent = None


def setUpModule() -> None:
    """Import images repository with ComfyUI dependencies mocked."""
    global find_closest_parent
    mock_dict: dict[str, MagicMock] = {k: MagicMock() for k in COMFYUI_MOCK_KEYS}
    with patch.dict(sys.modules, mock_dict):
        from meld.image_manager.features.images import repository as _repo

        find_closest_parent = _repo.find_closest_parent


# Convenience phash constants for readability
PHASH_ZEROS = "0000000000000000"  # 64-bit all-zeros
PHASH_1BIT = "0000000000000001"  # 1 bit different from PHASH_ZEROS (distance=1)
PHASH_2BITS = "0000000000000003"  # 2 bits different (distance=2)
PHASH_5BITS = "000000000000001f"  # 5 bits set       (distance=5)
PHASH_12BITS = "0000000000000fff"  # 12 bits set      (distance=12)
PHASH_ALL = "ffffffffffffffff"  # 64 bits set       (distance=64)


class TestFindClosestParent(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)

    def tearDown(self) -> None:
        self.conn.close()

    def test_none_phash_returns_none(self) -> None:
        """find_closest_parent returns None immediately when phash is None."""
        self.factory.create_image(phash=PHASH_ZEROS, created_at=1000.0)
        self.conn.commit()
        result = find_closest_parent(None, self.cursor, threshold=10)
        self.assertIsNone(result)

    def test_exact_match_returns_id(self) -> None:
        """An identical phash (distance=0) is returned instantly without sorting."""
        img_id = self.factory.create_image(phash=PHASH_ZEROS, created_at=1000.0)
        self.conn.commit()
        result = find_closest_parent(PHASH_ZEROS, self.cursor, threshold=5)
        self.assertEqual(result, img_id)

    def test_no_match_over_threshold(self) -> None:
        """Returns None when the closest candidate exceeds the distance threshold."""
        self.factory.create_image(phash=PHASH_ALL, created_at=1000.0)
        self.conn.commit()
        # distance=64, threshold=5 → no match
        result = find_closest_parent(PHASH_ZEROS, self.cursor, threshold=5)
        self.assertIsNone(result)

    def test_threshold_conversion(self) -> None:
        """Threshold is computed as round(64*(1-pct/100)) when read from settings.

        gallery.suggest_phash_threshold=82 -> threshold_dist=round(64*0.18)=12.
        A candidate 12 bits away must be returned (distance <= threshold).
        """
        img_id = self.factory.create_image(phash=PHASH_12BITS, created_at=1000.0)
        # Insert 82% threshold into settings so find_closest_parent reads it
        self.cursor.execute(
            "INSERT INTO settings (key, value) VALUES (?, ?)",
            ("gallery.suggest_phash_threshold", "82"),
        )
        self.conn.commit()
        # Call without explicit threshold; function reads from settings
        result = find_closest_parent(PHASH_ZEROS, self.cursor)
        self.assertEqual(result, img_id)

    def test_closest_wins(self) -> None:
        """Among multiple candidates within threshold, the one with lowest distance wins."""
        _img_far = self.factory.create_image(phash=PHASH_2BITS, created_at=2000.0)
        img_close = self.factory.create_image(phash=PHASH_1BIT, created_at=1000.0)
        self.conn.commit()
        result = find_closest_parent(PHASH_ZEROS, self.cursor, threshold=5)
        self.assertEqual(result, img_close, "Candidate with distance=1 must beat distance=2")

    def test_exclude_id_filters_self(self) -> None:
        """exclude_id removes the specified image from the candidate pool."""
        img_id = self.factory.create_image(phash=PHASH_ZEROS, created_at=1000.0)
        self.conn.commit()
        # The only candidate is the image itself; excluding it must yield None
        result = find_closest_parent(PHASH_ZEROS, self.cursor, threshold=5, exclude_id=img_id)
        self.assertIsNone(result)

    def test_before_timestamp_filter(self) -> None:
        """Images with created_at >= before_timestamp are excluded."""
        # This image is "in the future" relative to before_timestamp=500.0
        self.factory.create_image(phash=PHASH_ZEROS, created_at=1000.0)
        self.conn.commit()
        result = find_closest_parent(PHASH_ZEROS, self.cursor, threshold=5, before_timestamp=500.0)
        self.assertIsNone(result)

    def test_deleted_excluded(self) -> None:
        """Images with deleted_at IS NOT NULL are never returned as parents."""
        self.factory.create_image(phash=PHASH_ZEROS, created_at=1000.0, deleted_at=9999.0)
        self.conn.commit()
        result = find_closest_parent(PHASH_ZEROS, self.cursor, threshold=5)
        self.assertIsNone(result)

    def test_phash_created_sort_strategy(self) -> None:
        """phash_created strategy picks the most recent image in the closest bucket.

        Buckets are defined by dist//5.  Within the same bucket, the image with the
        highest created_at wins (most recent ancestor).  before_timestamp is
        required to activate the phash_created code path.
        """
        # Bucket 0: dist//5==0 (dist 0-4)
        _img_older = self.factory.create_image(phash=PHASH_1BIT, created_at=1000.0)  # dist=1, bucket 0
        img_newer = self.factory.create_image(phash=PHASH_2BITS, created_at=2000.0)  # dist=2, bucket 0
        # Bucket 1: dist//5==1 (dist 5-9)
        _img_bucket1 = self.factory.create_image(phash=PHASH_5BITS, created_at=3000.0)  # dist=5, bucket 1
        self.conn.commit()

        result = find_closest_parent(
            PHASH_ZEROS,
            self.cursor,
            threshold=5,
            before_timestamp=5000.0,
            sort_strategy="phash_created",
        )
        # img_newer (dist=2, created_at=2000) sorts before img_older (dist=1, created_at=1000)
        # because its sort key is (0, -2000) < (0, -1000) → comes first in ascending sort
        self.assertEqual(result, img_newer)


if __name__ == "__main__":
    unittest.main()
