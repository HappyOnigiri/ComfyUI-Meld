import os
import shutil
import sqlite3
import sys
import tempfile
import unittest
from unittest.mock import ANY, MagicMock, patch

import torch

# Mock ComfyUI dependencies
sys.modules['folder_paths'] = MagicMock()
sys.modules['server'] = MagicMock()
sys.modules['comfy.cli_args'] = MagicMock()
sys.modules['nodes'] = MagicMock()
sys.modules['comfy'] = MagicMock()
sys.modules['comfy.sd'] = MagicMock()
sys.modules['comfy.utils'] = MagicMock()
sys.modules['comfy.samplers'] = MagicMock()

from comfy.cli_args import args  # noqa: E402

args.disable_metadata = False

# Import test target
import py.image_manager.database  # noqa: E402
import py.image_manager.nodes  # noqa: E402


class TestImageManager(unittest.TestCase):
    def setUp(self):
        # Create a temporary directory for DB and output
        self.test_dir = tempfile.mkdtemp()
        self.db_path = os.path.join(self.test_dir, "test.db")

        # Patch DB_PATH in database module
        self.patcher_db = patch('py.image_manager.database.DB_PATH', self.db_path)
        self.patcher_db.start()

        # Initialize DB
        py.image_manager.database.init_db()

        # Mock folder_paths in nodes module
        self.mock_output_dir = os.path.join(self.test_dir, "output")
        os.makedirs(self.mock_output_dir, exist_ok=True)
        py.image_manager.nodes.folder_paths.get_output_directory.return_value = self.mock_output_dir

        # Reset get_save_image_path mock
        py.image_manager.nodes.folder_paths.get_save_image_path.reset_mock(side_effect=True, return_value=True)

        # Instance of node
        self.node = py.image_manager.nodes.MeldNexus()

    def tearDown(self):
        self.patcher_db.stop()
        shutil.rmtree(self.test_dir)

    def test_save_images_filename_prefix_passed(self):
        """Verify that filename_prefix is correctly passed to get_save_image_path"""
        images = torch.zeros((1, 64, 64, 3))
        mock_get_save_path = py.image_manager.nodes.folder_paths.get_save_image_path
        mock_get_save_path.return_value = (
            self.mock_output_dir, "MeldFlow", 1, "", "MeldFlow"
        )

        self.node.save_images(images=images, filename_prefix="CustomPrefix")

        # Check if get_save_image_path was called with the correct prefix
        mock_get_save_path.assert_called_with(
            "CustomPrefix", self.mock_output_dir, 64, 64
        )

    def test_save_images_db_registration(self):
        """Verify that image is registered in DB with correct filename"""
        images = torch.zeros((1, 64, 64, 3))
        mock_get_save_path = py.image_manager.nodes.folder_paths.get_save_image_path
        mock_get_save_path.return_value = (
            self.mock_output_dir, "TestFile", 5, "sub", "Test"
        )

        with patch('PIL.Image.Image.save'):
            self.node.save_images(images=images, filename_prefix="Test")

            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute("SELECT filename, subfolder FROM images")
            row = cursor.fetchone()
            conn.close()

            # f"{filename_with_batch_num}_{counter:05}.png"
            # TestFile_00005.png
            self.assertEqual(row[0], "TestFile_00005.png")
            self.assertEqual(row[1], "sub")

    def test_filename_prefix_with_batch_num_token(self):
        """Verify that %batch_num% in the filename returned by get_save_image_path is resolved"""
        images = torch.zeros((2, 64, 64, 3)) # Batch of 2
        mock_get_save_path = py.image_manager.nodes.folder_paths.get_save_image_path
        mock_get_save_path.return_value = (
            self.mock_output_dir, "Batch_%batch_num%", 1, "", "Batch"
        )

        with patch('PIL.Image.Image.save'):
            self.node.save_images(images=images, filename_prefix="Batch")

            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute("SELECT filename FROM images ORDER BY id ASC")
            rows = cursor.fetchall()
            conn.close()

            self.assertEqual(len(rows), 2)
            self.assertEqual(rows[0][0], "Batch_0_00001.png")
            self.assertEqual(rows[1][0], "Batch_1_00002.png")

    def test_save_images_format_fix(self):
        """Verify that the trailing underscore is removed from the filename"""
        images = torch.zeros((1, 64, 64, 3))
        mock_get_save_path = py.image_manager.nodes.folder_paths.get_save_image_path
        mock_get_save_path.return_value = (
            self.mock_output_dir, "TestFile", 1, "", "Test"
        )

        with patch('PIL.Image.Image.save'):
            self.node.save_images(images=images, filename_prefix="Test")

            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute("SELECT filename FROM images")
            row = cursor.fetchone()
            conn.close()

            # Should be TestFile_00001.png NOT TestFile_00001_.png
            self.assertEqual(row[0], "TestFile_00001.png")

    def test_filename_prefix_date_resolution(self):
        """Verify that %date:format% and %date% tokens are correctly resolved"""
        images = torch.zeros((1, 64, 64, 3))
        mock_get_save_path = py.image_manager.nodes.folder_paths.get_save_image_path
        mock_get_save_path.return_value = (self.mock_output_dir, "resolved", 1, "", "resolved")

        from datetime import datetime
        expected_date = datetime.now().strftime("%Y-%m-%d")

        # Test %date%
        self.node.save_images(images=images, filename_prefix="test_%date%")
        mock_get_save_path.assert_called_with(f"test_{expected_date}", ANY, ANY, ANY)

        # Test %date:yyyy-MM-dd%
        mock_get_save_path.reset_mock()
        self.node.save_images(images=images, filename_prefix="test_%date:yyyy-MM-dd%")
        mock_get_save_path.assert_called_with(f"test_{expected_date}", ANY, ANY, ANY)

if __name__ == '__main__':
    unittest.main()
