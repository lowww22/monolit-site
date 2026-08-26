import Link from 'next/link';
import { Container, Factory, Layers, Package } from 'lucide-react';
import { site } from '@/lib/site';

const products = [
  {
    title: 'Товарный бетон',
    href: '/beton',
    description:
      'Марки М100–М500 по ГОСТ 26633-2015. Фундаменты, плиты, стяжки, монолит. Отгружаем от 1 м³.',
    Icon: Factory,
  },
  {
    title: 'Строительный раствор',
    href: '/rastvor',
    description:
      'Марки М50–М200 для кладки кирпича и блоков, штукатурных работ и стяжек.',
    Icon: Layers,
  },
  {
    title: 'Щебень',
    href: '/shcheben',
    description:
      'Приём железнодорожных вагонов и выгрузка щебня собственной техникой. Поставка щебня заказчикам.',
    Icon: Container,
  },
  {
    title: 'Цемент',
    href: '/cement',
    description:
      'Продажа цемента разных марок. Подберём под задачу и организуем поставку.',
    Icon: Package,
  },
] as const;

export default function ProductsBlocks() {
  return (
    <section className="section-pad bg-bg">
      <div className="container-x">
        <p className="eyebrow">Продукция и услуги</p>
        <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
          Бетон, раствор, щебень и цемент
        </h2>
        <p className="mt-4 max-w-2xl text-muted sm:text-lg">
          Подберём марку, рассчитаем объём и организуем поставку на ваш объект
          в Глазове, Игре и районах Удмуртии.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ title, href, description, Icon }) => (
            <article
              key={title}
              className="flex flex-col border border-line bg-panel p-6 transition hover:border-accent/40 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-bg-deep text-white">
                <Icon size={22} aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-ink">
                <Link href={href} className="hover:text-accent">
                  {title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {description}
              </p>
              <div className="mt-6">
                <Link href={href} className="btn btn-primary">
                  Подробнее →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border border-line bg-bg-deep p-5 text-white">
          <p className="flex-1 min-w-[220px] text-white/75">
            Наличие и цены уточняйте по телефону — ответим в рабочее время{' '}
            {site.contacts.hours.toLowerCase()}.
          </p>
          <a href={site.contacts.phoneHref} className="btn btn-primary">
            {site.contacts.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
