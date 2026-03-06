import argparse
import concurrent.futures
import os
import subprocess
from pathlib import Path

REPOMIX_IGNORE = [
    "**/__pycache__/**",
    "**/node_modules/**",
    "**/.git/**",
    "tmp/**",
    "web/js/gallery_extension.js",
    "**/package-lock.json",
    "**/.mypy_cache/**",
    "**/.pytest_cache/**",
    "**/.ruff_cache/**",
    "**/.venv/**",
    "env/**",
    "**/.cursor/history/**",
    "**/.DS_Store",
]

OUTPUT_DIR = Path("tmp/repomix")


def run_repomix(name: str, include: str | None = None, ignore: str | list[str] | None = None) -> None:
    print(f"Generating repomix: {name}")
    cmd = ["npx", "--yes", "repomix"]

    if include:
        cmd.extend(["--include", include])

    combined_ignore = REPOMIX_IGNORE.copy()
    if ignore:
        if isinstance(ignore, list):
            combined_ignore.extend(ignore)
        else:
            combined_ignore.append(ignore)

    cmd.extend(["--ignore", ",".join(combined_ignore)])
    cmd.extend(["--output", str(OUTPUT_DIR / f"{name}.xml")])

    try:
        subprocess.run(
            cmd, check=True, capture_output=True, text=True, shell=os.name == "nt", encoding="utf-8", errors="replace"
        )
        print(f"Completed: {name}")
    except subprocess.CalledProcessError as e:
        print(f"Error generating {name}: {e.stderr}")
        raise


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate repomix files in parallel.")
    parser.add_argument(
        "target",
        nargs="?",
        help="Specific target to generate (e.g., repomix-src, repomix-node-pixelate). If omitted, all are generated.",
    )
    args = parser.parse_args()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    all_tasks = [
        ("repomix-full", None, None),
        ("repomix-src", None, "tests/**"),
        ("repomix-tests", "tests/**,pyproject.toml", None),
        ("repomix-ui", "ui/**,*.md,*.toml,requirements.txt,Makefile,__init__.py", None),
        (
            "repomix-image-manager",
            "ui/**,py/image_manager/**,py/meld_save_image/**,agent-config/rules/**,*.md,*.toml,requirements.txt,Makefile,__init__.py",
            "tests/**",
        ),
        (
            "repomix-docs",
            "docs/**,*.md,*.toml,requirements.txt,Makefile,__init__.py,agent-config/rules/**",
            None,
        ),
    ]

    # Add nodes
    py_dir = Path("py")
    if py_dir.exists():
        for node_dir in py_dir.iterdir():
            if node_dir.is_dir() and node_dir.name != "__pycache__" and node_dir.name != "data":
                all_tasks.append((f"repomix-node-{node_dir.name}", f"py/{node_dir.name}/**,pyproject.toml", None))

    if args.target:
        if args.target == "repomix-nodes":
            tasks = [t for t in all_tasks if t[0].startswith("repomix-node-")]
        else:
            tasks = [t for t in all_tasks if t[0] == args.target]

        if not tasks:
            print(f"Target '{args.target}' not found.")
            return
    else:
        tasks = all_tasks

    max_workers = os.cpu_count() or 4
    if len(tasks) < max_workers:
        max_workers = len(tasks)

    print(f"Using {max_workers} workers for parallel repomix generation.")

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_name = {executor.submit(run_repomix, name, include, ignore): name for name, include, ignore in tasks}

        for future in concurrent.futures.as_completed(future_to_name):
            name = future_to_name[future]
            try:
                future.result()
            except Exception as exc:
                print(f"{name} generated an exception: {exc}")


if __name__ == "__main__":
    main()
