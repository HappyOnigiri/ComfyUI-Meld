import ast
import os

from .abstract_check import ASTChecker  # pyre-ignore[21]

# SQLiteのcursor.fetchall() / fetchone() 結果を直接dictのキーや
# ループ変数として型変換なしでdictの添字に使っているパターンを検出する。
#
# 検出対象パターン:
#   cursor.execute("SELECT id, ...")
#   for img_id, ... in cursor.fetchall():
#       some_dict[img_id] = ...   ← img_id が int() などで変換されていない
#
# 修正済みパターン（OK）:
#   for row_id, ... in cursor.fetchall():
#       iid: int = int(row_id)
#       some_dict[iid] = ...


class SqliteCursorTypeChecker(ASTChecker):
    """SQLiteカーソル結果を型変換なしでdictキーに使っているパターンを検出する。"""

    def get_target_files(self) -> list[str]:
        targets = []
        for root, _, files in os.walk("py"):
            if any(x in root for x in ["node_modules", ".git", "__pycache__"]):
                continue
            for file in files:
                if file.endswith(".py"):
                    targets.append(os.path.join(root, file))
        return targets

    def visit_For(self, node: ast.For) -> None:
        """forループでcursor.fetchall()を使っているか確認する。"""
        # cursor.fetchall() または cursor.fetchmany() を呼び出しているfor文を探す
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

        # ループ変数を取得する
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

        # ループ本体でdictの添字として使われている変数を確認する
        dict_subscript_vars = self._collect_dict_subscript_vars(node.body)

        # ループ変数がそのままdict添字に使われていないかチェック
        # int()などに変換されてから使われているかをチェックする
        int_cast_vars = self._collect_int_cast_vars(node.body)

        for var in loop_vars:
            if var in dict_subscript_vars and var not in int_cast_vars:
                self.add_error(
                    node.lineno,
                    f"SQLiteカーソル結果のループ変数 '{var}' が型変換なしで"
                    f"dictのキーとして使われています。"
                    f"int({var}) などで明示的にキャストしてください。",
                )

        self.generic_visit(node)

    def _collect_dict_subscript_vars(self, stmts: list[ast.stmt]) -> set[str]:
        """文のリストからdictの添字に使われている変数名を集める。"""
        vars_used: set[str] = set()
        for stmt in stmts:
            for node in ast.walk(stmt):
                if isinstance(node, ast.Subscript):
                    if isinstance(node.slice, ast.Name):
                        vars_used.add(node.slice.id)
        return vars_used

    def _collect_int_cast_vars(self, stmts: list[ast.stmt]) -> set[str]:
        """文のリストでint()などにキャストされた後、別変数に代入されている
        変数のセット（もとの変数名）を返す。

        例: iid: int = int(row_id) → row_id がキャスト済みとして記録される
        例: iid = int(row_id) → row_id がキャスト済みとして記録される
        """
        cast_sources: set[str] = set()
        for stmt in stmts:
            for node in ast.walk(stmt):
                # 代入文: x = int(y) のパターン
                if isinstance(node, ast.Assign):
                    if isinstance(node.value, ast.Call):
                        cast_sources.update(self._extract_int_call_args(node.value))
                # 型注釈付き代入: x: int = int(y) のパターン
                elif isinstance(node, ast.AnnAssign) and node.value is not None:
                    if isinstance(node.value, ast.Call):
                        cast_sources.update(self._extract_int_call_args(node.value))
        return cast_sources

    def _extract_int_call_args(self, call_node: ast.Call) -> set[str]:
        """int(var) 形式の呼び出しから引数の変数名を返す。"""
        result: set[str] = set()
        if not isinstance(call_node.func, ast.Name):
            return result
        if call_node.func.id != "int":
            return result
        for arg in call_node.args:
            if isinstance(arg, ast.Name):
                result.add(arg.id)
        return result
