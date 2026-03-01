import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

# Terminal color definitions
COLOR_GREEN = "\033[92m"
COLOR_RED = "\033[91m"
COLOR_RESET = "\033[0m"

TASKS = [
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
    ("Build-UI", "npm --prefix ui run build"),
]


def run_task(name: str, command: str) -> tuple[bool, str, str]:
    try:
        process = subprocess.Popen(
            command,
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            encoding="utf-8",
            errors="replace",
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


def main() -> None:
    # Workaround for Windows encoding issues
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(errors="replace")

    print("Starting CI with Python script...")

    os.makedirs(".logs", exist_ok=True)

    results = {}

    # Split tasks into mutating and non-mutating to avoid concurrent file writes.
    # We use an explicit allowlist for robustness.
    mutating_tasks = []
    non_mutating_tasks = []
    for name, cmd in TASKS:
        if name in MUTATING_TASK_NAMES:
            mutating_tasks.append((name, cmd))
        else:
            non_mutating_tasks.append((name, cmd))

    # 1. Run mutating tasks serially
    for name, cmd in mutating_tasks:
        success, _, output = run_task(name, cmd)
        results[name] = (success, output)
        log_filename = os.path.join(".logs", f"{name.replace(' ', '_')}.log")
        with open(log_filename, "w", encoding="utf-8") as f:
            f.write(output)

    # 2. Run non-mutating tasks in parallel
    max_workers = 4
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_task = {executor.submit(run_task, name, cmd): name for name, cmd in non_mutating_tasks}

        for future in as_completed(future_to_task):
            success, name, output = future.result()
            results[name] = (success, output)

            # Save logs to file
            log_filename = os.path.join(".logs", f"{name.replace(' ', '_')}.log")
            with open(log_filename, "w", encoding="utf-8") as f:
                f.write(output)

    # Print results in original order
    failed_tasks = []
    print("\n" + "-" * 60)
    for name, _ in TASKS:
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
        print(f"  {symbol} {name:<35} {status_text}")
    print("-" * 60)

    if failed_tasks:
        print(f"\n{COLOR_RED}CI FAILED ({len(failed_tasks)} tasks failed){COLOR_RESET}")
        print("=" * 80)
        for name, output in failed_tasks:
            print(f"\n--- Detailed log for {name} ---")
            print(output)
        sys.exit(1)
    else:
        print(f"\n{COLOR_GREEN}CI SUCCESSFUL{COLOR_RESET}")
        sys.exit(0)


if __name__ == "__main__":
    main()
