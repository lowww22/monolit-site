$ErrorActionPreference = "Stop"
$dir = "C:\Users\DANIL\Desktop\monolit-site\public\images"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$files = @{
  "hero.jpg" = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
  "plant.jpg" = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80"
  "mixer.jpg" = "https://images.unsplash.com/photo-1429497419816-9ca5cfb22c50?auto=format&fit=crop&w=1600&q=80"
  "lab.jpg" = "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1600&q=80"
  "construction.jpg" = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
  "building.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
  "industrial.jpg" = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80"
}

foreach ($name in $files.Keys) {
  $out = Join-Path $dir $name
  Write-Host "Downloading $name ..."
  Invoke-WebRequest -Uri $files[$name] -OutFile $out -UseBasicParsing -TimeoutSec 90
  Write-Host ("OK {0} bytes" -f (Get-Item $out).Length)
}

Get-ChildItem $dir | Format-Table Name, Length
