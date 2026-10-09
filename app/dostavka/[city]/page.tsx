import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import CtaBand from '@/components/CtaBand';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { cities, getCity } from '@/lib/cities';
import { concrete } from '@/lib/catalog';
import { site } from '@/lib/site';
import { abs, SITE_URL } from '@/lib/seo';
import type { Faq } from '@/lib/faq';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};

  const title = site.showPrices
    ? `Бетон ${c.inCity} — цена за куб с доставкой`
    : `Купить бетон ${c.inCity} с доставкой от завода`;
  const description = `Доставка товарного бетона и раствора ${c.inCity} и ${c.overDistrict}. Марки М100–М500 по ГОСТ, отгрузка от 1 м³, собственные миксеры. Тел. ${site.contacts.phoneDisplay}.`;

  return {
    title,
    description,
    alternates: { canonical: `/dostavka/${c.slug}` },
    openGraph: { title, description, url: abs(`/dostavka/${c.slug}`) },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const others = cities.filter((x) => x.slug !== c.slug);

  const faq: Faq[] = [
    {
      q: `Сколько стоит бетон с доставкой ${c.inCity}?`,
      a: `Цена складывается из марки бетона, объёма заказа и расстояния до объекта. Точную сумму назовёт менеджер по телефону ${site.contacts.phoneDisplay} — посчитаем сразу с доставкой ${c.inCity}.`,
    },
    {
      q: `Откуда везёте бетон ${c.inCity}?`,
      a: `С площадки в ${c.from === 'Глазов' ? 'Глазове, ул. Юкаменская, 29' : 'Игринском районе, д. Сундур, ул. Производственная, 4'}. Это ближайшее к вам производство, поэтому смесь приезжает с запасом по времени схватывания.`,
    },
    {
      q: 'За сколько нужно заказывать?',
      a: 'Лучше согласовать за день до заливки — тогда мы гарантированно подадим миксер к нужному часу. В несезон часто получается отгрузить и в день обращения.',
    },
    {
      q: 'Какой минимальный объём?',
      a: 'Отгружаем от 1 м³. Для небольших объёмов доставка рассчитывается отдельно, при заказе от нескольких кубометров условия заметно выгоднее.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Доставка бетона ${c.inCity}`,
    serviceType: 'Доставка товарного бетона автобетоносмесителем',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'Place', name: c.name },
      { '@type': 'Place', name: c.district },
    ],
    url: abs(`/dostavka/${c.slug}`),
    description: `Доставка товарного бетона марок М100–М500 и строительного раствора ${c.inCity} и ${c.overDistrict}.`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHeader
        crumbs={[
          { name: 'Доставка', href: '/dostavka' },
          { name: c.name },
        ]}
        h1={`Купить бетон ${c.inCity} с доставкой`}
        lead={`Возим товарный бетон марок М100–М500 и строительный раствор ${c.inCity} и ${c.overDistrict}. Работаем ежедневно ${site.contacts.hoursShort}, отгружаем от 1 м³.`}
      />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="display text-2xl text-ink sm:text-3xl">
                Доставка {c.inCity}
              </h2>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                {c.intro}
              </p>

              <ul className="mt-6 space-y-3">
                {c.notes.map((n) => (
                  <li key={n} className="flex gap-3 text-muted">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check size={13} aria-hidden />
                    </span>
                    <span className="leading-relaxed">{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="display text-2xl text-ink sm:text-3xl">
                Что учесть при заказе
              </h2>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                Товарный бетон сохраняет рабочую подвижность около двух часов
                после замеса. Поэтому мы не возим «когда получится», а
                согласуем точное время подачи: к приезду миксера опалубка
                должна быть собрана, арматура уложена, бригада на месте.
              </p>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                Отдельно уточните подъезд к точке заливки. Автобетоносмеситель
                — тяжёлая машина, ей нужна твёрдая площадка и место для
                манёвра. Если подъезд сложный, скажите заранее — обсудим, как
                подать бетон.
              </p>

              <div className="mt-8">
                <CtaBand
                  compact
                  text={`Назовите адрес ${c.inCity} — рассчитаем доставку`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-2xl text-ink sm:text-3xl">
            Марки бетона с доставкой {c.inCity}
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Для фундамента частного дома обычно берут М200–М300, для стяжек и
            дорожек достаточно М150, для промышленных объектов — М350 и выше.
          </p>
          <ProductGrid items={concrete.slice(0, 6)} kind="beton" />
          <Link href="/beton" className="btn btn-dark mt-6 inline-flex">
            Все марки бетона →
          </Link>
        </div>
      </section>

      <FaqSection items={faq} title={`Вопросы о доставке ${c.inCity}`} />

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-2xl text-ink sm:text-3xl">
            Другие направления доставки
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            <li>
              <Link
                href="/glazov"
                className="inline-block border border-line bg-panel px-4 py-2.5 font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Глазов
              </Link>
            </li>
            <li>
              <Link
                href="/igra"
                className="inline-block border border-line bg-panel px-4 py-2.5 font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Игра
              </Link>
            </li>
            {others.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/dostavka/${x.slug}`}
                  className="inline-block border border-line bg-panel px-4 py-2.5 font-medium text-ink transition hover:border-accent hover:text-accent"
                >
                  {x.name}
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
