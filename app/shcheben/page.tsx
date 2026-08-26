import type { Metadata } from 'next';
import Image from 'next/image';
import { Container, Phone, TrainFront } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';
import { abs, SITE_URL } from '@/lib/seo';
import type { Faq } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'Щебень в Глазове: приём вагонов и выгрузка — ООО «Монолит»',
  description:
    'Приём железнодорожных вагонов и выгрузка щебня в Глазове собственной техникой завода. Поставка щебня для строительства. Согласуем график подачи. Тел. +7 (912) 850-17-11.',
  alternates: { canonical: '/shcheben' },
  openGraph: {
    title: 'Щебень, приём вагонов и выгрузка — ООО «Монолит» Глазов',
    description:
      'Принимаем железнодорожные вагоны и выгружаем щебень собственной техникой на площадке завода в Глазове.',
    url: abs('/shcheben'),
  },
};

const faq: Faq[] = [
  {
    q: 'Как организован приём вагонов?',
    a: 'Мы согласуем с вами график подачи вагонов на площадку завода, принимаем состав и выполняем выгрузку собственной техникой. Работаем так, чтобы не допустить простоя вагонов и связанных с ним расходов.',
  },
  {
    q: 'Какой щебень вы поставляете?',
    a: 'Щебень используется и для собственного производства бетона, и для поставки заказчикам. Доступные фракции, объёмы и условия отгрузки уточняйте по телефону — наличие меняется.',
  },
  {
    q: 'Сколько стоит выгрузка щебня из вагона?',
    a: 'Стоимость зависит от объёма, сроков и графика подачи. Позвоните, опишите задачу — рассчитаем и назовём условия.',
  },
  {
    q: 'Где находится площадка?',
    a: 'Основная площадка расположена в Глазове по адресу ул. Юкаменская, 29. Вторая производственная площадка — в Игринском районе, д. Сундур, ул. Производственная, 4.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Приём железнодорожных вагонов и выгрузка щебня',
  serviceType: 'Приём вагонов, выгрузка щебня, поставка щебня',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'Place', name: 'Глазов' },
    { '@type': 'Place', name: 'Глазовский район' },
    { '@type': 'Place', name: 'Удмуртская Республика' },
  ],
  url: abs('/shcheben'),
  description:
    'Приём железнодорожных вагонов на площадке завода в Глазове, выгрузка щебня собственной техникой, поставка щебня заказчикам.',
};

export default function ShchebenPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <PageHeader
        crumbs={[{ name: 'Щебень и приём вагонов' }]}
        h1="Щебень, приём вагонов и выгрузка в Глазове"
        lead="Помимо производства бетона мы принимаем железнодорожные вагоны и выполняем выгрузку щебня собственной техникой на площадке завода. Работаем по согласованному графику — без простоя вагонов."
      />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="display text-3xl text-ink sm:text-4xl">
                Услуги по щебню
              </h2>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                Площадка завода в Глазове оборудована для приёма
                железнодорожных составов. Мы берём на себя весь цикл: согласуем
                график подачи, принимаем вагоны, выгружаем щебень техникой
                предприятия и размещаем его на площадке.
              </p>

              <div className="mt-8 space-y-4">
                {site.services.map((item, i) => {
                  const Icon = [TrainFront, Container, Phone][i] ?? TrainFront;
                  return (
                    <article
                      key={item.title}
                      className="flex gap-4 border border-line bg-bg p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                        <Icon size={18} aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink">{item.title}</h3>
                        <p className="mt-1 leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden border border-line sm:min-h-[420px]">
              <Image
                src={photos.industrial}
                alt="Выгрузка щебня на производственной площадке в Глазове"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10">
            <CtaBand text="График подачи вагонов и условия выгрузки — обсудим по телефону." />
          </div>
        </div>
      </section>

      <FaqSection
        items={faq}
        title="Вопросы о щебне и приёме вагонов"
        className="bg-bg"
      />
    </>
  );
}
