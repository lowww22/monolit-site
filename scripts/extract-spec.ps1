$dest = "c:\Users\DANIL\Documents\Codex\2026-07-23\referenced-chatgpt-conversation-this-is-untrusted\outputs\goal_ai_os_spec"
$zip = "c:\Users\DANIL\Documents\Codex\2026-07-23\referenced-chatgpt-conversation-this-is-untrusted\outputs\goal_ai_os_spec.zip"
Expand-Archive -LiteralPath $zip -DestinationPath $dest -Force
Get-ChildItem -Recurse $dest | Select-Object -ExpandProperty FullName
