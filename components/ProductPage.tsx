import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SpecTable from '@/components/SpecTable';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';
import { abs, SITE_URL } from '@/lib/seo';
import type { Faq } from '@/lib/faq';
import {
  concrete,
  mortar,
  type Product,
  type ProductKind,
} from '@/lib/catalog';

export default function ProductPage({
  product,
  kind,
}: {
  product: Product;
  kind: ProductKind;
}) {
  const isConcrete = kind === 'beton';
  const label = isConcrete ? 'Бетон' : 'Раствор';
  const sectionUrl = isConcrete ? '/beton' : '/rastvor';
  const sectionName = isConcrete ? 'Товарный бетон' : 'Строительный раствор';
  const siblings = (isConcrete ? concrete : mortar).filter(
    (p) => p.slug !== product.slug,
  );

  /*
   * Микроразметка товара — даёт расширенный сниппет с ценой в выдаче.
   * Выводится только вместе с ценами: товар без цены поисковики
   * считают ошибкой разметки (в Вебмастере и Search Console это видно).
   */
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${label} ${product.mark}${isConcrete ? ` (${product.cls})` : ''}`,
    description: product.description,
    image: abs('/images/plant.jpg'),
    category: sectionName,
    brand: { '@type': 'Brand', name: 'Монолит' },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    material: isConcrete
      ? 'Цемент, щебень, песок, вода'
      : 'Цемент, песок, вода',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Прочность на сжатие',
        value: product.strength,
      },
      {
        '@type': 'PropertyValue',
        name: 'Морозостойкость',
        value: product.frost,
      },
      ...(isConcrete
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Водонепроницаемость',
              value: product.water,
            },
            {
              '@type': 'PropertyValue',
              name: 'Класс по прочности',
              value: product.cls,
            },
          ]
        : []),
      {
        '@type': 'PropertyValue',
        name: 'Стандарт',
        value: isConcrete ? 'ГОСТ 26633-2015' : 'ГОСТ 28013-98',
      },
    ],
    offers: {
      '@type': 'Offer',
      url: abs(`${sectionUrl}/${product.slug}`),
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      areaServed: ['Глазов', 'Игра', 'Удмуртская Республика'],
      seller: { '@id': `${SITE_URL}/#organization` },
      ...(site.showPrices
        ? { price: String(product.price), priceValidUntil: '2027-12-31' }
        : {}),
    },
  };

  /* Вопросы, привязанные к конкретной марке */
  const faq: Faq[] = [
    {
      q: `Сколько стоит куб бетона ${product.mark} в Глазове?`,
      a: site.showPrices
        ? `${label} ${product.mark} — от ${product.price.toLocaleString('ru-RU')} ₽ за 1 м³ без доставки. Стоимость доставки зависит от объёма и расстояния до объекта: менеджер посчитает её по телефону ${site.contacts.phoneDisplay}.`
        : `Стоимость ${label.toLowerCase()}а ${product.mark} зависит от объёма заказа и расстояния доставки. Актуальную цену на сегодня назовёт менеджер по телефону ${site.contacts.phoneDisplay} — расчёт делаем сразу вместе с доставкой на ваш адрес.`,
    },
    ...(isConcrete
      ? [
          {
            q: `Какому классу соответствует бетон ${product.mark}?`,
            a: `Марка ${product.mark} соответствует классу прочности ${product.cls} по ГОСТ 26633-2015. Средняя прочность на сжатие — ${product.strength}, морозостойкость ${product.frost}, водонепроницаемость ${product.water}.`,
          },
          {
            q: `Сколько цемента в кубе бетона ${product.mark}?`,
            a: `Ориентировочный расход портландцемента ПЦ400 для ${product.mark} — около ${product.cement} кг на 1 м³. Точная цифра зависит от рецептуры, фракции заполнителя и влажности сырья.`,
          },
        ]
      : []),
    {
      q: `Доставляете ${label.toLowerCase()} ${product.mark} в Игру и районы Удмуртии?`,
      a: `Да. У нас две площадки — в Глазове на ул. Юкаменской, 29 и в Игринском районе, д. Сундур. Возим в Глазов, Игру, Балезино, Яр, Кез, Дебёсы, Красногорское, Юкаменское и другие населённые пункты республики.`,
    },
  ];

  return (
    <>
      {site.showPrices && <JsonLd data={productJsonLd} />}

      <PageHeader
        crumbs={[
          { name: sectionName, href: sectionUrl },
          { name: `${label} ${product.mark}` },
        ]}
        h1={`${label} ${product.mark}${
          isConcrete ? ` (${product.cls})` : ''
        } в Глазове и Игре`}
        lead={`${product.short}. Производство по ${
          isConcrete ? 'ГОСТ 26633-2015' : 'ГОСТ 28013-98'
        }, доставка миксером по Глазову, Игре и районам Удмуртии.`}
      />

      {/* Описание + характеристики */}
      <section className="section-pad bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display text-2xl text-ink sm:text-3xl">
              Что такое {label.toLowerCase()} {product.mark}
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              {product.description}
            </p>

            <h3 className="mt-8 text-xl font-semibold text-ink">
              Где применяется
            </h3>
            <ul className="mt-4 space-y-3">
              {product.uses.map((use) => (
                <li key={use} className="flex gap-3 text-muted">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={13} aria-hidden />
                  </span>
                  <span className="leading-relaxed">{use}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display text-2xl text-ink sm:text-3xl">
              Технические характеристики
            </h2>
            <div className="mt-4">
              <SpecTable product={product} kind={kind} />
            </div>

            <div className="relative mt-6 min-h-[200px] overflow-hidden border border-line sm:min-h-[240px]">
              <Image
                src={photos.plant}
                alt={`Производство ${label.toLowerCase()}а ${product.mark} на заводе Монолит`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6">
              <CtaBand
                compact
                text={`Заказать ${label.toLowerCase()} ${product.mark} с доставкой`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Условия заказа */}
      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-2xl text-ink sm:text-3xl">
            Как заказать {label.toLowerCase()} {product.mark}
          </h2>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: '01',
                t: 'Звонок',
                d: `Позвоните ${site.contacts.phoneDisplay} или оставьте заявку — ответим ${site.contacts.hoursShort}.`,
              },
              {
                n: '02',
                t: 'Расчёт',
                d: 'Уточним объём, адрес и время заливки. Назовём цену с доставкой.',
              },
              {
                n: '03',
                t: 'Производство',
                d: 'Замешиваем смесь под ваш заказ и контролируем характеристики.',
              },
              {
                n: '04',
                t: 'Доставка',
                d: 'Миксер приезжает к согласованному часу — бригада не простаивает.',
              },
            ].map((s) => (
              <li key={s.n} className="border border-line bg-panel p-6">
                <div className="display text-3xl text-accent/80">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection items={faq} title={`Вопросы о ${label.toLowerCase()}е ${product.mark}`} />

      {/* Перелинковка на соседние марки */}
      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-2xl text-ink sm:text-3xl">
            Другие марки
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {siblings.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`${sectionUrl}/${p.slug}`}
                  className="inline-block border border-line bg-panel px-4 py-2.5 font-medium text-ink transition hover:border-accent hover:text-accent"
                >
                  {label} {p.mark}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CtaBand />
          </div>
        </div>
      </section>
    </>
  );
}
