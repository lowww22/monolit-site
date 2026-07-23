$ErrorActionPreference = "Stop"
$src = "C:\Users\DANIL\Desktop\monolit-site"
$zip = "C:\Users\DANIL\Desktop\monolit-site-READY.zip"
$temp = Join-Path $env:TEMP "monolit-deploy-pack"

if (Test-Path $zip) { Remove-Item $zip -Force }
if (Test-Path $temp) { Remove-Item $temp -Recurse -Force }
New-Item -ItemType Directory -Path $temp | Out-Null

robocopy $src $temp /E /XD node_modules .next .git .vercel /XF *.log /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null

Compress-Archive -Path (Join-Path $temp "*") -DestinationPath $zip -Force
Remove-Item $temp -Recurse -Force

Get-Item $zip | Format-List FullName, Length, LastWriteTime
Write-Host "ZIP_OK"
