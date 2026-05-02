from pathlib import Path
import re

REPO_ROOT = Path(__file__).resolve().parents[1]
ICON_DIR = REPO_ROOT / "icons" / "zashboard-src"

PLATE_SNIPPET = '<rect x="6" y="6" width="52" height="52" rx="14" fill="url(#plate)" stroke="#cbd5e1" stroke-width="1.5" />'
FLAG_BORDER_SNIPPET = '<rect x="14" y="16" width="36" height="32" rx="8" fill="none" stroke="#d7dee8" stroke-width="1.25" />'
UTILITY_ICONS = [
    "ai-service",
    "community",
    "dev-collab",
    "direct",
    "fallback",
    "gaming",
    "manual-switch",
    "native-home",
    "other",
    "self-hosted",
    "smart-select",
    "speedtest",
    "streaming",
]
MONOCHROME_BRANDS = ["anthropic", "apple", "github", "openai", "x"]
FLAGS = ["china", "hong-kong", "japan", "korea", "singapore", "usa"]


def read_icon(name: str) -> str:
    return (ICON_DIR / f"{name}.svg").read_text(encoding="utf-8")


def test_all_icons_restore_background_plate_for_cross_theme_visibility():
    missing = []
    for path in sorted(ICON_DIR.glob("*.svg")):
        if PLATE_SNIPPET not in path.read_text(encoding="utf-8"):
            missing.append(path.name)

    assert not missing, f"Icons missing shared background plate: {missing}"


def test_utility_icons_use_dark_foreground_on_light_plate():
    wrong = []
    for name in UTILITY_ICONS:
        svg = read_icon(name)
        if 'stroke="#0f172a"' not in svg:
            wrong.append(name)

    assert not wrong, f"Utility icons should keep a dark stroke on the light plate: {wrong}"


def test_monochrome_brand_icons_are_not_forced_to_dark_mode_white():
    import re

    wrong = []
    forbidden_foreground_patterns = (
        r'(?<!stop-)color="#f8fafc"',
        r'fill="#f8fafc"',
        r'fill:#f8fafc',
        r'stroke="#f8fafc"',
        r'stroke:#f8fafc',
    )
    for name in MONOCHROME_BRANDS:
        svg = read_icon(name)
        if any(re.search(pattern, svg) for pattern in forbidden_foreground_patterns):
            wrong.append(name)

    assert not wrong, f"Monochrome brands should not be forced to #f8fafc: {wrong}"


def test_flag_icons_keep_badge_clip_and_border():
    wrong = []
    for name in FLAGS:
        svg = read_icon(name)
        if 'clipPath id="flag-badge"' not in svg or FLAG_BORDER_SNIPPET not in svg:
            wrong.append(name)

    assert not wrong, f"Flag icons should keep badge clipping and border: {wrong}"


def test_generated_icons_expose_a_valid_accessible_name():
    invalid = []
    for path in sorted(ICON_DIR.glob("*.svg")):
        svg = path.read_text(encoding="utf-8")
        if 'aria-label=' in svg:
            continue

        match = re.search(r'aria-labelledby="([^"]+)"', svg)
        if not match:
            invalid.append(path.name)
            continue

        ref = match.group(1)
        if f'id="{ref}"' not in svg:
            invalid.append(path.name)

    assert not invalid, f"Icons with broken accessible naming: {invalid}"
