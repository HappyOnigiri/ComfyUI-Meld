.PHONY: ci test-all lint repomix local-checks

ci: local-checks check-only-ascii lint build-ui test-all

build-ui:
	cd ui && npm install && npm run build

watch-ui:
	cd ui && npm install && npm run dev

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
	cd ui && npx @biomejs/biome check src

check-only-ascii:
	@echo "Checking for non-ASCII characters..."
	@if git ls-files | grep -v "README_ja.md" | grep -v "Makefile" | grep -v "py/image_manager/" | xargs grep -nP "[^\x00-\x7f]"; then \
		echo "Error: Non-ASCII characters found!"; \
		exit 1; \
	else \
		echo "All files are ASCII (English) only."; \
	fi

REPOMIX_IGNORE := **/__pycache__/**,**/node_modules/**,**/.git/**,tmp/**,web/js/gallery_extension.js,**/package-lock.json,**/.mypy_cache/**,**/.pytest_cache/**,**/.ruff_cache/**,**/.venv/**,env/**,**/.cursor/**,**/.DS_Store

repomix: repomix-full repomix-src repomix-tests repomix-nodes

repomix-full:
	@mkdir -p tmp/repomix
	npx --yes repomix --ignore "$(REPOMIX_IGNORE)" --output tmp/repomix/repomix-full.xml

repomix-src:
	@mkdir -p tmp/repomix
	npx --yes repomix --ignore "$(REPOMIX_IGNORE),tests/**" --output tmp/repomix/repomix-src.xml

repomix-tests:
	@mkdir -p tmp/repomix
	npx --yes repomix --include "tests/**,pyproject.toml" --ignore "$(REPOMIX_IGNORE)" --output tmp/repomix/repomix-tests.xml

repomix-nodes:
	@mkdir -p tmp/repomix
	@for dir in py/*/; do \
		node_name=$$(basename "$$dir"); \
		if [ -d "$$dir" ] && [ "$$node_name" != "__pycache__" ]; then \
			echo "Generating repomix for node: $$node_name"; \
			npx --yes repomix --include "py/$$node_name/**,pyproject.toml" --ignore "$(REPOMIX_IGNORE)" --output "tmp/repomix/repomix-node-$$node_name.xml"; \
		fi \
	done
