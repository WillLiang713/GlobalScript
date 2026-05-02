#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$ROOT_DIR/icons/zashboard-src"
OUT_DIR="$ROOT_DIR/icons/zashboard"

mkdir -p "$OUT_DIR"

npx --yes sharp-cli \
  -i "$SRC_DIR"/*.svg \
  -o "$OUT_DIR" \
  --density 576 \
  -f png \
  --compressionLevel 9 \
  --effort 6 \
  --palette \
  resize 512 512
