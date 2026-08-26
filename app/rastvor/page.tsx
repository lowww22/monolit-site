import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { mortar } from '@/lib/catalog';
import { abs } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Строительный раствор М50–М200 в Глазове и Игре — цены, доставка',
  description:
    'Купить строительный раствор в Глазове и Игре от производителя: кладочный, штукатурный, для стяжек. Марки М50, М75, М100, М150, М200 по ГОСТ 28013-98. Доставка по Удмуртии.',
  alternates: { canonical: '/rastvor' },
  openGraph: {
    title: 'Строительный раствор М50–М200 в Глазове — ООО «Монолит»',
    description:
      'Кладочный и штукатурный раствор всех марок с доставкой по Глазову, Игре и районам Удмуртии.',
    url: abs('/rastvor'),
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Марки строительного раствора',
  itemListElement: mortar.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Раствор ${p.mark}`,
    url: abs(`/rastvor/${p.slug}`),
  })),
};

export default function RastvorPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <PageHeader
        crumbs={[{ name: 'Строительный раствор' }]}
        h1="Строительный раствор в Глазове и Игре"
        lead="Производим кладочный и штукатурный раствор марок М50–М200 по ГОСТ 28013-98. Доставляем на объекты Глазова, Игры и районов Удмуртии в готовом к работе виде."
      />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Марки раствора
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Готовый раствор с завода экономит время бригады и даёт стабильную
            марку: не нужно замешивать вручную и следить за пропорциями.
            Выберите марку под задачу или позвоните — подскажем.
          </p>

          <ProductGrid items={mortar} kind="rastvor" />

          <div className="mt-10">
            <CtaBand text="Подберём марку раствора под кладку, штукатурку или стяжку." />
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Какой раствор выбрать
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Для кладки кирпича и блоков
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Стандартный выбор — М75 или М100. Для несущих стен и цоколя, где
                нагрузка выше, берут М150. Раствор должен быть достаточно
                пластичным, чтобы равномерно ложиться в шов.
              </p>
            </article>

            <article className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Для штукатурных работ
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Внутри помещений достаточно М50, для наружной штукатурки берут
                М75–М100: она лучше переносит перепады температуры и влажность
                удмуртского климата.
              </p>
            </article>

            <article className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Для стяжки пола
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Для жилых помещений — М100, для гаражей, мастерских и
                промышленных полов — М150–М200. Чем выше нагрузка на пол, тем
                прочнее нужна марка.
              </p>
            </article>
          </div>

          <p className="mt-8 text-muted">
            Нужен бетон, а не раствор?{' '}
            <Link href="/beton" className="font-semibold text-accent hover:underline">
              Смотрите марки товарного бетона М100–М500
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
