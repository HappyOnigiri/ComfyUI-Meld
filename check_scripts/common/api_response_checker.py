import ast
import glob
import os

from .abstract_check import ASTChecker


class ApiResponseChecker(ASTChecker):
    def get_target_files(self) -> list[str]:
        # Target all router.py files in features
        pattern = os.path.join("meld", "image_manager", "features", "**", "router.py")
        files = glob.glob(pattern, recursive=True)
        # Also include the main api.py
        api_py = os.path.join("meld", "image_manager", "api.py")
        if os.path.exists(api_py):
            files.append(api_py)
        return files

    def _get_name(self, node: ast.AST) -> str | None:
        if isinstance(node, ast.Name):
            return node.id
        elif isinstance(node, ast.Attribute):
            base = self._get_name(node.value)
            if base:
                return f"{base}.{node.attr}"
        return None

    def visit_Call(self, node: ast.Call) -> None:
        func_name = self._get_name(node.func)

        if func_name == "web.json_response" or func_name == "json_response":
            if not node.args:
                self.add_error(node.lineno, "web.json_response() called without arguments")
                return

            arg0 = node.args[0]

            # We want to see ApiResponse(...).to_dict()
            # This is a Call to .to_dict() where the receiver is a Call to ApiResponse(...)
            is_valid = False
            if isinstance(arg0, ast.Call):
                # Check if it's .to_dict()
                if isinstance(arg0.func, ast.Attribute) and arg0.func.attr == "to_dict":
                    # Check if the receiver is ApiResponse(...)
                    receiver = arg0.func.value
                    if isinstance(receiver, ast.Call):
                        receiver_func = self._get_name(receiver.func)
                        if receiver_func == "ApiResponse":
                            is_valid = True

            if not is_valid:
                self.add_error(
                    node.lineno,
                    "web.json_response must be called with ApiResponse(...).to_dict(). Found: " + ast.dump(arg0),
                )

        self.generic_visit(node)
