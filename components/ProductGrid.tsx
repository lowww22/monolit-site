import Link from 'next/link';
import { site } from '@/lib/site';
import type { Product, ProductKind } from '@/lib/catalog';

/** Сетка карточек марок бетона или раствора со ссылками на свои страницы. */
export default function ProductGrid({
  items,
  kind,
}: {
  items: Product[];
  kind: ProductKind;
}) {
  const label = kind === 'beton' ? 'Бетон' : 'Раствор';

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article
          key={p.slug}
          className="group flex flex-col border border-line bg-bg p-5 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
        >
          <h3 className="display text-xl leading-tight text-ink sm:text-2xl">
            <Link href={`/${kind}/${p.slug}`} className="hover:text-accent">
              {label} {p.mark}
              {kind === 'beton' && (
                <span className="ml-2 text-base text-muted">({p.cls})</span>
              )}
            </Link>
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {p.short}
          </p>

          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted">
            <dt>Прочность</dt>
            <dd className="text-right font-medium text-ink">{p.strength}</dd>
            <dt>Морозостойкость</dt>
            <dd className="text-right font-medium text-ink">{p.frost}</dd>
          </dl>

          <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted">
                стоимость
              </div>
              <div className="text-sm font-semibold text-ink">
                {site.showPrices ? `от ${p.price} ₽/м³` : 'по телефону'}
              </div>
            </div>
            <Link
              href={`/${kind}/${p.slug}`}
              className="text-sm font-semibold text-accent group-hover:text-accent-hover"
            >
              Подробнее →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
