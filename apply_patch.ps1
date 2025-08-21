# apply_patch.ps1 — автоматическое обновление package.json
$pkgPath = Join-Path (Get-Location) "package.json"
if (!(Test-Path $pkgPath)) { Write-Error "package.json не найден"; exit 1 }
node -e "const fs=require('fs');let p=JSON.parse(fs.readFileSync('package.json','utf8'));p.scripts=p.scripts||{};p.scripts.build='npx vite build';p.engines={node:'18.x'};fs.writeFileSync('package.json',JSON.stringify(p,null,2));console.log('package.json patched');"
