import Link from 'next/link';
import { concrete, mortar } from '@/lib/catalog';
import ProductGrid from '@/components/ProductGrid';
import { site } from '@/lib/site';

/** Краткий каталог на главной: ведёт на полные разделы и страницы марок. */
export default function Catalog() {
  return (
    <section id="catalog" className="section-pad bg-panel">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Каталог продукции</p>
            <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
              Товарный бетон всех марок и раствор
            </h2>
            <p className="mt-4 max-w-2xl text-muted sm:text-lg">
              Производим товарный бетон М100–М500 (классы В7,5–В40) по ГОСТ
              26633-2015 и строительный раствор М50–М200. Подберём состав под
              ваш объект и доставим в Глазов, Игру и районы Удмуртии.
            </p>
          </div>
          <a
            href={site.contacts.phoneHref}
            className="btn btn-dark shrink-0 self-start"
          >
            Уточнить цену
          </a>
        </div>

        <div className="mt-12">
          <h3 className="display text-2xl text-ink sm:text-3xl">
            Товарный бетон
          </h3>
          <p className="mt-2 text-muted">
            Класс по прочности (В) и марка (М) — например, В22,5 соответствует
            М300
          </p>
          <ProductGrid items={concrete.slice(0, 6)} kind="beton" />
          <Link
            href="/beton"
            className="btn btn-dark mt-6 inline-flex"
          >
            Все марки бетона →
          </Link>
        </div>

        <div className="mt-14">
          <h3 className="display text-2xl text-ink sm:text-3xl">
            Строительный раствор
          </h3>
          <p className="mt-2 text-muted">
            Марки М50–М200 для кладки, монтажа и отделочных работ
          </p>
          <ProductGrid items={mortar.slice(0, 3)} kind="rastvor" />
          <Link
            href="/rastvor"
            className="btn btn-dark mt-6 inline-flex"
          >
            Все марки раствора →
          </Link>
        </div>
      </div>
    </section>
  );
}
