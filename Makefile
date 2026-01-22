.PHONY: ci test-all lint repomix repomix-image-manager local-check-scripts check-scripts loc

ci: local-check-scripts check-only-ascii lint build-ui test-all

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

build-ui:
	cd ui && npm install && npm run build

watch-ui:
	cd ui && npm install && npm run dev

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

lint: check-only-ascii check-ts-rules check-scripts
	python -m ruff format .
	python -m ruff check . --fix
	python -m mypy py tests
	npx pyright
	cd ui && npx tsc --noEmit
	cd ui && npx @biomejs/biome check --write src --error-on-warnings

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
	@if git ls-files | grep -vE "(\.ja\.md$$|web/js/gallery_extension\.js$$)" | xargs grep -nP "[^\x00-\x7f]"; then \
		echo "Error: Non-ASCII characters found!"; \
		exit 1; \
	else \
		echo "All files are ASCII (English) only."; \
	fi

REPOMIX_IGNORE := **/__pycache__/**,**/node_modules/**,**/.git/**,tmp/**,web/js/gallery_extension.js,**/package-lock.json,**/.mypy_cache/**,**/.pytest_cache/**,**/.ruff_cache/**,**/.venv/**,env/**,**/.cursor/history/**,**/.DS_Store

repomix: repomix-full repomix-src repomix-tests repomix-nodes repomix-ui repomix-image-manager

repomix-full:
	@mkdir -p tmp/repomix
	npx --yes repomix --ignore "$(REPOMIX_IGNORE)" --output tmp/repomix/repomix-full.xml

repomix-src:
	@mkdir -p tmp/repomix
	npx --yes repomix --ignore "$(REPOMIX_IGNORE),tests/**" --output tmp/repomix/repomix-src.xml

repomix-tests:
	@mkdir -p tmp/repomix
	npx --yes repomix --include "tests/**,pyproject.toml" --ignore "$(REPOMIX_IGNORE)" --output tmp/repomix/repomix-tests.xml

repomix-ui:
	@mkdir -p tmp/repomix
	npx --yes repomix --include "ui/**,*.md,*.toml,requirements.txt,Makefile,__init__.py" --ignore "$(REPOMIX_IGNORE)" --output tmp/repomix/repomix-ui.xml

repomix-image-manager:
	@mkdir -p tmp/repomix
	npx --yes repomix --include "ui/**,py/image_manager/**,.cursor/rules/**,*.md,*.toml,requirements.txt,Makefile,__init__.py" --ignore "$(REPOMIX_IGNORE),tests/**" --output tmp/repomix/repomix-image-manager.xml

repomix-nodes:
	@mkdir -p tmp/repomix
	@for dir in py/*/; do \
		node_name=$$(basename "$$dir"); \
		if [ -d "$$dir" ] && [ "$$node_name" != "__pycache__" ]; then \
			echo "Generating repomix for node: $$node_name"; \
			npx --yes repomix --include "py/$$node_name/**,pyproject.toml" --ignore "$(REPOMIX_IGNORE)" --output "tmp/repomix/repomix-node-$$node_name.xml"; \
		fi \
	done
