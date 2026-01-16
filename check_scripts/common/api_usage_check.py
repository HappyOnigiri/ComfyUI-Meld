import ast
import os

from .abstract_check import ASTChecker


class ApiUsageChecker(ASTChecker):
    def get_target_files(self) -> list[str]:
        # Target specific file: py/image_manager/api.py
        target = os.path.join("py", "image_manager", "api.py")
        if os.path.exists(target):
            return [target]
        return []

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
            receiver = self._get_name(node.func.value)

            # Filter out known false positives
            if receiver:
                parts = receiver.split(".")
                if "routes" in parts:
                    return
                if receiver in ("os.environ", "environ"):
                    return
                if receiver.startswith("request."):
                    return
                if receiver == "db_settings":
                    return

            arg0 = node.args[0]
            value = None
            if isinstance(arg0, ast.Constant) and isinstance(arg0.value, str):
                value = arg0.value

            if value is not None:
                self.add_error(node.lineno, f"Forbidden .get() with string literal: {value!r}")

        self.generic_visit(node)

    def visit_Subscript(self, node: ast.Subscript) -> None:
        # Detect ["..."]
        receiver = self._get_name(node.value)

        # Filter out known false positives
        if receiver and receiver.startswith("request."):
            return

        index_node = node.slice
        # Handle Python versions < 3.9
        if type(index_node).__name__ == "Index":
            index_node = index_node.value

        value = None
        if isinstance(index_node, ast.Constant) and isinstance(index_node.value, str):
            value = index_node.value

        if value is not None:
            self.add_error(node.lineno, f"Forbidden subscript access with string literal: {value!r}")

        self.generic_visit(node)
