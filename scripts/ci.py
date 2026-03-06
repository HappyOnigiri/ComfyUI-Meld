import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

# Terminal color definitions
COLOR_GREEN = "\033[92m"
COLOR_RED = "\033[91m"
COLOR_RESET = "\033[0m"

# Each task is a tuple of (name, command, cwd).
# cwd defaults to None (project root) unless specified.
TASKS: list[tuple[str, str] | tuple[str, str, str]] = [
    ("Python-Lint-ruff-format", f"{sys.executable} -m ruff format ."),
    ("Python-Lint-ruff-check", f"{sys.executable} -m ruff check . --fix"),
    ("Python-Lint-mypy", f"{sys.executable} -m mypy py tests"),
    ("Python-Lint-pyright", "npx pyright"),
    (
        "UI-Lint-biome",
        "npm --prefix ui run check",
    ),  # Command for biome lint in ui directory
    ("UI-Lint-tsc", "npm --prefix ui run typecheck"),
    ("Fix-Newlines", f"{sys.executable} scripts/fix_newlines.py"),
    ("Check-Non-ASCII", f"{sys.executable} scripts/check_non_ascii.py"),
    ("Check-TS-Rules", f"{sys.executable} scripts/check_ts_rules.py"),
    ("Check-Scripts", "make --no-print-directory check-scripts"),
    ("Local-Check-Scripts", "make --no-print-directory local-check-scripts"),
    ("Python-Tests", f"{sys.executable} -m unittest discover tests"),
    # Run vitest from ui/ directory to ensure consistent path resolution
    # for v8 coverage on Windows (avoids duplicate file entries).
    ("UI-Tests", "npx vitest run --coverage", "ui"),
    ("Build-UI", "npm --prefix ui run build"),
]


def run_task(name: str, command: str, cwd: str | None = None) -> tuple[bool, str, str]:
    try:
        # On Windows, normalize the working directory to ensure consistent
        # drive-letter casing (e.g., "C:\..." vs "c:\..."). Python's os.getcwd()
        # may return a lowercase drive letter while Node.js / v8 uses uppercase.
        # This mismatch causes v8 coverage to report duplicate file entries.
        resolved_cwd = cwd
        if resolved_cwd is not None:
            resolved_cwd = os.path.realpath(resolved_cwd)
        elif sys.platform == "win32":
            resolved_cwd = os.path.realpath(os.getcwd())

        # Windows: prevent child processes from inheriting the console handle.
        # Without this, grandchild processes spawned via shell=True may write
        # directly to the console, corrupting ANSI escape sequences.
        extra_kwargs: dict[str, object] = {}
        if sys.platform == "win32":
            extra_kwargs["creationflags"] = subprocess.CREATE_NO_WINDOW

        process = subprocess.Popen(
            command,
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.DEVNULL,
            text=True,
            encoding="utf-8",
            errors="replace",
            cwd=resolved_cwd,
            **extra_kwargs,
        )
        stdout, _ = process.communicate()

        return (process.returncode == 0), name, stdout

    except Exception as e:
        return False, name, str(e)


# Tasks that modify files and must be run serially to avoid race conditions.
# Future maintainers: add any new mutating tasks to this set.
MUTATING_TASK_NAMES = {
    "Python-Lint-ruff-format",
    "Python-Lint-ruff-check",
    "UI-Lint-biome",
    "Fix-Newlines",
}


def _unpack_task(
    task: tuple[str, str] | tuple[str, str, str],
) -> tuple[str, str, str | None]:
    """Unpack a task tuple into (name, command, cwd)."""
    if len(task) == 3:
        return task[0], task[1], task[2]
    return task[0], task[1], None


