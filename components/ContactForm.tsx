'use client';

import { useRef, useState } from 'react';
import { concrete, mortar } from '@/lib/catalog';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  // Момент открытия формы — боты отправляют её почти мгновенно
  const openedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          grade: data.get('grade'),
          volume: data.get('volume'),
          message: data.get('message'),
          // Антиспам: скрытое поле и время заполнения
          company: data.get('company'),
          elapsed: Date.now() - openedAt.current,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Ошибка отправки');

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Ошибка отправки');
    }
  }

  if (status === 'success') {
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
          onClick={() => {
            openedAt.current = Date.now();
            setStatus('idle');
          }}
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Ловушка для спам-ботов: поле скрыто от людей, но боты его заполняют */}
      <div className="hp-field" aria-hidden>
        <label>
          Компания
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Имя *</span>
          <input
            name="name"
            required
            minLength={2}
            className="field"
            placeholder="Иван"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Телефон *</span>
          <input
            name="phone"
            type="tel"
            required
            className="field"
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Email</span>
        <input
          name="email"
          type="email"
          className="field"
          placeholder="mail@example.com"
          autoComplete="email"
        />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            Бетон / раствор
          </span>
          <select name="grade" className="field" defaultValue="">
            <option value="">Не выбрано</option>
            <optgroup label="Товарный бетон">
              {concrete.map((p) => (
                <option key={p.slug} value={`Бетон ${p.mark} (${p.cls})`}>
                  Бетон {p.mark} ({p.cls})
                </option>
              ))}
            </optgroup>
            <optgroup label="Строительный раствор">
              {mortar.map((p) => (
                <option key={p.slug} value={`Раствор ${p.mark}`}>
                  Раствор {p.mark}
                </option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Объём, м³</span>
          <input
            name="volume"
            type="number"
            min="0"
            step="0.5"
            className="field"
            placeholder="10"
          />
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

      {status === 'error' && (
        <p role="alert" className="bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {status === 'loading' ? 'Отправка...' : 'Жду звонка'}
      </button>

      <p className="text-center text-xs text-muted">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
