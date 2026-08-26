import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { articles, getArticle } from '@/lib/articles';
import { abs, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/stati/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: abs(`/stati/${article.slug}`),
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'ru-RU',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': abs(`/stati/${article.slug}`),
    },
    image: abs('/images/plant.jpg'),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHeader
        crumbs={[
          { name: 'Статьи', href: '/stati' },
          { name: article.h1 },
        ]}
        h1={article.h1}
        lead={article.lead}
      />

      <article className="section-pad bg-panel">
        <div className="container-x">
          <div className="prose-x max-w-3xl">
            {article.sections.map((s) => (
              <section key={s.h2} className="mt-10 first:mt-0">
                <h2 className="display text-2xl text-ink sm:text-3xl">
                  {s.h2}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 leading-relaxed text-muted sm:text-lg"
                  >
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-2">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-muted">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span className="leading-relaxed">{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <CtaBand text="Нужен бетон на объект в Глазове или Игре? Подберём марку и посчитаем объём." />
          </div>
        </div>
      </article>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-2xl text-ink sm:text-3xl">
            Другие статьи
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/stati/${a.slug}`}
                className="border border-line bg-panel p-5 transition hover:border-accent/50"
              >
                <h3 className="font-semibold text-ink">{a.h1}</h3>
                <span className="mt-2 block text-sm text-accent">Читать →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
