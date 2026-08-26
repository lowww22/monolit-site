import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';
import { faqDelivery } from '@/lib/faq';
import { abs, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Доставка бетона в Глазове, Игре и по Удмуртии — миксером от 1 м³',
  description:
    'Доставка бетона и раствора собственными автобетоносмесителями по Глазову, Игре, Балезино, Яру, Кезу, Дебёсам и районам Удмуртии. Подаём миксер к согласованному часу. Тел. +7 (912) 850-17-11.',
  alternates: { canonical: '/dostavka' },
  openGraph: {
    title: 'Доставка бетона по Глазову, Игре и Удмуртии',
    description:
      'Собственный автопарк миксеров. Доставляем бетон от 1 м³ точно в график заливки.',
    url: abs('/dostavka'),
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Доставка бетона и раствора',
  serviceType: 'Доставка товарного бетона автобетоносмесителем',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: site.deliveryZones.map((z) => ({
    '@type': 'Place',
    name: z.name,
  })),
  url: abs('/dostavka'),
  description:
    'Доставка товарного бетона и строительного раствора автобетоносмесителями по Глазову, Игре и районам Удмуртской Республики.',
};

export default function DostavkaPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <PageHeader
        crumbs={[{ name: 'Доставка' }]}
        h1="Доставка бетона по Глазову, Игре и Удмуртии"
        lead="Собственный автопарк автобетоносмесителей. Подаём миксер к согласованному часу, чтобы бригада не простаивала, а бетон приезжал с сохранённой подвижностью."
      />

      <section className="section-pad bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Как мы возим бетон
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Товарный бетон — товар со сроком годности, который измеряется
              часами. После замеса смесь сохраняет рабочую подвижность около
              двух часов; дальше она начинает схватываться, и уложить её без
              потери прочности уже нельзя.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Поэтому мы работаем не «когда получится», а по графику: заранее
              согласуем время подачи, учитываем расстояние до объекта и
              распределяем машины так, чтобы при непрерывной заливке следующий
              миксер подходил вовремя.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Две производственные площадки — в Глазове и в Игринском районе —
              позволяют возить бетон в обе части республики, не выходя за
              безопасное время доставки.
            </p>
          </div>

          <div className="relative min-h-[300px] overflow-hidden border border-line sm:min-h-[400px]">
            <Image
              src={photos.mixer}
              alt="Автобетоносмеситель доставляет бетон на объект в Удмуртии"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Куда доставляем
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Возим бетон и раствор по всей северной и центральной Удмуртии. Если
            вашего населённого пункта нет в списке — позвоните, скорее всего,
            доедем.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.deliveryZones.map((zone) => (
              <article
                key={zone.name}
                className="flex gap-4 border border-line bg-panel p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                  <MapPin size={18} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{zone.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {zone.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <CtaBand text="Назовите адрес объекта — рассчитаем доставку и согласуем время." />
          </div>
        </div>
      </section>

      <section className="section-pad bg-panel">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Что подготовить к приезду миксера
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: 'Подъезд для техники',
                d: 'Автобетоносмеситель — тяжёлая машина. Нужен твёрдый подъезд и место для манёвра. Если подъезд сложный — скажите заранее.',
              },
              {
                t: 'Готовая опалубка',
                d: 'Опалубка собрана, армирование уложено, всё проверено. Миксер не должен ждать, пока бригада доделывает подготовку.',
              },
              {
                t: 'Бригада на месте',
                d: 'Выгрузка идёт непрерывно. Люди и инструмент — вибратор, правило, лопаты — должны быть готовы к приезду машины.',
              },
              {
                t: 'Точное время',
                d: 'Согласуйте час подачи заранее. При больших объёмах распишем интервалы между машинами, чтобы не было холодных швов.',
              },
            ].map((item) => (
              <article key={item.t} className="border border-line bg-bg p-6">
                <h3 className="text-lg font-semibold text-ink">{item.t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={faqDelivery}
        title="Вопросы о доставке бетона"
        className="bg-bg"
      />
    </>
  );
}
