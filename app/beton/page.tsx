import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import CtaBand from '@/components/CtaBand';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { concrete } from '@/lib/catalog';
import { faqHome } from '@/lib/faq';
import { abs } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: site.showPrices
    ? 'Бетон М100–М500 в Глазове и Игре — цены за куб'
    : 'Товарный бетон М100–М500 в Глазове и Игре',
  description:
    'Товарный бетон всех марок от производителя: М100, М150, М200, М250, М300, М350, М400, М450, М500. Характеристики по ГОСТ 26633-2015, доставка миксером по Глазову, Игре и Удмуртии.',
  alternates: { canonical: '/beton' },
  openGraph: {
    title: 'Товарный бетон М100–М500 в Глазове и Игре — «Монолит»',
    description:
      'Все марки товарного бетона по ГОСТ с доставкой по Глазову, Игре и районам Удмуртии.',
    url: abs('/beton'),
  },
};

/** Список марок для поисковиков — помогает показать все страницы в выдаче */
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Марки товарного бетона',
  itemListElement: concrete.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Бетон ${p.mark} (${p.cls})`,
    url: abs(`/beton/${p.slug}`),
  })),
};

export default function BetonPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <PageHeader
        crumbs={[{ name: 'Товарный бетон' }]}
        h1="Товарный бетон в Глазове и Игре"
        lead="Производим и доставляем товарный бетон марок М100–М500 (классы В7,5–В40) по ГОСТ 26633-2015. Собственный завод в Глазовском районе, производительность до 200 м³ в час, отгрузка от 1 м³."
      />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Все марки бетона
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Выберите марку, чтобы посмотреть характеристики и область
            применения. Если не знаете, какая нужна, — позвоните: подберём под
            конструкцию, нагрузку и тип грунта на вашем участке.
          </p>

          <ProductGrid items={concrete} kind="beton" />

          <div className="mt-10">
            <CtaBand text="Не уверены в марке? Опишите объект — подберём состав и посчитаем объём." />
          </div>
        </div>
      </section>

      {/* Справочная таблица: закрывает запрос «соответствие марки и класса бетона» */}
      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Таблица марок и классов бетона
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Марка (М) показывает среднюю прочность на сжатие в кгс/см², класс
            (В) — гарантированную прочность в МПа. В документации по ГОСТ
            указывают класс, в разговоре чаще используют марку.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="spec-table spec-table--wide">
              <thead>
                <tr>
                  <th scope="col">Марка</th>
                  <th scope="col">Класс</th>
                  <th scope="col">Прочность</th>
                  <th scope="col">Морозостойкость</th>
                  <th scope="col">Водонепроницаемость</th>
                  <th scope="col">Основное применение</th>
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
                    <td>{p.strength}</td>
                    <td>{p.frost}</td>
                    <td>{p.water}</td>
                    <td>{p.short}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Какой бетон выбрать для частного дома
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Для ленточного фундамента одноэтажного дома, бани или гаража
                обычно достаточно М200. Для двухэтажного дома и монолитной
                плиты берут М250–М300. Стяжки, дорожки и отмостку заливают
                М150. Универсальный выбор, когда нет проекта, — М300: он
                подходит почти под любую задачу частного строительства.
              </p>
              <Link
                href="/beton/m300"
                className="mt-4 inline-block font-semibold text-accent hover:underline"
              >
                Подробнее о бетоне М300 →
              </Link>
            </div>

            <div className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Сколько бетона заказывать
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Объём считается как «длина × ширина × высота» в метрах — сразу
                получаются кубометры. К результату добавьте 5–10 % запаса:
                грунт проседает, опалубка расходится, часть смеси теряется при
                укладке. Наш калькулятор посчитает объём для ленты, плиты и
                свай.
              </p>
              <Link
                href="/kalkulyator"
                className="mt-4 inline-block font-semibold text-accent hover:underline"
              >
                Открыть калькулятор бетона →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqHome.slice(0, 5)} />

      <section className="section-pad bg-bg">
        <div className="container-x">
          <CtaBand
            text={`Отгружаем бетон ежедневно ${site.contacts.hoursShort}. Позвоните — назовём цену на сегодня и согласуем время подачи миксера.`}
          />
        </div>
      </section>
    </>
  );
}
