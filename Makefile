.PHONY: ci test-all lint repomix local-checks

ci: local-checks check-only-ascii lint test-all

local-checks:
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

lint: check-only-ascii
	python -m ruff check . --fix
	-python -m mypy py

check-only-ascii:
	@echo "Checking for non-ASCII characters..."
	@git ls-files | grep -v "README_ja.md" | grep -v "Makefile" | grep -v "py/image_manager/" | xargs grep -nP "[^\x00-\x7f]" && (echo "Error: Non-ASCII characters found!" && exit 1) || echo "All files are ASCII (English) only."

repomix: repomix-full repomix-src repomix-tests

repomix-full:
	npx --yes repomix --ignore "**/__pycache__/**,**/node_modules/**,**/.git/**" --output tmp/repomix-full.xml

repomix-src:
	npx --yes repomix --ignore "**/__pycache__/**,**/node_modules/**,**/.git/**,tests/**" --output tmp/repomix-src.xml

repomix-tests:
	npx --yes repomix --include "tests/**,pyproject.toml" --output tmp/repomix-tests.xml
