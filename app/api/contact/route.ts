import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  grade?: string;
  volume?: string;
  message?: string;
};

function validPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 12;
}

async function notifyTelegram(payload: Required<Pick<Payload, "name" | "phone">> & Payload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = [
    "📩 Заявка с сайта Монолит",
    "",
    `👤 ${payload.name}`,
    `📞 ${payload.phone}`,
    payload.email ? `✉ ${payload.email}` : null,
    payload.grade ? `🧱 ${payload.grade}` : null,
    payload.volume ? `📦 ${payload.volume} м³` : null,
    payload.message ? `💬 ${payload.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  return res.ok;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";

    if (name.length < 2) {
      return NextResponse.json({ error: "Укажите имя" }, { status: 400 });
    }
    if (!validPhone(phone)) {
      return NextResponse.json(
        { error: "Укажите корректный телефон" },
        { status: 400 },
      );
    }

    const payload = {
      name,
      phone,
      email: body.email?.trim(),
      grade: body.grade?.trim(),
      volume: body.volume?.trim(),
      message: body.message?.trim(),
    };

    await notifyTelegram(payload);
    console.log("[contact]", payload);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Не удалось отправить заявку" },
      { status: 500 },
    );
  }
}
