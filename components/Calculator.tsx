'use client';

import { useMemo, useState } from 'react';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';
import { concrete } from '@/lib/catalog';

type Shape = 'strip' | 'slab' | 'columns' | 'manual';

const SHAPES: { id: Shape; label: string; hint: string }[] = [
  {
    id: 'strip',
    label: 'Ленточный фундамент',
    hint: 'Длина ленты по периметру, её ширина и высота',
  },
  {
    id: 'slab',
    label: 'Плита / стяжка',
    hint: 'Длина, ширина и толщина плиты',
  },
  {
    id: 'columns',
    label: 'Столбы / сваи',
    hint: 'Диаметр, высота и количество опор',
  },
  { id: 'manual', label: 'Знаю объём', hint: 'Введите кубометры вручную' },
];

function num(v: string) {
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function Calculator() {
  const [shape, setShape] = useState<Shape>('strip');
  const [reserve, setReserve] = useState('10');
  const [grade, setGrade] = useState('m300');

  // Ленточный фундамент
  const [length, setLength] = useState('40');
  const [width, setWidth] = useState('0.4');
  const [height, setHeight] = useState('1.6');

  // Плита
  const [slabL, setSlabL] = useState('10');
  const [slabW, setSlabW] = useState('8');
  const [slabT, setSlabT] = useState('0.2');

  // Столбы
  const [dia, setDia] = useState('0.3');
  const [colH, setColH] = useState('2');
  const [colN, setColN] = useState('12');

  // Ручной ввод
  const [manual, setManual] = useState('10');

  const base = useMemo(() => {
    switch (shape) {
      case 'strip':
        return num(length) * num(width) * num(height);
      case 'slab':
        return num(slabL) * num(slabW) * num(slabT);
      case 'columns': {
        const r = num(dia) / 2;
        return Math.PI * r * r * num(colH) * num(colN);
      }
      case 'manual':
        return num(manual);
    }
  }, [
    shape,
    length,
    width,
    height,
    slabL,
    slabW,
    slabT,
    dia,
    colH,
    colN,
    manual,
  ]);

  const pct = num(reserve || '0');
  const total = base * (1 + pct / 100);
  const product = concrete.find((p) => p.slug === grade);
  const cementKg = product ? Math.round(total * product.cement) : 0;

  const fmt = (n: number) =>
    n.toLocaleString('ru-RU', { maximumFractionDigits: 2 });

  /** Готовый текст заявки — можно скопировать или продиктовать по телефону */
  const summary = product
    ? `Нужен бетон ${product.mark} (${product.cls}), объём ${fmt(
        total,
      )} м³ с запасом ${pct}%.`
    : '';

  const activeHint = SHAPES.find((s) => s.id === shape)?.hint ?? '';

  return (
    <section id="calculator" className="section-pad bg-bg">
      <div className="container-x">
        <div className="border border-line bg-panel p-6 sm:p-8 md:p-10">
          <p className="eyebrow">Калькулятор</p>
          <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">
            Сколько бетона нужно на объект
          </h2>
          <p className="mt-4 max-w-2xl text-muted sm:text-lg">
            Выберите тип конструкции и укажите размеры в метрах — калькулятор
            посчитает объём бетона с запасом на потери при укладке.
          </p>

          {/* Тип конструкции */}
          <div className="mt-8 flex flex-wrap gap-2" role="group">
            {SHAPES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setShape(s.id)}
                aria-pressed={shape === s.id}
                className={`calc-tab ${shape === s.id ? 'is-active' : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted">{activeHint}</p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {shape === 'strip' && (
              <>
                <Field
                  label="Общая длина ленты, м"
                  value={length}
                  onChange={setLength}
                />
                <Field
                  label="Ширина ленты, м"
                  value={width}
                  onChange={setWidth}
                />
                <Field
                  label="Высота ленты, м"
                  value={height}
                  onChange={setHeight}
                />
              </>
            )}

            {shape === 'slab' && (
              <>
                <Field label="Длина, м" value={slabL} onChange={setSlabL} />
                <Field label="Ширина, м" value={slabW} onChange={setSlabW} />
                <Field label="Толщина, м" value={slabT} onChange={setSlabT} />
              </>
            )}

            {shape === 'columns' && (
              <>
                <Field label="Диаметр, м" value={dia} onChange={setDia} />
                <Field label="Высота, м" value={colH} onChange={setColH} />
                <Field
                  label="Количество, шт"
                  value={colN}
                  onChange={setColN}
                  step="1"
                />
              </>
            )}

            {shape === 'manual' && (
              <Field label="Объём, м³" value={manual} onChange={setManual} />
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Запас на потери, %
              </span>
              <input
                className="field"
                type="number"
                min="0"
                max="30"
                step="1"
                inputMode="numeric"
                value={reserve}
                onChange={(e) => setReserve(e.target.value)}
              />
              <span className="mt-1 block text-xs text-muted">
                Рекомендуем 5–10 %: часть смеси теряется при укладке
              </span>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Марка бетона
              </span>
              <select
                className="field"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                {concrete.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.mark} ({p.cls}) — {p.short}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Результат */}
          <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
            <Result label="Объём по размерам" value={`${fmt(base)} м³`} />
            <Result
              label={`С запасом ${pct}%`}
              value={`${fmt(total)} м³`}
              strong
            />
            <Result
              label="Ориентировочно цемента"
              value={`${fmt(cementKg)} кг`}
            />
          </div>

          {total > 0 && (
            <p className="mt-5 border border-line bg-bg p-4 text-sm text-muted">
              {summary} Назовите эти цифры менеджеру — он подтвердит расчёт и
              рассчитает стоимость с доставкой на ваш адрес.
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={site.contacts.phoneHref} className="btn btn-primary">
              <Phone size={16} className="mr-2" aria-hidden />
              Заказать {fmt(total)} м³ — {site.contacts.phoneDisplay}
            </a>
          </div>

          <p className="mt-4 text-xs text-muted">
            Расчёт ориентировочный. Точный объём зависит от геометрии
            конструкции, состояния основания и способа укладки.
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  step = '0.1',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  step?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        className="field"
        type="number"
        min="0"
        step={step}
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function Result({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className={`border border-line p-5 ${strong ? 'bg-bg-deep text-white' : 'bg-bg'}`}>
      <div
        className={`text-xs uppercase tracking-wider ${
          strong ? 'text-white/55' : 'text-muted'
        }`}
      >
        {label}
      </div>
      <div
        className={`display mt-2 text-3xl ${strong ? 'text-white' : 'text-ink'}`}
      >
        {value}
      </div>
    </div>
  );
}
