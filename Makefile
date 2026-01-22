.PHONY: ci test-all lint lint-py lint-ui lint-misc lint-scripts build-ui watch-ui local-check-scripts check-scripts check-ts-rules check-only-ascii repomix loc

# CI: Parallel execution of all checks and tests
# Automatically uses -j 4 to speed up the process.
ci:
	@echo "Starting CI with parallel execution..."
	@$(MAKE) --no-print-directory -j 4 ci-parallel

ci-parallel: lint-py lint-ui lint-misc lint-scripts test-all build-ui

loc:
	@echo "=== Lines of code by file ==="
	@git ls-files | grep -v "web/js/gallery_extension.js" | xargs wc -l | sort -nr
	@echo ""
	@echo "=== Lines of code by extension ==="
	@git ls-files | grep -v "web/js/gallery_extension.js" | xargs wc -l | grep -v " total$$" | awk '{ \
		n = split($$2, a, "."); \
		ext = (n > 1) ? a[n] : "no_ext"; \
		count[ext] += $$1; \
	} END { \
		for (e in count) printf "%10d %s\n", count[e], e; \
	}' | sort -nr

# UI node_modules management
ui/node_modules/.install-stamp: ui/package.json ui/package-lock.json
	@echo "Installing UI dependencies..."
	cd ui && npm install
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
				python "$$script" || exit 1; \
			fi; \
		done; \
	fi

test-all:
	python -m unittest discover tests

# Linting tasks organized by type
lint: lint-py lint-ui lint-misc lint-scripts

lint-py:
	@echo "Running Python linting (ruff, mypy, pyright)..."
	python -m ruff format .
	python -m ruff check . --fix
	python -m mypy py tests
	npx pyright

lint-ui: ui/node_modules/.install-stamp
	@echo "Running UI linting (tsc, biome)..."
	cd ui && npx tsc --noEmit
	cd ui && npx @biomejs/biome check --write src --error-on-warnings

lint-misc: check-only-ascii check-ts-rules

lint-scripts: check-scripts local-check-scripts

check-scripts:
	@if [ -d "check_scripts" ]; then \
		for script in check_scripts/*.py; do \
			if [ -f "$$script" ]; then \
				echo "Running check script: $$script"; \
				python "$$script" || exit 1; \
			fi; \
		done; \
	fi

check-ts-rules:
	@echo "Checking for @ts-ignore..."
	@if git ls-files "ui/src/*.ts" "ui/src/*.tsx" | xargs grep -n "@ts-ignore"; then \
		echo "Error: @ts-ignore found! Use @ts-expect-error instead if necessary."; \
		exit 1; \
	fi
	@echo "Checking for explicit any..."
	@if git ls-files "ui/src/*.ts" "ui/src/*.tsx" | xargs grep -nE "(:|as)\s+any"; then \
		echo "Error: explicit any found! Please use more specific types."; \
		exit 1; \
	fi
	@echo "TypeScript rules check passed."

check-only-ascii:
	@echo "Checking for non-ASCII characters..."
	@if git ls-files | grep -vE "(\.ja\.md$$|^docs/ja/|^\.cursor/rules/|web/js/gallery_extension\.js$$)" | xargs grep -nP "[^\x00-\x7f]"; then \
		echo "Error: Non-ASCII characters found!"; \
		exit 1; \
	else \
		echo "All files are ASCII (English) only."; \
	fi

repomix:
	python scripts/generate_repomix.py

repomix-%:
	python scripts/generate_repomix.py repomix-$*
