import os
import re
import sys

CONFLICT_RULES = {
    "overflow": {"overflow-x", "overflow-y"},
    "margin": {"margin-top", "margin-right", "margin-bottom", "margin-left"},
    "padding": {"padding-top", "padding-right", "padding-bottom", "padding-left"},
    "border": {
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-width",
        "border-style",
        "border-color",
    },
    "background": {"background-color", "background-image", "background-position", "background-size"},
    "flex": {"flex-grow", "flex-shrink", "flex-basis"},
}


def parse_css_blocks(content: str) -> list[tuple[str, str, int]]:
    stack = []
    blocks = []
    in_comment = False
    in_string = False
    str_char = ""
    i = 0
    n = len(content)

    while i < n:
        if in_comment:
            if content[i : i + 2] == "*/":
                in_comment = False
                i += 2
            else:
                i += 1
            continue

        if not in_string and content[i : i + 2] == "/*":
            in_comment = True
            i += 2
            continue

        char = content[i]
        if in_string:
            if char == "\\":
                i += 2
                continue
            if char == str_char:
                in_string = False
        elif char in ('"', "'"):
            in_string = True
            str_char = char
        elif char == "{":
            stack.append(i)
        elif char == "}":
            if stack:
                start = stack.pop()
                prev = start - 1
                while prev >= 0 and content[prev] not in "{}":
                    prev -= 1
                selector = content[prev + 1 : start].strip()
                block_content = content[start + 1 : i]
                blocks.append((selector, block_content, start))
        i += 1

    return blocks


def check_file(filepath: str) -> list:
    errors = []
    try:
        with open(filepath, encoding="utf-8") as f:
            original_content = f.read()

        # Iterate through all matches in the original content to get accurate line numbers and check for ignore comments
        for selector_raw, block_content_raw, start_pos in parse_css_blocks(original_content):
            # Get line number from original content
            line_num = original_content.count("\n", 0, start_pos) + 1

            if (
                "/* property-conflict-ignore */" in block_content_raw
                or "/* property-conflict-ignore */" in selector_raw
            ):
                continue

            # Clear comments to isolate property names correctly
            clean_block_content = re.sub(r"/\*.*?\*/", "", block_content_raw, flags=re.DOTALL)

            properties = set()
            declarations = clean_block_content.split(";")
            for decl in declarations:
                parts = decl.split(":", 1)
                if len(parts) == 2:
                    prop_name = parts[0].strip()
                    if prop_name:
                        properties.add(prop_name)

            for shorthand, longhands in CONFLICT_RULES.items():
                if shorthand in properties:
                    conflicting = properties.intersection(longhands)
                    if conflicting:
                        errors.append(
                            {
                                "line": line_num,
                                "selector": selector_raw.strip().split("}")[-1].strip(),
                                "shorthand": shorthand,
                                "longhands": sorted(list(conflicting)),
                            }
                        )
    except OSError as e:
        print(f"Error reading {filepath}: {e}")
        sys.exit(1)

    return errors


def main() -> None:
    target_dir = os.path.join("ui", "src")
    base_dir = os.getcwd()
    search_path = os.path.join(base_dir, target_dir)

    if not os.path.exists(search_path):
        if os.path.basename(base_dir) == "ui":
            search_path = os.path.join(base_dir, "src")
            if not os.path.exists(search_path):
                print(f"Directory not found: {search_path}")
                sys.exit(1)
        else:
            print(f"Directory not found: {search_path}")
            sys.exit(1)

    print(f"Checking for CSS property conflicts in {target_dir}...")

    has_errors = False
    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith(".css"):
                filepath = os.path.join(root, file)
                errors = check_file(filepath)
                if errors:
                    has_errors = True
                    rel_path = os.path.relpath(filepath, base_dir)
                    print(f"\n[!] CSS property conflict found in {rel_path}:")
                    # Sort errors by line number
                    errors.sort(key=lambda x: x["line"])
                    for err in errors:
                        longhands_str = ", ".join(err["longhands"])
                        # If selector is empty (e.g., just spaces/newlines), it might be formatting.
                        # Use a fallback name.
                        sel_disp = err["selector"] if err["selector"] else "<unknown-selector>"
                        # Trim extremely long selectors if needed
                        if len(sel_disp) > 100:
                            sel_disp = sel_disp[:97] + "..."
                        print(f"  Line {err['line']}: {sel_disp} {{ ... }}")
                        print(
                            f"    -> Conflict: shorthand '{err['shorthand']}' used alongside longhand(s) '{longhands_str}'."
                        )

    if has_errors:
        print("\nError: Conflicting CSS properties detected!")
        print("Please resolve these conflicts or add /* property-conflict-ignore */ in the block.")
        sys.exit(1)
    else:
        print("CSS property conflicts check passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
