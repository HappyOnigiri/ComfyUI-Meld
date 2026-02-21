import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

# ターミナルカラーの定義
COLOR_GREEN = "\033[92m"
COLOR_RED = "\033[91m"
COLOR_RESET = "\033[0m"

TASKS = [
    ("Python-Lint-ruff-format", "python -m ruff format ."),
    ("Python-Lint-ruff-check", "python -m ruff check . --fix"),
    ("Python-Lint-mypy", "python -m mypy py tests"),
    ("Python-Lint-pyright", "npx pyright"),
    ("UI-Lint-tsc", "npm --prefix ui run type-check"),  # Makefileに合わせてcd ui && npx tsc --noEmitを調整
    (
        "UI-Lint-biome",
        "npm --prefix ui run lint",
    ),  # Makefileに合わせてcd ui && npx @biomejs/biome check --write src --error-on-warningsを調整
    ("Fix-Newlines", "python scripts/fix_newlines.py"),
    ("Check-Non-ASCII", "python scripts/check_non_ascii.py"),
    ("Check-TS-Rules", "python scripts/check_ts_rules.py"),
    ("Check-Scripts", "make --no-print-directory check-scripts"),
    ("Local-Check-Scripts", "make --no-print-directory local-check-scripts"),
    ("Python-Tests", "python -m unittest discover tests"),
    ("Build-UI", "npm --prefix ui run build"),
]

# Makefileでのコマンドを確認して調整が必要なものを修正
# UI-Lint-tsc: cd ui && npx tsc --noEmit
# UI-Lint-biome: cd ui && npx @biomejs/biome check --write src --error-on-warnings
# Build-UI: cd ui && npm run build


def run_task(name: str, command: str) -> tuple[bool, str, str]:
    # uiディレクトリでの実行が必要な場合の調整
    cwd = None
    if name.startswith("UI-") or name == "Build-UI":
        # Makefileでは cd ui && ... となっていたので、ここでは cwd を指定して実行する
        cwd = "ui"
        # コマンドから ui ディレクトリ接頭辞などを除去する必要があるかもしれないが
        # Makefileの中身に基づいて、具体的なコマンドを再定義する
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
    print("Starting CI with Python script...")

    os.makedirs(".logs", exist_ok=True)

    # 並列実行 (Makefileと同じ -j 4 相当)
    max_workers = 4
    failed_tasks = []

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_task = {executor.submit(run_task, name, cmd): name for name, cmd in TASKS}

        for future in as_completed(future_to_task):
            success, name, output = future.result()

            # 完了したタスクのサマリーを表示
            status_text = f"{COLOR_GREEN}SUCCESS{COLOR_RESET}" if success else f"{COLOR_RED}FAILED{COLOR_RESET}"
            if "ERROR" in output and not success and not output.startswith("Python"):  # 簡易的な例外判定
                status_text = f"{COLOR_RED}ERROR{COLOR_RESET}"

            print(f"  {name:<40} {status_text}")

            # ログの保存
            log_filename = os.path.join(".logs", f"{name.replace(' ', '_')}.log")
            with open(log_filename, "w", encoding="utf-8") as f:
                f.write(output)

            if not success:
                failed_tasks.append((name, output))

    if failed_tasks:
        print("\n" + "=" * 80)
        print(f"{COLOR_RED}CI FAILED ({len(failed_tasks)} tasks failed){COLOR_RESET}")
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
