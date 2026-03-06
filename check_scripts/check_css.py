import os
import re
import sys

# Regex to find CSS rule blocks: selector { contents }
# This handles nested structures if any (though standard CSS doesn't have much)
# and multiple lines.
CSS_BLOCK_REGEX = re.compile(r"([^{}\n]+)\s*\{([^}]*)\}", re.MULTILINE | re.DOTALL)


def check_file(filepath: str) -> list[tuple[int, str, str]]:
    errors = []
    try:
        with open(filepath, encoding="utf-8") as f:
            content = f.read()

            # Find all blocks
            for match in CSS_BLOCK_REGEX.finditer(content):
                selector = match.group(1).strip()
                block_content = match.group(2)

                # Remove comments (/* ... */)
                clean_content = re.sub(r"/\*.*?\*/", "", block_content, flags=re.DOTALL)
                # Remove whitespace
                clean_content = clean_content.strip()

                if not clean_content:
                    # Find line number of the selector
                    start_pos = match.start()
                    line_num = content.count("\n", 0, start_pos) + 1
                    errors.append(
                        (line_num, selector, "Empty ruleset (contains no properties, only comments or whitespace)")
                    )

    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return errors


def main() -> None:
    # Only check ui/src directory
    target_dir = os.path.join("ui", "src")
    has_errors = False

    # Files to check
    extensions = (".css",)

    # Get the base directory (workspace root)
    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        # If running from ui directory, adjust path
        if os.path.basename(base_dir) == "ui":
            search_path = os.path.join(base_dir, "src")
        else:
            print(f"Directory not found: {search_path}")
            return

    print(f"Checking for empty rulesets in {target_dir}...")

    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith(extensions):
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(filepath, base_dir)
                errors = check_file(filepath)
                if errors:
                    has_errors = True
                    print(f"\n[!] CSS issue found in {rel_path}:")
                    for line_num, selector, reason in errors:
                        print(f"  Line {line_num}: {selector} {{ ... }}")
                        print(f"    -> {reason}")

    if has_errors:
        print("\nError: Empty CSS rulesets detected!")
        print("Please remove these rulesets or add properties to them.")
        sys.exit(1)
    else:
        print("CSS check passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
