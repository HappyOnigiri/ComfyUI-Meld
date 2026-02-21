import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

# Terminal color definitions
COLOR_GREEN = "\033[92m"
COLOR_RED = "\033[91m"
COLOR_RESET = "\033[0m"

TASKS = [
    ("Python-Lint-ruff-format", "python -m ruff format ."),
    ("Python-Lint-ruff-check", "python -m ruff check . --fix"),
    ("Python-Lint-mypy", "python -m mypy py tests"),
    ("Python-Lint-pyright", "npx pyright"),
    (
        "UI-Lint-biome",
        "npm --prefix ui run lint",
    ),  # Command for biome lint in ui directory
    ("UI-Lint-tsc", "npx tsc --noEmit"),
    ("Fix-Newlines", "python scripts/fix_newlines.py"),
    ("Check-Non-ASCII", "python scripts/check_non_ascii.py"),
    ("Check-TS-Rules", "python scripts/check_ts_rules.py"),
    ("Check-Scripts", "make --no-print-directory check-scripts"),
    ("Local-Check-Scripts", "make --no-print-directory local-check-scripts"),
    ("Python-Tests", "python -m unittest discover tests"),
    ("Build-UI", "npm --prefix ui run build"),
]

# Command adjustments for specific task types
# UI-Lint-tsc: cd ui && npx tsc --noEmit
# UI-Lint-biome: cd ui && npx @biomejs/biome check --write src --error-on-warnings
# Build-UI: cd ui && npm run build


def run_task(name: str, command: str) -> tuple[bool, str, str]:
    # Adjustments for tasks that need to run in the ui directory
    cwd = None
    if name.startswith("UI-") or name == "Build-UI":
        cwd = "ui"
        # Redefine commands based on Makefile logic
        if name == "UI-Lint-tsc":
            command = "npx tsc --noEmit"
        elif name == "UI-Lint-biome":
            command = "npx @biomejs/biome check --write src --error-on-warnings"
        elif name == "Build-UI":
            command = "npm run build"

    try:
        process = subprocess.Popen(
            command,
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            cwd=cwd,
            encoding="utf-8",
            errors="replace",
        )
        stdout, _ = process.communicate()

        return (process.returncode == 0), name, stdout

    except Exception as e:
        return False, name, str(e)


def main() -> None:
    # Workaround for Windows encoding issues
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(errors="replace")

    print("Starting CI with Python script...")

    os.makedirs(".logs", exist_ok=True)

    results = {}

    # Split tasks into mutating and non-mutating to avoid concurrent file writes
    mutating_tasks = []
    non_mutating_tasks = []
    for name, cmd in TASKS:
        # Identify mutating tasks by command text or known behavior
        if any(x in cmd for x in ["format", "--fix", "fix_newlines"]) or "biome" in name.lower():
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
