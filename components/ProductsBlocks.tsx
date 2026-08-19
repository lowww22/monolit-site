import { Container, Factory, Package } from "lucide-react";
import { site } from "@/lib/site";

const products = [
  {
    title: "Бетон",
    href: "#catalog",
    description:
      "Товарный бетон всех марок и строительный раствор. Подбор состава — по телефону.",
    Icon: Factory,
  },
  {
    title: "Щебень",
    href: "#services",
    description:
      "Приём вагонов и выгрузка щебня. Поставка щебня — по телефону.",
    Icon: Container,
  },
  {
    title: "Цемент",
    href: "#cement",
    description: "Продажа цемента разных марок. Подбор и условия уточняйте по телефону.",
    Icon: Package,
  },
] as const;

export default function ProductsBlocks() {
  return (
    <section className="section-pad bg-bg">
      <div className="container-x">
        <p className="eyebrow">Продажа</p>
        <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
          Бетон, щебень, цемент
        </h2>
        <p className="mt-4 max-w-2xl text-muted sm:text-lg">
          Подберём марку, объём и организуем поставку под ваш объект в Глазове, Игре и районах Удмуртии.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map(({ title, href, description, Icon }) => (
            <article
              key={title}
              className="border border-line bg-panel p-6 transition hover:border-accent/40 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-bg-deep text-white">
                <Icon size={22} aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{description}</p>

              <div className="mt-6">
                <a href={href} className="btn btn-primary">
                  Подробнее →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border border-line bg-bg-deep p-5 text-white">
          <p className="flex-1 text-white/75">
            Наличие и цены уточняйте по телефону — ответим в рабочее время {site.contacts.hours}.
          </p>
          <a href={site.contacts.phoneHref} className="btn btn-primary">
            {site.contacts.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

