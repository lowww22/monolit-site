$ErrorActionPreference = "Stop"
$root = "C:\Users\DANIL\Desktop\goal-ai-os"
$specSrc = "C:\Users\DANIL\Documents\Codex\2026-07-23\referenced-chatgpt-conversation-this-is-untrusted\outputs\goal_ai_os_spec"
$skill = "C:\Users\DANIL\.cursor\skills\goal-ai-os"

$dirs = @(
  $root,
  (Join-Path $root "spec"),
  (Join-Path $root "memory\user"),
  (Join-Path $root "memory\projects"),
  (Join-Path $root "memory\research"),
  (Join-Path $root "memory\decisions"),
  (Join-Path $root "workspace"),
  (Join-Path $root ".cursor\rules"),
  $skill
)

foreach ($d in $dirs) {
  New-Item -ItemType Directory -Force -Path $d | Out-Null
}

Copy-Item -Force (Join-Path $specSrc "*") (Join-Path $root "spec\")
Copy-Item -Force (Join-Path $specSrc "*") $skill

Write-Host "OK"
Get-ChildItem (Join-Path $root "spec") | Select-Object -ExpandProperty Name
Get-ChildItem $skill | Select-Object -ExpandProperty Name
