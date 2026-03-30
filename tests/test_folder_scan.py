"""
Integration tests for the folder-scan pipeline in
meld/image_manager/features/importer/service.py (_scan_thread).

Heavy mocking is required because _scan_thread relies on:
  - db_connection  (patched to return in-memory SQLite)
  - server.PromptServer  (patched to MagicMock)
  - MetadataHelper  (patched)
  - Image.open  (patched)
  - os.walk  (patched)
  - calculate_sha256  (patched)
"""

# mypy: disable-error-code="union-attr,misc"
# pyright: reportOptionalCall=false
# pyright: reportOptionalMemberAccess=false

import sqlite3
import sys
import unittest
from unittest.mock import MagicMock, patch

from tests.helpers import COMFYUI_MOCK_KEYS, TestDataFactory, create_test_db, make_db_ctx

# Keep a stable dict of ComfyUI mocks that can be reused across tests to ensure
# lazy imports inside _scan_thread (e.g. infer_parent_id -> images.service) do
# not fail with ModuleNotFoundError when they load image_manager/__init__.py.
_COMFYUI_SYS_MOCKS: dict[str, MagicMock] = {}

_IMPORTER_SVC = "meld.image_manager.features.importer.service"
# _scan_thread and its dependencies now live in scan_executor; patch targets moved there.
_SCAN_EXEC = "meld.image_manager.features.importer.scan_executor"

# Populated in setUpModule.
_scan_thread = None
_scan_state = None
cancel_scan = None

# Fake metadata returned by the mocked MetadataHelper
_FAKE_META: tuple[str, str, str, None, None, None, list[str]] = (
    "positive prompt",
    "negative prompt",
    "model_name",
    None,
    None,
    None,
    [],
)


def setUpModule() -> None:
    """Import importer service module with ComfyUI dependencies mocked.

    Mocks are installed permanently (not via patch.dict) so that lazy imports
    inside _scan_thread (e.g. infer_parent_id -> images.service -> image_manager
    __init__.py -> api.py -> server) succeed throughout the test run.
    """
    global _scan_thread, _scan_state, cancel_scan
    _COMFYUI_SYS_MOCKS.update({k: MagicMock() for k in COMFYUI_MOCK_KEYS})
    sys.modules.update(_COMFYUI_SYS_MOCKS)

    from meld.image_manager.features.importer import scan_executor as _exec
    from meld.image_manager.features.importer import service as _svc

    _scan_thread = _exec._scan_thread
    _scan_state = _svc._scan_state
    cancel_scan = _svc.cancel_scan


def tearDownModule() -> None:
    """Remove permanently installed ComfyUI mocks from sys.modules."""
    for key in _COMFYUI_SYS_MOCKS:
        sys.modules.pop(key, None)


def _mock_image_open(size: tuple[int, int] = (512, 512)) -> MagicMock:
    """Return a context-manager-compatible PIL Image mock."""
    img_mock = MagicMock()
    img_mock.__enter__ = MagicMock(return_value=img_mock)
    img_mock.__exit__ = MagicMock(return_value=False)
    img_mock.size = size
    return img_mock


