import os
import random
import shutil
import tempfile
import unittest

from py.prompt_constructor import MeldPromptConstructor


class TestPromptConstructor(unittest.TestCase):
    def setUp(self):
        self.node = MeldPromptConstructor()

    # --- Unit Tests for Helper Methods ---

    def test_split_by_comma(self):
        # Normal splitting
        self.assertEqual(self.node._split_by_comma("a, b, c"), ["a", "b", "c"])
        # With parentheses
        self.assertEqual(self.node._split_by_comma("a, (b, c), d"), ["a", "(b, c)", "d"])
        # Nested parentheses
        self.assertEqual(self.node._split_by_comma("(a, (b, c)), d"), ["(a, (b, c))", "d"])
        # Empty string
        self.assertEqual(self.node._split_by_comma(""), [])

    def test_process_dynamic_syntax(self):
        # Basic choice
        random.seed(42)
        # {A|B} with seed 42
        # We need to make sure the seed is applied within the method if it uses random
        # In the actual code, random.seed(seed) is called in process(),
        # but _process_dynamic_syntax uses random.choices which is affected by the global state.

        # Test weighted choice
        text = "{1.0::A|0.0::B}"
        self.assertEqual(self.node._process_dynamic_syntax(text), "A")

        text = "{0.0::A|1.0::B}"
        self.assertEqual(self.node._process_dynamic_syntax(text), "B")

        # Test nested syntax
        # The implementation uses a while loop with regex to handle nesting from inside out
        text = "{A|{B|B}}"
        result = self.node._process_dynamic_syntax(text)
        self.assertIn(result, ["A", "B"])

    def test_extract_negatives_by_hyphen(self):
        # Single negative
        pos, neg = self.node._extract_negatives_by_hyphen("sky, -cloud")
        self.assertEqual(pos, "sky")
        self.assertEqual(neg, "cloud")

        # Group negative
        pos, neg = self.node._extract_negatives_by_hyphen("pos1, -(neg1, neg2), pos2")
        self.assertEqual(pos, "pos1, pos2")
        self.assertEqual(neg, "neg1, neg2")

        # Group negative with weights/parentheses
        pos, neg = self.node._extract_negatives_by_hyphen("-( (neg1:1.2), neg2 )")
        self.assertEqual(pos, "")
        self.assertEqual(neg, "(neg1:1.2), neg2")

        # Double negation (should stay negative, not flip to positive)
        # Case 1: inside group -(a, -b) -> neg: a, b
        pos, neg = self.node._extract_negatives_by_hyphen("-(a, -b)")
        self.assertEqual(pos, "")
        self.assertEqual(neg, "a, b")

        # Case 2: single element --a -> neg: -a (remains in negative list)
        pos, neg = self.node._extract_negatives_by_hyphen("--a")
        self.assertEqual(pos, "")
        self.assertEqual(neg, "-a")

        # Mixed
        pos, neg = self.node._extract_negatives_by_hyphen("sky, -cloud, tree, -(water, fire)")
        self.assertEqual(pos, "sky, tree")
        self.assertEqual(neg, "cloud, water, fire")

    def test_sanitize_output(self):
        self.assertEqual(self.node._sanitize_output("  tag1 ,  tag2  ,, tag3  "), "tag1, tag2, tag3")
        self.assertEqual(self.node._sanitize_output("tag1   tag2"), "tag1 tag2")
        self.assertEqual(self.node._sanitize_output(", tag1,"), "tag1")
        self.assertEqual(self.node._sanitize_output(""), "")

    # --- Tests for File Cleaning ---

    def test_read_and_clean_file(self):
        with tempfile.NamedTemporaryFile(mode='w', delete=False, encoding='utf-8') as f:
            f.write("// line comment\n")
            f.write("line1 # hash comment\n")
            f.write("/* block\n")
            f.write("comment */\n")
            f.write("  line2  \n")
            f.write("\n")
            f.write("line3\n")
            temp_path = f.name

        try:
            lines = self.node._read_and_clean_file(temp_path)
            self.assertEqual(lines, ["line1", "line2", "line3"])
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)

    # --- Integration Tests for process() ---

    def test_process_integration(self):
        # Create a temporary directory structure
        test_dir = tempfile.mkdtemp()
        try:
            # File 1 in root
            with open(os.path.join(test_dir, "file1.txt"), "w", encoding="utf-8") as f:
                f.write("prompt1_1\n")
                f.write("prompt1_2\n")

            # File 2 in subfolder
            sub_dir = os.path.join(test_dir, "sub")
            os.makedirs(sub_dir)
            with open(os.path.join(sub_dir, "file2.txt"), "w", encoding="utf-8") as f:
                f.write("prompt2_1, -neg1\n")

            # 1. Sequential selection
            # seed=0 -> file1.txt(line1), file2.txt(line1)
            # file1.txt line 1: prompt1_1
            # file2.txt line 1: prompt2_1 -neg1
            # result: "prompt1_1 BREAK prompt2_1", "neg1" (if use_break=True)
            pos, neg = self.node.process(
                test_dir, seed=0, selection_method="sequential",
                use_break=True, file_pattern="*.txt"
            )
            self.assertEqual(pos, "prompt1_1 BREAK prompt2_1")
            self.assertEqual(neg, "neg1")

            # 2. Sequential selection with different seed
            # seed=1 -> file1.txt(line2), file2.txt(line1)
            # file1.txt line 2: prompt1_2
            # file2.txt line 1: prompt2_1 -neg1
            pos, neg = self.node.process(
                test_dir, seed=1, selection_method="sequential",
                use_break=True, file_pattern="*.txt"
            )
            self.assertEqual(pos, "prompt1_2 BREAK prompt2_1")
            self.assertEqual(neg, "neg1")

            # 3. Disable BREAK
            pos, neg = self.node.process(
                test_dir, seed=0, selection_method="sequential",
                use_break=False, file_pattern="*.txt"
            )
            self.assertEqual(pos, "prompt1_1, prompt2_1")

            # 4. File pattern filtering
            pos, neg = self.node.process(
                test_dir, seed=0, selection_method="sequential",
                use_break=True, file_pattern="none.txt"
            )
            self.assertEqual(pos, "")
            self.assertEqual(neg, "")

            # 5. Double negation in file
            with open(os.path.join(test_dir, "file3.txt"), "w", encoding="utf-8") as f:
                f.write("-(a, -b), --c\n")

            # We need to make sure file3.txt is the only one or we know the order
            # _get_files_recursive returns sorted matches.
            # Files: file1.txt, sub/file2.txt, file3.txt
            # Sorted: file1.txt, file3.txt, sub/file2.txt (depending on OS, but usually file1, file3, sub/file2)
            # Actually os.walk order + sort.

            pos, neg = self.node.process(
                test_dir, seed=0, selection_method="sequential",
                use_break=False, file_pattern="file3.txt"
            )
            # input: "-(a, -b), --c"
            # _extract_negatives_by_hyphen -> neg: a, b, -c
            # sanitize -> "a, b, -c"
            self.assertEqual(pos, "")
            self.assertEqual(neg, "a, b, -c")

        finally:
            shutil.rmtree(test_dir)

if __name__ == '__main__':
    unittest.main()
