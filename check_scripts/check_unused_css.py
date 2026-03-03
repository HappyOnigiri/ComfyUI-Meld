import os
import re
import sys


def get_defined_classes(search_path: str) -> dict[str, str]:
    defined: dict[str, list[str]] = {}
    ignored_classes: dict[str, int] = {}

    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith(".css") and not file.endswith(".module.css"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, encoding="utf-8") as f:
                        content = f.read()

                        def comment_replacer(match: re.Match[str]) -> str:
                            if "unused-css-check-ignore" in match.group(0):
                                return " /* unused-css-check-ignore */ "
                            return " " * len(match.group(0))

                        clean_content = re.sub(r"/\*.*?\*/", comment_replacer, content, flags=re.DOTALL)

                        ignore_next = False
                        for match in re.finditer(
                            r"(/[*]\s*unused-css-check-ignore\s*[*]/|\.meld-[a-zA-Z0-9_-]+|[{};])", clean_content
                        ):
                            token = match.group(1)
                            if "unused-css-check-ignore" in token:
                                ignore_next = True
                            elif token in ("{", "}", ";"):
                                ignore_next = False
                            elif token.startswith(".meld-"):
                                class_name = token[1:]
                                if ignore_next:
                                    ignored_classes[class_name] = ignored_classes.get(class_name, 0) + 1
                                    # Do not reset ignore_next so grouped selectors all get ignored
                                defined.setdefault(class_name, []).append(filepath)
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    sys.exit(1)

    final_defined: dict[str, str] = {}
    for c, occurrences in defined.items():
        ignore_count = ignored_classes.get(c, 0)
        unignored = occurrences[ignore_count:]
        if unignored:
            final_defined[c] = unignored[0]

    return final_defined


def get_referenced_classes(search_path: str) -> set[str]:
    references: set[str] = set()
    styles_import_pattern = re.compile(r'import\s+(\w+)\s+from\s+["\'].*\.module\.css["\']')

    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, encoding="utf-8") as f:
                        content = f.read()

                        # 1. Handle CSS Module imports
                        style_vars = [m.group(1) for m in styles_import_pattern.finditer(content)]
                        for style_var in style_vars:
                            style_usage_pattern = re.compile(r"\b" + re.escape(style_var) + r"\.([a-zA-Z0-9_-]+)")
                            for match in style_usage_pattern.finditer(content):
                                references.add(match.group(1))

                        # 2. Extract classes from static strings
                        static_class_pattern = re.compile(r'className\s*=\s*["\']([^"\']+)["\']')
                        for match in static_class_pattern.finditer(content):
                            for cls in match.group(1).split():
                                references.add(cls)

                        # 3. Extract classes from template literals
                        expr_class_pattern = re.compile(r"className\s*=\s*{(.*?)}", re.DOTALL)
                        for match in expr_class_pattern.finditer(content):
                            expr = match.group(1)
                            for str_match in re.finditer(r'(["\'`])(.*?)\1', expr, re.DOTALL):
                                val = str_match.group(2)
                                val_clean = re.sub(r"\$\{[^}]+\}", " ", val)
                                for cls in val_clean.split():
                                    references.add(cls)

                        # 4. Fallback: extract any meld-* word from file
                        for match in re.finditer(r"\b(meld-[a-zA-Z0-9_-]+)\b", content):
                            references.add(match.group(1))

                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    sys.exit(1)
    return references


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

    print(f"Checking for unused CSS classes in {target_dir}...")

    defined_classes = get_defined_classes(search_path)
    referenced_classes = get_referenced_classes(search_path)

    unused = []

    for cls, filepath in defined_classes.items():
        if cls not in referenced_classes:
            unused.append((cls, filepath))

    if unused:
        print("\n[!] Unused CSS classes found:")
        for cls, filepath in sorted(unused, key=lambda x: x[1]):
            rel_path = os.path.relpath(filepath, base_dir)
            print(f"  {rel_path}: .{cls}")

        print("\nError: Unused CSS classes detected!")
        print("Please remove these classes, use them in your files, or add /* unused-css-check-ignore */ before them.")
        sys.exit(1)
    else:
        print("CSS unused classes check passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