class TestFolderScan(unittest.TestCase):
    def setUp(self) -> None:
        self.conn: sqlite3.Connection = create_test_db()
        self.cursor: sqlite3.Cursor = self.conn.cursor()
        self.factory: TestDataFactory = TestDataFactory(self.cursor)
        # Reset scan state left by previous tests (mark_finished clears is_running and should_cancel)
        _scan_state.mark_finished()

    def tearDown(self) -> None:
        self.conn.close()

    def _run_scan(
        self,
        files: list[str],
        sha256_map: dict[str, str] | None = None,
        auto_link: bool = False,
        tags: list[str] | None = None,
        link_strategy: str = "none",
    ) -> None:
        """Run _scan_thread synchronously with controlled file/hash inputs."""
        if sha256_map is None:
            sha256_map = {}

        def _fake_sha256(path: str) -> str:
            return sha256_map.get(path, f"sha_{path}")

        walk_result: list[tuple[str, list[str], list[str]]] = [("/base/sub", [], [f.split("/")[-1] for f in files])]

        server_mock: MagicMock = _COMFYUI_SYS_MOCKS.get("server", MagicMock())
        server_mock.PromptServer = MagicMock()
        server_mock.PromptServer.instance = MagicMock()
        server_mock.PromptServer.instance.send_sync = MagicMock()

        meta_mock = MagicMock()
        meta_mock.extract_metadata.return_value = _FAKE_META
        meta_mock.smart_split.return_value = []
        meta_mock.get_imagehash.return_value = None  # skip phash computation

        with (
            patch(f"{_SCAN_EXEC}.db_connection", return_value=make_db_ctx(self.conn)),
            patch(f"{_SCAN_EXEC}.os.walk", return_value=iter(walk_result)),
            patch(f"{_SCAN_EXEC}.os.path.getmtime", return_value=1000.0),
            patch(f"{_SCAN_EXEC}.calculate_sha256", side_effect=_fake_sha256),
            patch(f"{_SCAN_EXEC}.MetadataHelper", meta_mock),
            patch(f"{_SCAN_EXEC}.Image.open", return_value=_mock_image_open()),
            patch(f"{_SCAN_EXEC}.server", server_mock),
        ):
            _scan_thread(
                base_dir="/base",
                subfolder="sub",
                img_type="output",
                recursive=False,
                auto_link_parent=auto_link,
                tags=tags,
                link_strategy=link_strategy,
            )

    def _image_count(self) -> int:
        self.cursor.execute("SELECT COUNT(*) FROM images WHERE deleted_at IS NULL")
        return self.cursor.fetchone()[0]

    def _tag_names_for(self, img_id: int) -> set[str]:
        self.cursor.execute(
            "SELECT t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id = ?",
            (img_id,),
        )
        return {row[0] for row in self.cursor.fetchall()}

    # ------------------------------------------------------------------

    def test_new_image_registered(self) -> None:
        """A previously unseen image is inserted into the images table."""
        self._run_scan(["/base/sub/new.png"])
        self.assertEqual(self._image_count(), 1)

    def test_sha256_dedup_skips_existing(self) -> None:
        """An image whose SHA-256 already exists in the DB is not re-registered."""
        _existing = self.factory.create_image(sha256="existing_hash", filename="old.png")
        self.conn.commit()

        # The scan file maps to the same SHA-256 as the existing image
        self._run_scan(["/base/sub/old.png"], sha256_map={"/base/sub/old.png": "existing_hash"})

        # Still only one image in the DB (the original)
        self.cursor.execute("SELECT COUNT(*) FROM images WHERE deleted_at IS NULL")
        self.assertEqual(self.cursor.fetchone()[0], 1)

    def test_cancellation_stops_scan(self) -> None:
        """Setting should_cancel before the scan prevents any new registrations."""
        _scan_state.request_cancel()
        self._run_scan(["/base/sub/img1.png", "/base/sub/img2.png"])
        self.assertEqual(self._image_count(), 0, "No images should be registered after cancel")

    def test_link_strategy_new_only(self) -> None:
        """link_strategy='new_only' requests parent linking only for newly added images."""
        # Pre-existing image in the DB (already has known SHA-256)
        existing_sha = "existing_sha"
        _pre_existing = self.factory.create_image(
            sha256=existing_sha, filename="old.png", phash="0000000000000000", created_at=500.0
        )
        self.conn.commit()

        # Scan: old.png is a dup; new.png is fresh
        self._run_scan(
            ["/base/sub/old.png", "/base/sub/new.png"],
            sha256_map={"/base/sub/old.png": existing_sha},
            auto_link=True,
            link_strategy="new_only",
        )
        # new.png must appear; old.png must still be present (not duplicated)
        self.assertEqual(self._image_count(), 2)

    def test_link_strategy_all(self) -> None:
        """link_strategy='all' attempts parent linking for every image in the scan scope."""
        existing_sha = "sha_existing"
        pre_existing = self.factory.create_image(
            sha256=existing_sha, filename="old.png", phash="0000000000000000", created_at=500.0
        )
        self.conn.commit()

        self._run_scan(
            ["/base/sub/old.png"],
            sha256_map={"/base/sub/old.png": existing_sha},
            auto_link=True,
            link_strategy="all",
        )
        # The existing image should still be in the DB
        self.cursor.execute("SELECT id FROM images WHERE deleted_at IS NULL")
        ids = [r[0] for r in self.cursor.fetchall()]
        self.assertIn(pre_existing, ids)

    def test_tags_applied_to_both(self) -> None:
        """Specified tags are applied to both new and existing (duplicate) images."""
        existing_sha = "sha_dup"
        dup_img = self.factory.create_image(sha256=existing_sha, filename="dup.png")
        self.conn.commit()

        self._run_scan(
            ["/base/sub/dup.png", "/base/sub/fresh.png"],
            sha256_map={"/base/sub/dup.png": existing_sha},
            tags=["batch_tag"],
        )

        # The duplicate (existing) image should have the tag
        self.assertIn("batch_tag", self._tag_names_for(dup_img))

        # The freshly registered image should also have the tag
        self.cursor.execute("SELECT id FROM images WHERE sha256 != ? AND deleted_at IS NULL", (existing_sha,))
        row = self.cursor.fetchone()
        self.assertIsNotNone(row, "Fresh image must be registered")
        fresh_id: int = row[0]
        self.assertIn("batch_tag", self._tag_names_for(fresh_id))

    def test_inherit_tags_on_link(self) -> None:
        """Tags are inherited from parent when a parent link is established during scan.

        Setup:
        - parent image already in DB with tag 'parent_tag' and a known phash.
        - New image is registered with an identical phash so it matches the parent.
        - gallery.inherit_tags = True is set in settings.
        - auto_link=True, link_strategy='new_only'.
        """
        parent_phash = "0000000000000000"
        parent = self.factory.create_image(
            sha256="sha_parent",
            filename="parent.png",
            phash=parent_phash,
            created_at=500.0,
        )
        tag = self.factory.create_tag("parent_tag")
        self.factory.tag_image(parent, tag)
        self.factory.create_setting("gallery.inherit_tags", True)
        # Use a strict auto-link threshold that will match an exact phash
        self.factory.create_setting("gallery.auto_link_phash_threshold", 100)
        self.factory.create_setting("gallery.matching_strategy", "phash_only")
        self.conn.commit()

        # The new image has the same phash so it should link to parent
        scan_sha = "sha_child"

        def _fake_sha(path: str) -> str:
            return scan_sha

        walk_result: list[tuple[str, list[str], list[str]]] = [("/base/sub", [], ["child.png"])]
        server_mock = MagicMock()
        server_mock.PromptServer.instance.send_sync = MagicMock()

        meta_mock = MagicMock()
        meta_mock.extract_metadata.return_value = _FAKE_META
        meta_mock.smart_split.return_value = []

        # imagehash mock: phash() returns parent_phash so the child matches
        imagehash_mock = MagicMock()
        imagehash_mock.phash.return_value = MagicMock(__str__=lambda self: parent_phash)
        meta_mock.get_imagehash.return_value = imagehash_mock

        with (
            patch(f"{_SCAN_EXEC}.db_connection", return_value=make_db_ctx(self.conn)),
            patch(f"{_SCAN_EXEC}.os.walk", return_value=iter(walk_result)),
            patch(f"{_SCAN_EXEC}.os.path.getmtime", return_value=1000.0),
            patch(f"{_SCAN_EXEC}.calculate_sha256", side_effect=_fake_sha),
            patch(f"{_SCAN_EXEC}.MetadataHelper", meta_mock),
            patch(f"{_SCAN_EXEC}.Image.open", return_value=_mock_image_open()),
            patch(f"{_SCAN_EXEC}.server", server_mock),
        ):
            _scan_thread(
                base_dir="/base",
                subfolder="sub",
                img_type="output",
                recursive=False,
                auto_link_parent=True,
                tags=None,
                link_strategy="new_only",
            )

        # Find the newly registered child
        self.cursor.execute("SELECT id FROM images WHERE sha256 = ?", (scan_sha,))
        row = self.cursor.fetchone()
        self.assertIsNotNone(row, "Child image must have been registered")
        child_id: int = row[0]

        # Verify parent link
        self.cursor.execute("SELECT parent_id FROM images WHERE id = ?", (child_id,))
        parent_id_val = self.cursor.fetchone()[0]
        self.assertEqual(parent_id_val, parent, "Child must be linked to the matching parent")

        # Verify tag inheritance
        self.assertIn("parent_tag", self._tag_names_for(child_id))


if __name__ == "__main__":
    unittest.main()
