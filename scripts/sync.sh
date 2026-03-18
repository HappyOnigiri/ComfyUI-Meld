#!/bin/sh
set -eu

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AI_DIR="$ROOT/.ai"

# --- AGENTS.md ---
if [ -f "$AI_DIR/AGENTS.md" ]; then
  if ! cmp -s "$AI_DIR/AGENTS.md" "$ROOT/AGENTS.md" 2>/dev/null; then
    cp "$AI_DIR/AGENTS.md" "$ROOT/AGENTS.md"
    echo "sync-ruler: AGENTS.md updated"
  fi
else
  if [ -f "$ROOT/AGENTS.md" ]; then
    rm "$ROOT/AGENTS.md"
    echo "sync-ruler: AGENTS.md removed"
  fi
fi

# --- Skills ---
if [ -d "$AI_DIR/skills" ]; then
  command -v rsync >/dev/null 2>&1 || { echo "sync-ruler: rsync is required but not installed" >&2; exit 1; }
  for dest in .claude/skills .cursor/skills .agent/skills; do
    mkdir -p "$ROOT/$dest"
    rsync -a --delete "$AI_DIR/skills/" "$ROOT/$dest/"
    echo "sync-ruler: $dest synced"
  done
fi

# --- Ignore files ---
if [ -f "$AI_DIR/ignore" ]; then
  for dest in .claudeignore .cursorignore .aiignore; do
    if ! cmp -s "$AI_DIR/ignore" "$ROOT/$dest" 2>/dev/null; then
      cp "$AI_DIR/ignore" "$ROOT/$dest"
      echo "sync-ruler: $dest updated"
    fi
  done
else
  for dest in .claudeignore .cursorignore .aiignore; do
    if [ -f "$ROOT/$dest" ]; then
      rm "$ROOT/$dest"
      echo "sync-ruler: $dest removed"
    fi
  done
fi
