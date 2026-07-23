"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function Calculator() {
  const [grade, setGrade] = useState<string>("B22.5");
  const [volume, setVolume] = useState("10");
  const [address, setAddress] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const gradeName =
      site.grades.find((g) => g.grade === grade)?.name ?? grade;
    const text = [
      "Здравствуйте! Хочу уточнить стоимость.",
      `Продукция: ${gradeName}`,
      `Объём: ${volume} м³`,
      address ? `Адрес: ${address}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `${site.contacts.emailHref}?subject=${encodeURIComponent(
      "Запрос стоимости бетона / раствора",
    )}&body=${encodeURIComponent(text)}`;

    window.location.href = mailto;
    setDone(true);
  }

  return (
    <section id="calculator" className="section-pad bg-bg">
      <div className="container-x">
        <div className="border border-line bg-panel p-6 sm:p-8 md:p-10">
          <p className="eyebrow">Расчёт</p>
          <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
            Уточните стоимость по телефону
          </h2>
          <p className="mt-4 max-w-2xl text-muted sm:text-lg">
            Актуальные цены зависят от марки бетона или раствора, объёма и
            доставки. Позвоните или оставьте параметры — менеджер посчитает
            точно.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.contacts.phoneHref} className="btn btn-primary">
              Позвонить {site.contacts.phoneDisplay}
            </a>
            <a href="#contacts" className="btn btn-dark">
              Заявка на звонок
            </a>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 border-t border-line pt-8">
            <h3 className="text-xl font-semibold text-ink">
              Или отправьте параметры на почту
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Бетон или раствор
                </span>
                <select
                  className="field"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
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
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Объём, м³
                </span>
                <input
                  className="field"
                  type="number"
                  min="0.5"
                  step="0.5"
                  inputMode="decimal"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  required
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Адрес объекта
                </span>
                <input
                  className="field"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Глазов / Игра / другой населённый пункт"
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary mt-6">
              Отправить запрос на {site.contacts.email}
            </button>

            {done && (
              <p className="mt-4 text-sm text-muted">
                Если почта не открылась — напишите на{" "}
                <a href={site.contacts.emailHref} className="text-accent">
                  {site.contacts.email}
                </a>{" "}
                или позвоните.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
