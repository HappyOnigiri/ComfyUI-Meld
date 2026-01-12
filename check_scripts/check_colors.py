import os
import re
import sys

# Regex for hex colors, rgb/rgba, hsl/hsla
COLOR_PATTERNS = [
    r"#(?:[0-9a-fA-F]{3,4}){1,2}\b",
    r"\brgba?\([^)]+\)",
    r"\bhsla?\([^)]+\)",
]

# Regex for opacity usage (e.g., opacity: 0.5, style={{ opacity: 0.6 }})
# We want to catch values that are NOT exactly 0 or 1
OPACITY_PATTERN = r"\bopacity\s*[:=]\s*(?:0\.[0-9]+|[1-9]\.[0-9]+)\b"

# Combine patterns
COLOR_REGEX = re.compile("|".join(COLOR_PATTERNS))
OPACITY_REGEX = re.compile(OPACITY_PATTERN)


def is_within_var(line: str, match_start: int) -> bool:
    # Search backwards for 'var(' without finding a closing ')'
    prefix = line[:match_start]
    last_var = prefix.rfind("var(")
    if last_var == -1:
        return False

    # Check if there's a closing parenthesis between last_var and match_start
    if ")" in prefix[last_var:]:
        return False
    return True


def check_file(filepath: str) -> list:
    errors = []
    try:
        with open(filepath, encoding="utf-8") as f:
            for i, line in enumerate(f, 1):
                # Check for ignore comment
                if "color-check-ignore" in line:
                    continue

                # Remove inline comments for checking
                code_part = re.sub(r"/\*.*?\*/", "", line)
                code_part = re.sub(r"//.*", "", code_part).strip()

                if not code_part:
                    continue

                # Check for hardcoded colors
                color_matches = list(COLOR_REGEX.finditer(code_part))
                for match in color_matches:
                    color = match.group()
                    if not is_within_var(code_part, match.start()):
                        errors.append((i, line.strip(), f"Hardcoded color: {color}"))

                # Check for opacity usage
                opacity_matches = list(OPACITY_REGEX.finditer(code_part))
                for match in opacity_matches:
                    usage = match.group()
                    # We flag all direct opacity usage as it affects visibility in light themes
                    errors.append(
                        (
                            i,
                            line.strip(),
                            f"Transparency usage: {usage} (Use secondary text variables instead)",
                        )
                    )
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return errors


def main() -> None:
    # Only check ui/src directory as requested
    target_dir = os.path.join("ui", "src")
    has_errors = False

    # Files to check
    extensions = (".css", ".ts", ".tsx")

    # Files/Dirs to ignore
    ignore_files = {"types.d.ts"}

    # Get the base directory (workspace root)
    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        print(f"Directory not found: {search_path}")
        return

    print(f"Checking for hardcoded colors and transparency in {target_dir}...")

    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith(extensions) and file not in ignore_files:
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(filepath, base_dir)
                errors = check_file(filepath)
                if errors:
                    has_errors = True
                    print(f"\n[!] Theme compatibility issue found in {rel_path}:")
                    for line_num, line_content, reason in errors:
                        print(f"  Line {line_num}: {line_content}")
                        print(f"    -> {reason}")

    if has_errors:
        print("\nError: Theme compatibility issues detected!")
        print("1. Please use ComfyUI theme variables (e.g., var(--comfy-menu-bg)) instead of hardcoded colors.")
        print(
            "2. Avoid using 'opacity'. Use secondary text variables (e.g., --meld-text-secondary) for better visibility across themes."
        )
        print("For instructions and available variables, please refer to: ui/sample-color.txt")
        sys.exit(1)
    else:
        print("Compatibility check passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
