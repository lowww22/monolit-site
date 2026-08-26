import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { articles } from '@/lib/articles';
import { abs } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Статьи о бетоне — выбор марки, расчёт, заливка',
  description:
    'Полезные статьи о бетоне от производителя: какую марку выбрать для фундамента, сколько цемента в кубе, расшифровка марок и классов, заливка бетона зимой.',
  alternates: { canonical: '/stati' },
  openGraph: {
    title: 'Статьи о бетоне — ООО «Монолит»',
    description:
      'Как выбрать марку бетона, рассчитать объём и не ошибиться при заливке.',
    url: abs('/stati'),
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Статьи о бетоне',
  itemListElement: articles.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.h1,
    url: abs(`/stati/${a.slug}`),
  })),
};

export default function StatiPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <PageHeader
        crumbs={[{ name: 'Статьи' }]}
        h1="Статьи о бетоне"
        lead="Отвечаем на вопросы, которые чаще всего задают перед заказом: какую марку выбрать, сколько бетона нужно и что учесть при заливке."
      />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="flex flex-col border border-line bg-bg p-6 transition hover:border-accent/50 hover:shadow-md"
              >
                <time
                  dateTime={a.date}
                  className="text-xs uppercase tracking-wider text-muted"
                >
                  {new Date(a.date).toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <h2 className="display mt-3 text-2xl text-ink">
                  <Link
                    href={`/stati/${a.slug}`}
                    className="hover:text-accent"
                  >
                    {a.h1}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {a.lead}
                </p>
                <Link
                  href={`/stati/${a.slug}`}
                  className="mt-5 font-semibold text-accent hover:underline"
                >
                  Читать →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <CtaBand text="Остались вопросы по вашему объекту? Позвоните — подскажем без общих слов." />
          </div>
        </div>
      </section>
    </>
  );
}
