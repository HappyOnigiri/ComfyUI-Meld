import ast
import os
import sys

from .abstract_check import ASTChecker

# Allowed packages list from original check_dependencies.py
ALLOWED_PACKAGES = {
    # Python Standard Library (Major ones)
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
    # ComfyUI related
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
    # ComfyUI prerequisite packages
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
    # Allowed external dependencies in requirements.txt
    "imagehash",
    "scipy",
    "pywt",
}


class DependencyChecker(ASTChecker):
    def __init__(self, file_path: str) -> None:
        super().__init__(file_path)
        self.found_imports: set[str] = set()

    def get_target_files(self) -> list[str]:
        # Logic to find all .py files in py/ and root __init__.py
        targets = []
        for root, _, files in os.walk("py"):
            if any(x in root for x in ["node_modules", ".git", "__pycache__"]):
                continue
            for file in files:
                if file.endswith(".py"):
                    targets.append(os.path.join(root, file))

        if os.path.exists("__init__.py"):
            targets.append("__init__.py")
        return targets

    def visit_Import(self, node: ast.Import) -> None:
        for n in node.names:
            self._check_import(n.name, node.lineno)
        self.generic_visit(node)

    def visit_ImportFrom(self, node: ast.ImportFrom) -> None:
        if node.level == 0 and node.module:
            self._check_import(node.module, node.lineno)
        self.generic_visit(node)

    def _check_import(self, module_name: str, lineno: int) -> None:
        imp = module_name.split(".")[0]
        # Allow self-referencing modules
        if imp == "py" or imp == "":
            return

        if imp not in ALLOWED_PACKAGES and not self._is_standard_library(imp):
            # Dynamic check for standard library
            try:
                import importlib.util

                spec = importlib.util.find_spec(imp)
                if spec and (spec.origin == "built-in" or "lib/python" in (spec.origin or "")):
                    return
            except (ImportError, ValueError):
                pass

            self.add_error(lineno, f"Unallowed dependency found: '{imp}'")

    def _is_standard_library(self, module_name: str) -> bool:
        return module_name in sys.builtin_module_names
