import ast
import os

from .abstract_check import ASTChecker  # pyre-ignore[21]

# Detect patterns where SQLite cursor.fetchall() / fetchone() results are used directly
# as dictionary keys or loop variables without type conversion.
#
# Patterns targeted for detection:
#   cursor.execute("SELECT id, ...")
#   for img_id, ... in cursor.fetchall():
#       some_dict[img_id] = ...   <- img_id is not converted with int() etc.
#
# Corrected patterns (OK):
#   for row_id, ... in cursor.fetchall():
#       iid: int = int(row_id)
#       some_dict[iid] = ...


class SqliteCursorTypeChecker(ASTChecker):
    """Detects patterns where SQLite cursor results are used as dict keys without type conversion."""

    def get_target_files(self) -> list[str]:
        targets = []
        for root, _, files in os.walk("meld"):
            if any(x in root for x in ["node_modules", ".git", "__pycache__"]):
                continue
            for file in files:
                if file.endswith(".py"):
                    targets.append(os.path.join(root, file))
        return targets

    def visit_For(self, node: ast.For) -> None:
        """Check if cursor.fetchall() is used in a for loop."""
        # Search for for-loops calling cursor.fetchall() or cursor.fetchmany()
        if not isinstance(node.iter, ast.Call):
            self.generic_visit(node)
            return

        call = node.iter
        if not isinstance(call.func, ast.Attribute):
            self.generic_visit(node)
            return

        method_name = call.func.attr
        if method_name not in ("fetchall", "fetchmany"):
            self.generic_visit(node)
            return

        # Get loop variables
        loop_vars: list[str] = []
        if isinstance(node.target, ast.Tuple):
            for elt in node.target.elts:
                if isinstance(elt, ast.Name):
                    loop_vars.append(elt.id)
        elif isinstance(node.target, ast.Name):
            loop_vars.append(node.target.id)

        if not loop_vars:
            self.generic_visit(node)
            return

        # Check variables used as dictionary subscripts in the loop body
        dict_subscript_vars = self._collect_dict_subscript_vars(node.body)

        # Check if loop variables are used as dict subscripts without being converted
        # Check if they are converted using int() etc.
        int_cast_vars = self._collect_int_cast_vars(node.body)

        for var in loop_vars:
            if var in dict_subscript_vars and var not in int_cast_vars:
                self.add_error(
                    node.lineno,
                    f"Loop variable '{var}' from SQLite cursor result is used as a "
                    f"dict key without type conversion. "
                    f"Please cast explicitly with int({var}) etc.",
                )

        self.generic_visit(node)

    def _collect_dict_subscript_vars(self, stmts: list[ast.stmt]) -> set[str]:
        """Collect variable names used as dictionary subscripts from a list of statements."""
        vars_used: set[str] = set()
        for stmt in stmts:
            for node in ast.walk(stmt):
                if isinstance(node, ast.Subscript):
                    if isinstance(node.slice, ast.Name):
                        vars_used.add(node.slice.id)
        return vars_used

    def _collect_int_cast_vars(self, stmts: list[ast.stmt]) -> set[str]:
        """Return a set of source variables that are cast using int() etc. and assigned to another variable.

        Example: iid: int = int(row_id) -> row_id is recorded as cast
        Example: iid = int(row_id) -> row_id is recorded as cast
        """
        cast_sources: set[str] = set()
        for stmt in stmts:
            for node in ast.walk(stmt):
                # Assignment: x = int(y) pattern
                if isinstance(node, ast.Assign):
                    if isinstance(node.value, ast.Call):
                        cast_sources.update(self._extract_int_call_args(node.value))
                # Annotated assignment: x: int = int(y) pattern
                elif isinstance(node, ast.AnnAssign) and node.value is not None:
                    if isinstance(node.value, ast.Call):
                        cast_sources.update(self._extract_int_call_args(node.value))
        return cast_sources

    def _extract_int_call_args(self, call_node: ast.Call) -> set[str]:
        """Return variable names from an int(var) call."""
        result: set[str] = set()
        if not isinstance(call_node.func, ast.Name):
            return result
        if call_node.func.id != "int":
            return result
        for arg in call_node.args:
            if isinstance(arg, ast.Name):
                result.add(arg.id)
        return result
