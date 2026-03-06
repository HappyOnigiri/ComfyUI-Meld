import ast
from abc import ABC, abstractmethod


class ASTChecker(ast.NodeVisitor, ABC):
    """Base class for AST-based checks."""

    def __init__(self, file_path: str) -> None:
        self.file_path = file_path
        self.errors: list[str] = []

    def add_error(self, line_no: int, message: str) -> None:
        self.errors.append(f"{self.file_path}:{line_no}: {message}")

    @abstractmethod
    def get_target_files(self) -> list[str]:
        """Return a list of files or directories to check."""
        pass

    def check(self, tree: ast.AST) -> None:
        """Run the check on the given AST tree."""
        self.visit(tree)
