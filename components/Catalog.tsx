import { site, type Grade } from "@/lib/site";

const concrete = site.grades.filter((item) => item.category === "concrete");
const mortar = site.grades.filter((item) => item.category === "mortar");

function concreteTitle(item: Grade) {
  const cls = item.class.replace(/^B/i, "").replace(".", ",");
  return `В ${cls} (${item.mark})`;
}

function ProductGrid({ items }: { items: readonly Grade[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <article
          key={item.grade}
          className="group flex flex-col border border-line bg-bg p-5 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
        >
          <div className="display text-xl leading-tight text-ink sm:text-2xl">
            {item.category === "concrete" ? concreteTitle(item) : item.name}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {item.use}
          </p>
          <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted">
                стоимость
              </div>
              <div className="text-sm font-semibold text-ink">по телефону</div>
            </div>
            <a
              href={site.contacts.phoneHref}
              className="text-sm font-semibold text-accent group-hover:text-accent-hover"
            >
              Узнать →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

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
              Производим товарный бетон классов В 7,5–В 40 (М100–М500) и
              строительный раствор М50–М200. Подберём состав под ваш объект.
              Цену уточняйте по телефону.
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
            Класс по прочности (В) и марка (М) — например В 7,5 (М100)
          </p>
          <ProductGrid items={concrete} />
        </div>

        <div className="mt-14">
          <h3 className="display text-2xl text-ink sm:text-3xl">
            Строительный раствор
          </h3>
          <p className="mt-2 text-muted">
            Марки М50–М200 для кладки, монтажа и отделочных работ
          </p>
          <ProductGrid items={mortar} />
        </div>

        <p className="mt-8 text-sm text-muted">
          Звоните{" "}
          <a
            href={site.contacts.phoneHref}
            className="font-semibold text-accent"
          >
            {site.contacts.phoneDisplay}
          </a>{" "}
          · {site.contacts.hours}
        </p>
      </div>
    </section>
  );
}
