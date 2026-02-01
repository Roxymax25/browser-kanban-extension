#!/usr/bin/env python3
"""Build script for Dashboard & Clipboard Extension"""

import os
import re
import shutil
import zipfile
from pathlib import Path

print("========================================")
print("Dashboard & Clipboard Extension Builder")
print("========================================\n")

script_dir = Path(__file__).parent
dist_dir = script_dir / "dist"
firefox_dir = script_dir / "firefox"
chrome_dir = script_dir / "chrome"

# Create dist directory
dist_dir.mkdir(exist_ok=True)
print("Created: dist/")

# Step 1: Bundle Firefox modules
print("\nStep 1: Bundling Firefox modules...\n")

modules = [
    "modules/config/constants.js",
    "modules/config/icons.js",
    "modules/config/translations.js",
    "modules/config/colorPalettes.js",
    "modules/utils/helpers.js",
    "modules/utils/i18n.js",
    "modules/services/storage.js",
    "modules/services/ArchiveService.js",
    "modules/services/sync/BaseSyncProvider.js",
    "modules/services/sync/crypto.js",
    "modules/services/sync/WebDAVProvider.js",
    "modules/services/sync/SyncService.js",
    "modules/ui/ClipboardPanel.js",
    "modules/ui/TimeTracker.js"
]

def remove_imports_exports(content):
    # Remove import statements
    content = re.sub(r'import\s+.*?from\s+[\'"][^\'"]+[\'"];?\n?', '', content)
    content = re.sub(r'import\s+[\'"][^\'"]+[\'"];?\n?', '', content)
    content = re.sub(r'import\s*\{[^}]+\}\s*from\s+[\'"][^\'"]+[\'"];?\n?', '', content)
    
    # Remove export statements
    content = re.sub(r'export\s+(default\s+)?', '', content)
    content = re.sub(r'export\s*\{[^}]+\};?\n?', '', content)
    
    return content

bundled_code = ""

for module in modules:
    module_path = firefox_dir / module
    if module_path.exists():
        print(f"  -> {module}")
        content = module_path.read_text(encoding='utf-8')
        bundled_code += f"\n// === {module} ===\n"
        bundled_code += remove_imports_exports(content)
        bundled_code += "\n"
    else:
        print(f"  X {module} (not found)")

# Process main script
print("  -> script.js (main)")
main_script_path = firefox_dir / "script.js"
main_script = remove_imports_exports(main_script_path.read_text(encoding='utf-8'))

final_code = bundled_code + "\n// === script.js (main) ===\n" + main_script

# Write bundled file
bundled_path = firefox_dir / "script.bundled.js"
bundled_path.write_text(final_code, encoding='utf-8')
print("\n  [OK] Created: firefox/script.bundled.js")

# Update index.html
print("\n  -> Updating index.html...")
index_path = firefox_dir / "index.html"
index_html = index_path.read_text(encoding='utf-8')
index_html = index_html.replace(
    '<script type="module" src="script.js"></script>',
    '<script src="script.bundled.js"></script>'
)
index_path.write_text(index_html, encoding='utf-8')
print("  [OK] Updated: firefox/index.html")

print("\n  [OK] Firefox bundling complete!\n")

# Step 2: Build Chrome version
print("Step 2: Building Chrome version...")
try:
    chrome_zip = dist_dir / "chrome.zip"
    if chrome_zip.exists():
        chrome_zip.unlink()
    
    # Create Chrome ZIP with backslashes (fine for Chrome)
    with zipfile.ZipFile(chrome_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file_path in chrome_dir.rglob('*'):
            if file_path.is_file():
                arcname = str(file_path.relative_to(chrome_dir))
                zipf.write(file_path, arcname)
    
    print("  [OK] Chrome version built: dist/chrome.zip")
except Exception as e:
    print(f"  [ERROR] Failed to build Chrome version: {e}")

# Step 3: Build Firefox version with forward slashes
print("\nStep 3: Building Firefox version...")
try:
    firefox_zip = dist_dir / "firefox.zip"
    if firefox_zip.exists():
        firefox_zip.unlink()
    
    # Create Firefox ZIP with forward slashes (required by Firefox)
    with zipfile.ZipFile(firefox_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file_path in firefox_dir.rglob('*'):
            if file_path.is_file():
                # Use forward slashes for Firefox compatibility
                arcname = file_path.relative_to(firefox_dir).as_posix()
                zipf.write(file_path, arcname)
    
    print("  [OK] Firefox version built: dist/firefox.zip")
except Exception as e:
    print(f"  [ERROR] Failed to build Firefox version: {e}")

print("\n========================================")
print("[SUCCESS] Build complete!")
print("========================================\n")
print("Files created:")
print("  - dist/chrome.zip  (for Chrome Web Store)")
print("  - dist/firefox.zip (for Firefox Add-ons)\n")
print("To upload:")
print("  Chrome:  https://chrome.google.com/webstore/devconsole")
print("  Firefox: https://addons.mozilla.org/developers/\n")
