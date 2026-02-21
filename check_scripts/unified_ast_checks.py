#!/usr/bin/env python3
import ast
import os
import sys

# Add the current directory to sys.path so we can import from .common
sys.path.append(os.path.dirname(__file__))

from common.abstract_check import ASTChecker
from common.api_response_checker import ApiResponseChecker
from common.api_usage_check import ApiUsageChecker
from common.dependency_check import DependencyChecker
from common.sqlite_type_checker import SqliteCursorTypeChecker


def run_ast_checks() -> None:
    checkers_classes: list[type[ASTChecker]] = [
        DependencyChecker,
        ApiUsageChecker,
        ApiResponseChecker,
        SqliteCursorTypeChecker,
    ]

    # Collect all files that need to be checked and which checkers apply to them
    file_to_checkers: dict[str, list[ASTChecker]] = {}

    for checker_class in checkers_classes:
        # We need an instance to call get_target_files, but we'll create real instances per file
        temp_instance = checker_class("")
        targets = temp_instance.get_target_files()
        for target in targets:
            abs_path = os.path.abspath(target)
            if abs_path not in file_to_checkers:
                file_to_checkers[abs_path] = []
            file_to_checkers[abs_path].append(checker_class(target))

    total_errors = []
    files_processed = 0

    for file_path, checkers in sorted(file_to_checkers.items()):
        if not os.path.exists(file_path):
            continue

        try:
            with open(file_path, encoding="utf-8") as f:
                content = f.read()
                tree = ast.parse(content, filename=file_path)
                files_processed += 1

                for checker in checkers:
                    checker.check(tree)
                    total_errors.extend(checker.errors)
        except SyntaxError as e:
            total_errors.append(f"{file_path}:{e.lineno}: Syntax error: {e.msg}")
        except Exception as e:
            total_errors.append(f"{file_path}:0: Unexpected error: {e}")

    if total_errors:
        print(f"AST Checks Failed ({files_processed} files checked):")
        for error in total_errors:
            print(f"  {error}")
        sys.exit(1)
    else:
        print(f"AST Checks Passed: All {files_processed} files cleared.")
        sys.exit(0)


if __name__ == "__main__":
    run_ast_checks()
