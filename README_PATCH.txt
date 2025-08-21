PATCH: Vercel build fix (npm ci + npx vite build)

Шаги (Windows PowerShell):

1) Распакуйте патч в корень вашего проекта (где package.json).
   Замените vercel.json на тот, что в этом архиве.

2) Обновите package.json: сменим команду сборки на npx и добавим требуемую версию Node.

   Вариант А — одной командой (через Node):
   node -e "const fs=require('fs');let p=JSON.parse(fs.readFileSync('package.json','utf8'));p.scripts=p.scripts||{};p.scripts.build='npx vite build';p.engines={node:'18.x'};fs.writeFileSync('package.json',JSON.stringify(p,null,2));console.log('package.json patched');"

   Вариант Б — вручную отредактировать package.json:
     - scripts.build: "npx vite build"
     - engines: { "node": "18.x" }

3) Убедитесь, что node_modules не в гите:
   git rm -rf --cached node_modules
   echo node_modules> .gitignore
   Add-Content .gitignore "dist"

4) Закоммитьте и запушьте:
   git add .
   git commit -m "build: vercel npm ci + npx vite build"
   git push origin main

5) На Vercel → Deployments → последний деплой → Redeploy → включить "Clear build cache" → Redeploy.