def extract_coverage(output: str) -> dict[str, str] | None:
    """Extract coverage summary from vitest output."""
    import re

    # Match Vitest's coverage table:
    # -------------------|---------|----------|---------|---------|-------------------
    # File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    # -------------------|---------|----------|---------|---------|-------------------
    # All files          |   44.74 |    63.27 |   34.48 |   44.74 |
    match = re.search(
        r"All files\s+\|\s+([\d\.]+)\s+\|\s+([\d\.]+)\s+\|\s+([\d\.]+)\s+\|\s+([\d\.]+)",
        output,
    )
    if match:
        return {
            "statements": match.group(1),
            "branches": match.group(2),
            "functions": match.group(3),
            "lines": match.group(4),
        }
    return None


def main() -> None:
    # Workaround for Windows encoding issues
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(errors="replace")

    # Enable ANSI escape sequences on Windows
    if sys.platform == "win32":
        os.system("")

    print("Starting CI with Python script...", flush=True)

    os.makedirs(".logs", exist_ok=True)

    results = {}

    # Split tasks into mutating and non-mutating to avoid concurrent file writes.
    # We use an explicit allowlist for robustness.
    mutating_tasks: list[tuple[str, str, str | None]] = []
    non_mutating_tasks: list[tuple[str, str, str | None]] = []
    for task in TASKS:
        name, cmd, cwd = _unpack_task(task)
        if name in MUTATING_TASK_NAMES:
            mutating_tasks.append((name, cmd, cwd))
        else:
            non_mutating_tasks.append((name, cmd, cwd))

    # 1. Run mutating tasks serially
    for name, cmd, cwd in mutating_tasks:
        success, _, output = run_task(name, cmd, cwd)
        results[name] = (success, output)
        log_filename = os.path.join(".logs", f"{name.replace(' ', '_')}.log")
        with open(log_filename, "w", encoding="utf-8") as f:
            f.write(output)

    # 2. Run non-mutating tasks in parallel
    max_workers = 4
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_task = {executor.submit(run_task, name, cmd, cwd): name for name, cmd, cwd in non_mutating_tasks}

        for future in as_completed(future_to_task):
            success, name, output = future.result()
            results[name] = (success, output)

            # Save logs to file
            log_filename = os.path.join(".logs", f"{name.replace(' ', '_')}.log")
            with open(log_filename, "w", encoding="utf-8") as f:
                f.write(output)

    # Reset ANSI state in case subprocess output leaked to the terminal
    sys.stdout.write("\033[0m")
    sys.stdout.flush()

    # Print results in original order
    failed_tasks = []
    print("\n" + "-" * 60, flush=True)
    for task in TASKS:
        name = task[0]
        success, output = results[name]

        if success:
            status_text = f"{COLOR_GREEN}SUCCESS{COLOR_RESET}"
            symbol = "[+]"
        else:
            status_text = f"{COLOR_RED}FAILED{COLOR_RESET}"
            symbol = "[-]"
            if "ERROR" in output and not name.startswith("Python"):
                status_text = f"{COLOR_RED}ERROR{COLOR_RESET}"
            failed_tasks.append((name, output))

        # Consistent layout
        coverage_info = ""
        if name == "UI-Tests" and success:
            cov = extract_coverage(output)
            if cov:
                coverage_info = f" (Lines: {cov['lines']}%, Funcs: {cov['functions']}%, Branches: {cov['branches']}%, Stmts: {cov['statements']}%)"

        print(f"  {symbol} {name:<35} {status_text}{coverage_info}", flush=True)
    print("-" * 60, flush=True)

    if failed_tasks:
        print(f"\n{COLOR_RED}CI FAILED ({len(failed_tasks)} tasks failed){COLOR_RESET}", flush=True)
        print("=" * 80, flush=True)
        for name, output in failed_tasks:
            print(f"\n--- Detailed log for {name} ---", flush=True)
            print(output, flush=True)
        sys.exit(1)
    else:
        print(f"\n{COLOR_GREEN}CI SUCCESSFUL{COLOR_RESET}", flush=True)
        sys.exit(0)


if __name__ == "__main__":
    main()
