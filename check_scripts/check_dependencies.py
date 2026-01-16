import ast
import os
import sys

# 許可されるパッケージのリスト
ALLOWED_PACKAGES = {
    # Python 標準ライブラリ (主要なもの)
    "ast",
    "os",
    "sys",
    "asyncio",
    "json",
    "logging",
    "shutil",
    "threading",
    "time",
    "typing",
    "dataclasses",
    "hashlib",
    "re",
    "datetime",
    "fnmatch",
    "random",
    "collections",
    "difflib",
    "unittest",
    "tempfile",
    "abc",
    "inspect",
    "pathlib",
    "sqlite3",
    "base64",
    "io",
    "math",
    "copy",
    "itertools",
    "functools",
    "enum",
    "struct",
    "pickle",
    "uuid",
    "warnings",
    "weakref",
    "glob",
    "cgi",
    "contextlib",
    "bisect",
    "heapq",
    "array",
    "queue",
    "concurrent",
    "subprocess",
    "socket",
    "select",
    "signal",
    "errno",
    "traceback",
    "linecache",
    "tokenize",
    "token",
    "keyword",
    "operator",
    "types",
    "mimetypes",
    "urllib",
    "http",
    "ftplib",
    "poplib",
    "imaplib",
    "smtplib",
    "telnetlib",
    "nntplib",
    "xml",
    "html",
    "csv",
    "configparser",
    "netrc",
    "xdrlib",
    "plistlib",
    "hmac",
    "secrets",
    "multiprocessing",
    "platform",
    "resource",
    "syslog",
    "posix",
    "pwd",
    "grp",
    "termios",
    "tty",
    "pty",
    "fcntl",
    "pipes",
    "getpass",
    "curses",
    "dbm",
    "gdbm",
    # ComfyUI 関連
    "folder_paths",
    "server",
    "comfy",
    "nodes",
    "node_helpers",
    "execution",
    "app",
    "api",
    "main",
    "cli_args",
    # ComfyUI 前提パッケージ
    "torch",
    "torchsde",
    "torchvision",
    "torchaudio",
    "numpy",
    "PIL",
    "aiohttp",
    "yarl",
    "yaml",
    "tqdm",
    "requests",
    "psutil",
    "einops",
    "transformers",
    "tokenizers",
    "sentencepiece",
    "safetensors",
    "alembic",
    "sqlalchemy",
    "av",
    "kornia",
    "spandrel",
    "pydantic",
    "git",
    "github",
    "nio",
    "huggingface_hub",
    "typer",
    "rich",
    "typing_extensions",
    "toml",
    "uv",
    "chardet",
    # requirements.txt に記載されている許可された外部依存
    "imagehash",
    "scipy",
    "pywt",
}


def get_imports(file_path: str) -> set[str]:
    with open(file_path, encoding="utf-8") as f:
        try:
            tree = ast.parse(f.read(), filename=file_path)
        except SyntaxError:
            return set()

    imports = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for n in node.names:
                imports.add(n.name.split(".")[0])
        elif isinstance(node, ast.ImportFrom):
            if node.level == 0 and node.module:
                imports.add(node.module.split(".")[0])
    return imports


def is_standard_library(module_name: str) -> bool:
    # 簡易的な標準ライブラリ判定（sys.builtin_module_names + 既知のリスト）
    if module_name in sys.builtin_module_names:
        return True

    # 完全に網羅するのは難しいため、ALLOWED_PACKAGES に主要なものを入れているが、
    # それでも漏れる場合はここで個別にチェックするか、ALLOWED_PACKAGES を信頼する。
    return False


def check_dependencies(root_dir: str) -> list[str]:
    errors = []
    for root, _, files in os.walk(root_dir):
        if "node_modules" in root or ".git" in root or "__pycache__" in root:
            continue

        for file in files:
            if file.endswith(".py"):
                file_path = os.path.join(root, file)
                imports = get_imports(file_path)

                for imp in imports:
                    # 自プロジェクトのモジュール（py.* または . から始まる）は許可
                    if imp == "py" or imp == "":
                        continue

                    if imp not in ALLOWED_PACKAGES and not is_standard_library(imp):
                        # 追加の動的チェック: importlib を使って標準ライブラリか確認を試みる（環境に依存する可能性があるため補助的）
                        try:
                            import importlib.util

                            spec = importlib.util.find_spec(imp)
                            if spec and (spec.origin == "built-in" or "lib/python" in (spec.origin or "")):
                                continue
                        except (ImportError, ValueError):
                            pass

                        errors.append(f"{file_path}: Unallowed dependency found: '{imp}'")
    return errors


if __name__ == "__main__":
    # py/ ディレクトリをチェック
    py_errors = check_dependencies("py")

    # ルートの __init__.py もチェック
    root_init = "__init__.py"
    root_errors = []
    if os.path.exists(root_init):
        root_errors = check_dependencies(".")  # 実際には __init__.py だけ見たいが walk で絞り込む
        root_errors = [e for e in root_errors if "__init__.py" in e and "check_scripts" not in e and "tests" not in e]

    all_errors = py_errors + root_errors

    if all_errors:
        print("Dependency Check Failed:")
        for error in all_errors:
            print(f"  {error}")
        print(
            "\n'Zero Dependency' rule violated. Only standard libraries, ComfyUI core, and allowed packages (torch, numpy, PIL, scipy, imagehash, pywt) are permitted."
        )
        sys.exit(1)
    else:
        print("Dependency Check Passed: No unallowed external dependencies found.")
        sys.exit(0)
