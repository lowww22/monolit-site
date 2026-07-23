$src = "C:\Users\DANIL\.cursor\projects\c-Users-DANIL-Desktop-monolit-site\assets"
$dst = "C:\Users\DANIL\Desktop\monolit-site\public\images"
New-Item -ItemType Directory -Force -Path $dst | Out-Null

$names = @("hero.jpg","mixer.jpg","lab.jpg","plant.jpg","construction.jpg","building.jpg","industrial.jpg")
foreach ($name in $names) {
  $from = Join-Path $src $name
  $to = Join-Path $dst $name
  if (Test-Path $from) {
    Copy-Item -Force $from $to
    Write-Host "Copied $name"
  } else {
    Write-Host "Missing $name"
  }
}

$logo = Join-Path $src "logo-monolit.png"
if (Test-Path $logo) {
  Copy-Item -Force $logo "C:\Users\DANIL\Desktop\monolit-site\public\logo.png"
  Copy-Item -Force $logo "C:\Users\DANIL\Desktop\monolit-site\public\icon.png"
}

Get-ChildItem $dst | Format-Table Name, Length
