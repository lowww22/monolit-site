import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { abs } from '@/lib/seo';

export type Crumb = { name: string; href?: string };

/**
 * Хлебные крошки. Помимо навигации отдают поисковикам разметку
 * BreadcrumbList — Яндекс и Google показывают такой путь в сниппете
 * вместо длинного URL, это повышает кликабельность.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Главная', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: abs(item.href) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Хлебные крошки" className="breadcrumbs">
        <ol>
          {all.map((item, i) => (
            <li key={`${item.name}-${i}`}>
              {item.href && i < all.length - 1 ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
              {i < all.length - 1 && (
                <span className="breadcrumbs__sep" aria-hidden>
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
