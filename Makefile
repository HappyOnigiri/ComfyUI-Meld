.PHONY: ci test-all lint lint-py lint-ui lint-misc lint-scripts build-ui watch-ui local-check-scripts check-scripts check-ts-rules check-non-ascii repomix loc

# -----------------------------------------------------------------------------
# Cross-platform development notes (Windows / macOS / Linux)
#
# This repository runs most Python tasks from a local virtual environment (venv).
# IMPORTANT: Do not rely on shell-specific "activate" scripts from Make targets.
# Instead, we call the venv Python executable directly, which works on both
# Unix-like systems and Windows.
#
# Quick setup (macOS/Linux):
#   python3.10 -m venv venv
#   ./venv/bin/python -m pip install -U pip
#   ./venv/bin/python -m pip install -r requirements.txt
#
# Quick setup (Windows PowerShell):
#   py -3.10 -m venv venv
#   .\venv\Scripts\python.exe -m pip install -U pip
#   .\venv\Scripts\python.exe -m pip install -r requirements.txt
# -----------------------------------------------------------------------------

ifeq ($(OS),Windows_NT)
VENV_PY := venv/Scripts/python.exe
else
VENV_PY := venv/bin/python
endif

# Prefer the local venv if present; otherwise fall back to system Python.
# You can always override explicitly, e.g.:
#   make ci PYTHON=python
#   make ci PYTHON=venv/bin/python
ifneq ("$(wildcard $(VENV_PY))","")
PYTHON ?= $(VENV_PY)
else
PYTHON ?= python
endif

# CI: Parallel execution of all checks and tests
# Automatically uses -j 4 to speed up the process.
ci:
	@echo "Starting CI with parallel execution..."
	@$(MAKE) --no-print-directory -j 4 ci-parallel

ci-parallel: lint-py lint-ui lint-misc lint-scripts test-all build-ui

loc:
	@$(PYTHON) scripts/loc.py

# UI node_modules management
ui/node_modules/.install-stamp: ui/package.json ui/package-lock.json
	@echo "Installing UI dependencies..."
	cd ui && npm ci
	@touch $@

build-ui: ui/node_modules/.install-stamp
	cd ui && npm run build

watch-ui: ui/node_modules/.install-stamp
	cd ui && npm run dev

local-check-scripts:
	@if [ -d "local_check_scripts" ]; then \
		for script in local_check_scripts/*.py; do \
			if [ -f "$$script" ]; then \
				echo "Running local check: $$script"; \
				$(PYTHON) "$$script" || exit 1; \
			fi; \
		done; \
	fi

test-all:
	$(PYTHON) -m unittest discover tests

# Linting tasks organized by type
lint: lint-py lint-ui lint-misc lint-scripts

lint-py:
	@echo "Running Python linting (ruff, mypy, pyright)..."
	$(PYTHON) -m ruff format .
	$(PYTHON) -m ruff check . --fix
	$(PYTHON) -m mypy py tests
	npx pyright

lint-ui: ui/node_modules/.install-stamp
	@echo "Running UI linting (tsc, biome)..."
	cd ui && npx tsc --noEmit
	cd ui && npx @biomejs/biome check --write src --error-on-warnings

lint-misc: check-non-ascii check-ts-rules

lint-scripts: check-scripts local-check-scripts

check-scripts:
	@if [ -d "check_scripts" ]; then \
		for script in check_scripts/*.py; do \
			if [ -f "$$script" ]; then \
				echo "Running check script: $$script"; \
				$(PYTHON) "$$script" || exit 1; \
			fi; \
		done; \
	fi

check-ts-rules:
	@$(PYTHON) scripts/check_ts_rules.py

check-non-ascii:
	@$(PYTHON) scripts/check_non_ascii.py

repomix:
	$(PYTHON) scripts/generate_repomix.py

repomix-%:
	$(PYTHON) scripts/generate_repomix.py repomix-$*
