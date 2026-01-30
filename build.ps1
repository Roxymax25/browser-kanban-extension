# Build script for Dashboard & Clipboard Extension
# Standalone PowerShell version - no Node.js required!
# Run: .\build.ps1

param(
    [switch]$Help
)

if ($Help) {
    Write-Host @"
Dashboard & Clipboard Extension Build Script
============================================

Usage: .\build.ps1

This script will:
1. Bundle Firefox modules (combine all JS files into one)
2. Create chrome.zip for Chrome Web Store
3. Create firefox.zip for Firefox Add-ons

Requirements:
- PowerShell 5.0 or higher
- Windows (uses Compress-Archive)

Output:
- dist/chrome.zip  (upload to Chrome Web Store)
- dist/firefox.zip (upload to Firefox Add-ons)

"@
    exit 0
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Dashboard & Clipboard Extension Builder" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# Create dist directory
$distDir = Join-Path $scriptDir "dist"
if (-not (Test-Path $distDir)) {
    New-Item -ItemType Directory -Path $distDir | Out-Null
    Write-Host "Created: dist/" -ForegroundColor Green
}

# Step 1: Bundle Firefox modules
Write-Host "Step 1: Bundling Firefox modules..." -ForegroundColor Yellow
Write-Host ""

$firefoxDir = Join-Path $scriptDir "firefox"
$modules = @(
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
)

$bundledCode = ""
$aliases = @()

function Remove-ImportsExports {
    param([string]$content)
    
    # Find aliases (e.g., "import { ICONS as icons }")
    $aliasMatches = [regex]::Matches($content, 'import\s*\{([^}]+)\}\s*from')
    foreach ($match in $aliasMatches) {
        $inner = $match.Groups[1].Value
        $aliasParts = [regex]::Match($inner, '(\w+)\s+as\s+(\w+)')
        if ($aliasParts.Success) {
            $aliases += [PSCustomObject]@{
                original = $aliasParts.Groups[1].Value
                alias = $aliasParts.Groups[2].Value
            }
        }
    }
    
    # Remove import statements
    $content = [regex]::Replace($content, 'import\s+.*?from\s+[''"][^''"]+[''"];?\n?', '')
    $content = [regex]::Replace($content, 'import\s+[''"][^''"]+[''"];?\n?', '')
    $content = [regex]::Replace($content, 'import\s*\{[^}]+\}\s*from\s+[''"][^''"]+[''"];?\n?', '')
    
    # Remove export statements
    $content = [regex]::Replace($content, 'export\s+(default\s+)?', '')
    $content = [regex]::Replace($content, 'export\s*\{[^}]+\};?\n?', '')
    
    return $content
}

# Process modules
foreach ($module in $modules) {
    $fullPath = Join-Path $firefoxDir $module
    if (Test-Path $fullPath) {
        Write-Host "  → $module" -ForegroundColor Gray
        $content = Get-Content $fullPath -Raw
        $content = Remove-ImportsExports -content $content
        $bundledCode += "`n// === $module ===`n"
        $bundledCode += $content
        $bundledCode += "`n"
    } else {
        Write-Host "  ✗ $module (not found)" -ForegroundColor Red
    }
}

# Process main script
Write-Host "  → script.js (main)" -ForegroundColor Gray
$mainScriptPath = Join-Path $firefoxDir "script.js"
$mainScript = Get-Content $mainScriptPath -Raw

# Find aliases in main script
$mainAliasMatches = [regex]::Matches($mainScript, 'import\s*\{([^}]+)\}\s*from')
foreach ($match in $mainAliasMatches) {
    $inner = $match.Groups[1].Value
    $aliasParts = [regex]::Match($inner, '(\w+)\s+as\s+(\w+)')
    if ($aliasParts.Success) {
        $aliases += [PSCustomObject]@{
            original = $aliasParts.Groups[1].Value
            alias = $aliasParts.Groups[2].Value
        }
    }
}

# Remove imports from main script
$mainScript = Remove-ImportsExports -content $mainScript

# Remove duplicate aliases
$uniqueAliases = $aliases | Group-Object -Property alias | ForEach-Object { $_.Group[0] }

# Create alias definitions
$aliasDefinitions = ""
foreach ($aliasObj in $uniqueAliases) {
    $aliasDefinitions += "const $($aliasObj.alias) = $($aliasObj.original);`n"
}

# Combine everything
$finalCode = $bundledCode + "`n// === script.js (main) ===`n" + $aliasDefinitions + "`n" + $mainScript

# Write bundled file
$bundledPath = Join-Path $firefoxDir "script.bundled.js"
$finalCode | Out-File -FilePath $bundledPath -Encoding UTF8
Write-Host "`n  ✓ Created: firefox/script.bundled.js" -ForegroundColor Green
Write-Host "  → Aliases defined: $($uniqueAliases.ForEach({ "$($_.original) as $($_.alias)" }) -join ', ')" -ForegroundColor Gray

# Update index.html
Write-Host "`n  → Updating index.html..." -ForegroundColor Gray
$indexPath = Join-Path $firefoxDir "index.html"
$indexHtml = Get-Content $indexPath -Raw
$indexHtml = $indexHtml.Replace('<script type="module" src="script.js"></script>', '<script src="script.bundled.js"></script>')
$indexHtml | Out-File -FilePath $indexPath -Encoding UTF8
Write-Host "  ✓ Updated: firefox/index.html" -ForegroundColor Green

Write-Host "`n  ✓ Firefox bundling complete!" -ForegroundColor Green
Write-Host ""

# Step 2: Build Chrome version
Write-Host "Step 2: Building Chrome version..." -ForegroundColor Yellow
try {
    $chromeDir = Join-Path $scriptDir "chrome"
    $chromeZip = Join-Path $distDir "chrome.zip"
    
    Compress-Archive -Path "$chromeDir\*" -DestinationPath $chromeZip -Force
    Write-Host "  ✓ Chrome version built: dist/chrome.zip" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Failed to build Chrome version: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Step 3: Build Firefox version
Write-Host "Step 3: Building Firefox version..." -ForegroundColor Yellow
try {
    $firefoxZip = Join-Path $distDir "firefox.zip"
    
    Compress-Archive -Path "$firefoxDir\*" -DestinationPath $firefoxZip -Force
    Write-Host "  ✓ Firefox version built: dist/firefox.zip" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Failed to build Firefox version: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Build complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Files created:" -ForegroundColor White
Write-Host "  - dist/chrome.zip  (for Chrome Web Store)" -ForegroundColor Gray
Write-Host "  - dist/firefox.zip (for Firefox Add-ons)" -ForegroundColor Gray
Write-Host ""
Write-Host "To upload:" -ForegroundColor White
Write-Host "  Chrome:  https://chrome.google.com/webstore/devconsole" -ForegroundColor Gray
Write-Host "  Firefox: https://addons.mozilla.org/developers/" -ForegroundColor Gray
Write-Host ""
