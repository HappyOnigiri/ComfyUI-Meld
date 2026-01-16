#!/usr/bin/env python3
import ast
import os
import sys

# Target file to check: py/image_manager/api.py
TARGET_FILE = os.path.join(os.path.dirname(__file__), "..", "py/image_manager/api.py")


class DataclassUsageChecker(ast.NodeVisitor):
    def __init__(self, filename: str) -> None:
        self.filename = filename
        self.errors: list[tuple[int, str]] = []

    def _get_name(self, node: ast.AST) -> str | None:
        """Helper to get the full name of an attribute or name node."""
        if isinstance(node, ast.Name):
            return node.id
        elif isinstance(node, ast.Attribute):
            base = self._get_name(node.value)
            if base:
                return f"{base}.{node.attr}"
        return None

    def visit_Call(self, node: ast.Call) -> None:
        # Detect .get("...")
        if isinstance(node.func, ast.Attribute) and node.func.attr == "get" and len(node.args) >= 1:
            # Filter out known false positives
            receiver = self._get_name(node.func.value)

            # 1. routes.get(...) used for ComfyUI routing
            if receiver and "routes" in receiver.split("."):
                self.generic_visit(node)
                return

            # 2. os.environ.get(...) or environ.get(...)
            if receiver in ("os.environ", "environ"):
                self.generic_visit(node)
                return

            # 3. request.query.get(...), request.app.get(...), etc. - Standard aiohttp access
            if receiver and receiver.startswith("request."):
                self.generic_visit(node)
                return

            # 4. db_settings.get(...) - Global settings dict
            if receiver == "db_settings":
                self.generic_visit(node)
                return

            arg0 = node.args[0]
            # Handle ast.Constant (Py 3.8+)
            value = None
            if isinstance(arg0, ast.Constant) and isinstance(arg0.value, str):
                value = arg0.value

            if value is not None:
                self.errors.append((node.lineno, f"Forbidden .get() with string literal: {value!r}"))

        self.generic_visit(node)

    def visit_Subscript(self, node: ast.Subscript) -> None:
        # Detect ["..."]

        # Filter out known false positives
        receiver = self._get_name(node.value)

        # 1. request.match_info[...], request.query[...], request.app[...] - Standard aiohttp access
        if receiver and receiver.startswith("request."):
            self.generic_visit(node)
            return

        index_node = node.slice

        # Handle Python versions < 3.9 where node.slice is ast.Index(value=...)
        # Use string-based type check to avoid deprecation warnings for ast.Index
        if type(index_node).__name__ == "Index":
            index_node = index_node.value

        value = None
        if isinstance(index_node, ast.Constant) and isinstance(index_node.value, str):
            value = index_node.value

        if value is not None:
            self.errors.append((node.lineno, f"Forbidden subscript access with string literal: {value!r}"))

        self.generic_visit(node)


def main() -> int:
    # Ensure we use absolute path or relative to workspace root
    abs_target = os.path.abspath(TARGET_FILE)
    if not os.path.exists(abs_target):
        # Fallback for different execution contexts
        abs_target = os.path.abspath("py/image_manager/api.py")
        if not os.path.exists(abs_target):
            print(f"Target file {TARGET_FILE} not found.")
            return 0

    with open(abs_target, encoding="utf-8") as f:
        try:
            tree = ast.parse(f.read())
        except SyntaxError as e:
            print(f"Syntax error in {abs_target}: {e}")
            return 1

    checker = DataclassUsageChecker(abs_target)
    checker.visit(tree)

    if checker.errors:
        print(f"Error: Found dict-style access in {os.path.relpath(abs_target)}:")
        # Sort by line number
        for lineno, msg in sorted(checker.errors):
            print(f"  Line {lineno}: {msg}")
        print(f"\nFound {len(checker.errors)} violations. Please use Dataclass attributes instead of dict keys.")
        return 1

    print(f"No dict-style access found in {os.path.relpath(abs_target)}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
