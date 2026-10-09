import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Calculator from '@/components/Calculator';
import FaqSection from '@/components/FaqSection';
import CtaBand from '@/components/CtaBand';
import { faqCalculator } from '@/lib/faq';
import { concrete } from '@/lib/catalog';
import { abs } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Калькулятор бетона: объём на фундамент, плиту и сваи',
  description:
    'Онлайн-калькулятор бетона: рассчитайте объём на ленточный фундамент, монолитную плиту, стяжку или сваи. Расход цемента по маркам М100–М500. Заказ бетона в Глазове и Игре.',
  alternates: { canonical: '/kalkulyator' },
  openGraph: {
    title: 'Калькулятор бетона — расчёт объёма и расхода цемента',
    description:
      'Посчитайте, сколько бетона нужно на фундамент, плиту или сваи, и закажите доставку в Глазове и Игре.',
    url: abs('/kalkulyator'),
  },
};

export default function KalkulyatorPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: 'Калькулятор бетона' }]}
        h1="Калькулятор бетона: расчёт объёма"
        lead="Посчитайте, сколько кубометров бетона нужно на ленточный фундамент, монолитную плиту, стяжку или сваи. Калькулятор сразу добавит запас на потери при укладке и покажет ориентировочный расход цемента."
      />

      <Calculator />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Как считать объём бетона
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="border border-line bg-bg p-6">
              <h3 className="text-xl font-semibold text-ink">
                Ленточный фундамент
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Сложите длину всех участков ленты — включая внутренние
                перемычки под несущими стенами. Умножьте на ширину и высоту
                ленты в метрах. Например, лента общей длиной 40 м, шириной
                0,4 м и высотой 1,6 м даёт 25,6 м³.
              </p>
            </article>

            <article className="border border-line bg-bg p-6">
              <h3 className="text-xl font-semibold text-ink">
                Монолитная плита и стяжка
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Длина × ширина × толщина, всё в метрах. Плита 10 × 8 м
                толщиной 0,2 м — это 16 м³. Толщину стяжки не забудьте
                перевести в метры: 8 см — это 0,08 м.
              </p>
            </article>

            <article className="border border-line bg-bg p-6">
              <h3 className="text-xl font-semibold text-ink">
                Столбы и буронабивные сваи
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Объём одной круглой опоры — это π × радиус² × высота. Умножьте
                на количество опор. Калькулятор считает это сам: укажите
                диаметр, глубину и число свай.
              </p>
            </article>
          </div>

          <div className="mt-10 border border-line bg-bg-deep p-6 text-white sm:p-8">
            <h3 className="display text-2xl">Почему нужен запас 5–10 %</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              Фактический расход почти всегда выше расчётного. Грунт под
              подушкой проседает, опалубка немного расходится под давлением
              смеси, часть бетона теряется при перекачке и разравнивании. Если
              бетона не хватит в середине заливки, придётся срочно вызывать
              вторую машину — а пауза между заливками даёт холодный шов, слабое
              место в конструкции. Запас в несколько процентов обходится
              дешевле, чем такая ошибка.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Расход цемента по маркам бетона
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Ориентировочный расход портландцемента ПЦ400 на 1 м³ готовой смеси.
            Точные цифры зависят от рецептуры, фракции заполнителя и влажности
            сырья.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="spec-table spec-table--wide">
              <thead>
                <tr>
                  <th scope="col">Марка бетона</th>
                  <th scope="col">Класс</th>
                  <th scope="col">Цемент ПЦ400 на 1 м³</th>
                  <th scope="col">Применение</th>
                </tr>
              </thead>
              <tbody>
                {concrete.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row">
                      <Link
                        href={`/beton/${p.slug}`}
                        className="font-semibold text-accent hover:underline"
                      >
                        {p.mark}
                      </Link>
                    </th>
                    <td>{p.cls}</td>
                    <td>≈ {p.cement} кг</td>
                    <td>{p.short}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <CtaBand text="Посчитали объём? Позвоните — уточним марку и назовём цену с доставкой." />
          </div>
        </div>
      </section>

      <FaqSection items={faqCalculator} title="Вопросы о расчёте бетона" />
    </>
  );
}
