import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  grade?: string;
  volume?: string;
  message?: string;
  /** Honeypot — скрытое поле, люди его не видят */
  company?: string;
  /** Сколько миллисекунд заполнялась форма */
  elapsed?: number;
};

/* --- Простой лимит частоты: не больше 5 заявок с адреса за 10 минут --- */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);

  // Чистим старые записи, чтобы карта не росла бесконечно
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }

  return list.length > MAX_PER_WINDOW;
}

function clientIp(request: Request) {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function validPhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 12;
}

/** Обрезаем поля, чтобы в Telegram не улетело «полотно» от бота */
function clip(v: string | undefined, max: number) {
  const s = (v ?? '').trim();
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

async function notifyTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    // 1. Honeypot: заполнено скрытое поле — почти наверняка бот.
    //    Отвечаем «успехом», чтобы бот не подбирал обход.
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    // 2. Форма отправлена быстрее чем за 2 секунды — тоже бот
    if (typeof body.elapsed === 'number' && body.elapsed < 2000) {
      return NextResponse.json({ success: true });
    }

    // 3. Ограничение частоты
    if (rateLimited(clientIp(request))) {
      return NextResponse.json(
        { error: 'Слишком много заявок. Позвоните нам напрямую.' },
        { status: 429 },
      );
    }

    const name = clip(body.name, 80);
    const phone = clip(body.phone, 30);

    if (name.length < 2) {
      return NextResponse.json({ error: 'Укажите имя' }, { status: 400 });
    }
    if (!validPhone(phone)) {
      return NextResponse.json(
        { error: 'Укажите корректный телефон' },
        { status: 400 },
      );
    }

    const text = [
      '📩 Заявка с сайта Монолит',
      '',
      `👤 ${name}`,
      `📞 ${phone}`,
      body.email ? `✉ ${clip(body.email, 100)}` : null,
      body.grade ? `🧱 ${clip(body.grade, 60)}` : null,
      body.volume ? `📦 ${clip(body.volume, 20)} м³` : null,
      body.message ? `💬 ${clip(body.message, 800)}` : null,
      '',
      `🕒 ${new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Samara',
      })}`,
    ]
      .filter(Boolean)
      .join('\n');

    const sent = await notifyTelegram(text);
    if (!sent) {
      // Уведомления не настроены или Telegram недоступен — пишем в лог,
      // чтобы заявку можно было найти в логах приложения на хостинге.
      console.log('[contact]', text);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Не удалось отправить заявку' },
      { status: 500 },
    );
  }
}
