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
fi

# --- Skills ---
if [ -d "$AI_DIR/skills" ]; then
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
fi
