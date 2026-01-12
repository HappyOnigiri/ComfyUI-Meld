import fnmatch
import os
import random
import re


class MeldPromptConstructor:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "directory": ("STRING", {"default": "./my_prompts", "multiline": False}),
                "file_pattern": ("STRING", {"default": "*.txt", "multiline": False}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
                "selection_method": (["random", "sequential"], {"default": "random"}),
                "use_break": ("BOOLEAN", {"default": True, "label_on": "Enable BREAK", "label_off": "Disable BREAK"}),
            },
        }

    RETURN_TYPES = ("STRING", "STRING")
    RETURN_NAMES = ("positive_prompt", "negative_prompt")
    FUNCTION = "process"
    CATEGORY = "MeldFlow/Text"

    # --- Node Description ---
    DESCRIPTION = "Randomly or sequentially loads prompts from text files in a specified directory.\nFeatures:\n- Comment removal (//, #, /* */)\n- Dynamic syntax {A|B} and weighting {0.1::rare|common}\n- Tags starting with a hyphen (-) are automatically assigned to negative prompts\n- Recursive file search"
    # ---------------------------

    def process(self, directory, seed, selection_method, use_break, file_pattern):
        random.seed(seed)

        # 1. Collect files
        files = self._get_files_recursive(directory, file_pattern)

        if not files:
            return ("", "")

        raw_positive_parts = []

        # 2. Select one line from each file
        for filepath in files:
            valid_lines = self._read_and_clean_file(filepath)

            if not valid_lines:
                continue

            if selection_method == "sequential":
                idx = seed % len(valid_lines)
                line = valid_lines[idx]
            else:
                line = random.choice(valid_lines)

            # 3. Resolve dynamic syntax
            processed_line = self._process_dynamic_syntax(line)
            raw_positive_parts.append(processed_line)

        # 4. Join
        separator = " BREAK " if use_break else ", "
        combined_prompt = separator.join(raw_positive_parts)

        # 5. Separate negatives by hyphen (-) notation
        final_positive, final_negative = self._extract_negatives_by_hyphen(combined_prompt)

        # 6. Final sanitize
        final_positive = self._sanitize_output(final_positive)
        final_negative = self._sanitize_output(final_negative)

        return (final_positive, final_negative)

    # --- Helper Methods ---

    def _split_by_comma(self, text):
        """Split by comma while considering parentheses ()"""
        segments: list[str] = []
        current: list[str] = []
        depth = 0
        for char in text:
            if char == "," and depth == 0:
                segments.append("".join(current).strip())
                current = []
            else:
                if char == "(":
                    depth += 1
                elif char == ")":
                    depth -= 1
                current.append(char)
        if current:
            segments.append("".join(current).strip())
        return segments

    def _get_files_recursive(self, directory, pattern):
        matches: list[str] = []
        if not os.path.exists(directory):
            return matches

        for root, dirnames, filenames in os.walk(directory):
            for filename in fnmatch.filter(filenames, pattern):
                if filename.startswith("_"):
                    continue
                matches.append(os.path.join(root, filename))

        return sorted(matches)

    def _read_and_clean_file(self, filepath):
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            content = re.sub(r"/\*.*?\*/", "", content, flags=re.DOTALL)

            valid_lines = []
            for line in content.splitlines():
                line = re.sub(r"(//|#).*$", "", line)
                clean_line = line.strip()
                if clean_line:
                    valid_lines.append(clean_line)
            return valid_lines

        except Exception:
            return []

    def _process_dynamic_syntax(self, text):
        while "{" in text and "}" in text:
            text = re.sub(r"\{([^{}]+)\}", self._replace_random_choice, text)
        return text

    def _replace_random_choice(self, match):
        content = match.group(1)
        options = content.split("|")

        choices = []
        weights = []

        for opt in options:
            opt = opt.strip()
            if "::" in opt:
                try:
                    w_str, val = opt.split("::", 1)
                    w = float(w_str)
                    choices.append(val.strip())
                    weights.append(w)
                except ValueError:
                    choices.append(opt)
                    weights.append(1.0)
            else:
                choices.append(opt)
                weights.append(1.0)

        if not choices:
            return ""

        return random.choices(choices, weights=weights, k=1)[0]

    def _extract_negatives_by_hyphen(self, prompt_text):
        """
        Modified version: Moves elements starting with '-' or immediately following '('
        to the negative prompt from comma-separated elements.
        Also supports group specification in the format -(tag1, tag2).
        """
        segments = self._split_by_comma(prompt_text)
        pos_list = []
        neg_list = []

        # For single negative detection: ^(\(*)-(.+)
        # For group negative detection: ^(\(*)-\((.*)\)(\)*)$
        group_pattern = re.compile(r"^(\(*)-\((.*)\)(\)*)$")
        single_pattern = re.compile(r"^(\(*)-(.+)")

        for segment in segments:
            clean_seg = segment.strip()
            if not clean_seg:
                continue

            # 1. Detect group specification -(...)
            group_match = group_pattern.match(clean_seg)
            if group_match:
                prefix = group_match.group(1)
                content = group_match.group(2)
                suffix = group_match.group(3)

                # Split content further and move all to negative
                sub_segments = self._split_by_comma(content)
                for sub_seg in sub_segments:
                    # Prevent double negative: remove leading hyphen
                    clean_sub = sub_seg.lstrip("-").strip()
                    if clean_sub:
                        neg_list.append(prefix + clean_sub + suffix)
                continue

            # 2. Normal single negative detection
            single_match = single_pattern.match(clean_seg)
            if single_match:
                # Detected as a negative element
                # group(1): left parenthesis part (e.g., "(" or "" or "((")
                # group(2): body after the hyphen (e.g., "boy:1.5)")
                # Combine these to form the version with the hyphen removed
                neg_content = single_match.group(1) + single_match.group(2)
                neg_list.append(neg_content)
            else:
                pos_list.append(clean_seg)

        final_pos = ", ".join(pos_list)
        final_neg = ", ".join(neg_list)
        return final_pos, final_neg

    def _sanitize_output(self, text):
        if not text:
            return ""
        text = re.sub(r"\s+", " ", text)
        text = re.sub(r"\s*,\s*", ",", text)
        text = re.sub(r",+", ",", text)
        text = text.replace(",", ", ")
        text = text.strip(" ,")
        return text
