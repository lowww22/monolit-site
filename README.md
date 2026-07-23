# ООО «Монолит» — сайт

Сайт производства и доставки бетона (Глазов / Игра).

## Локальный запуск

```bash
npm install
npm run build
npm start
```

Откройте: http://localhost:3000

Для разработки:

```bash
npm run dev
```

## Выкладка из России (рекомендуется)

Если Vercel недоступен из РФ — см. подробную инструкцию **[DEPLOY-RU.md](./DEPLOY-RU.md)** (Timeweb Apps / VPS, форма заявок сохраняется).

## Выкладка на Vercel (публичный URL)

Проект готов к деплою: `npm run build` проходит, есть `vercel.json`, git-репозиторий инициализирован.

### Вариант A — Vercel CLI (быстрее)

1. Установите CLI (один раз): `npm i -g vercel`
2. Войдите: `vercel login` → откройте ссылку в браузере и подтвердите
3. В папке проекта выполните production-деплой:

```bash
npx vercel --prod --yes
```

4. В конце команды появится **Production** URL вида `https://….vercel.app`

Опционально (уведомления заявок в Telegram) — в Vercel → Project → Settings → Environment Variables добавьте:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

(см. `.env.example`; без них сайт работает, заявки просто не уходят в Telegram)

### Вариант B — через GitHub + Vercel UI

1. Создайте репозиторий на GitHub и запушьте код:

```bash
git add .
git commit -m "Initial commit: monolit-site"
gh repo create monolit-site --public --source=. --remote=origin --push
```

(или создайте репо вручную на github.com и `git remote add` + `git push -u origin master`)

2. Откройте [vercel.com/new](https://vercel.com/new) → Import репозиторий → **Deploy**
3. При желании подключите свой домен: Settings → Domains

## Контакты на сайте

Редактируются в файле `lib/site.ts`.
