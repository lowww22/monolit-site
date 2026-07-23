"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          grade: data.get("grade"),
          volume: data.get("volume"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Ошибка отправки");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-bg p-6 text-center sm:p-8">
        <div className="display text-4xl text-accent">✓</div>
        <h3 className="mt-3 text-xl font-semibold text-ink">Заявка принята</h3>
        <p className="mt-2 text-muted">
          Мы перезвоним в рабочее время и уточним детали заказа.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-accent"
          onClick={() => setStatus("idle")}
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Имя *</span>
          <input name="name" required minLength={2} className="field" placeholder="Иван" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Телефон *</span>
          <input
            name="phone"
            type="tel"
            required
            className="field"
            placeholder="+7 (___) ___-__-__"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Email</span>
        <input name="email" type="email" className="field" placeholder="mail@example.com" />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Бетон / раствор</span>
          <select name="grade" className="field" defaultValue="">
            <option value="">Не выбрано</option>
            <optgroup label="Товарный бетон">
              {site.grades
                .filter((g) => g.category === "concrete")
                .map((g) => (
                  <option key={g.grade} value={g.grade}>
                    {g.name}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Строительный раствор">
              {site.grades
                .filter((g) => g.category === "mortar")
                .map((g) => (
                  <option key={g.grade} value={g.grade}>
                    {g.name}
                  </option>
                ))}
            </optgroup>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Объём, м³</span>
          <input name="volume" type="number" min="0" step="0.5" className="field" placeholder="10" />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Комментарий</span>
        <textarea
          name="message"
          className="field"
          placeholder="Адрес объекта, сроки, пожелания..."
          rows={3}
        />
      </label>

      {status === "error" && (
        <p className="bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? "Отправка..." : "Жду звонка"}
      </button>

      <p className="text-center text-xs text-muted">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
