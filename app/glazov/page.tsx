import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Phone, Truck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import CtaBand from '@/components/CtaBand';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import { concrete } from '@/lib/catalog';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';
import { abs } from '@/lib/seo';
import type { Faq } from '@/lib/faq';

export const metadata: Metadata = {
  title: site.showPrices
    ? 'Бетон в Глазове — цены за куб, доставка от завода'
    : 'Бетон в Глазове с доставкой — завод на Юкаменской, 29',
  description:
    'Бетон в Глазове от производителя: товарный бетон М100–М500, раствор, доставка миксером от 1 м³. Завод на ул. Юкаменской, 29. Работаем ежедневно 8:00–18:00. Тел. +7 (912) 850-17-11.',
  alternates: { canonical: '/glazov' },
  openGraph: {
    title: 'Бетон в Глазове — завод «Монолит» на Юкаменской, 29',
    description:
      'Бетонный завод в Глазове: товарный бетон всех марок с доставкой по городу и Глазовскому району.',
    url: abs('/glazov'),
  },
};

const faq: Faq[] = [
  {
    q: 'Где в Глазове можно купить бетон?',
    a: 'Наш завод находится в Глазове по адресу ул. Юкаменская, 29. Отгружаем товарный бетон и раствор ежедневно с 8:00 до 18:00. Заказ оформляется по телефону +7 (912) 850-17-11 — приезжать на завод для этого не нужно.',
  },
  {
    q: 'Как быстро привезут бетон по Глазову?',
    a: 'По городу мы чаще всего отгружаем в день обращения. В разгар строительного сезона лучше согласовать время за день — так мы гарантированно подадим миксер к нужному часу и бригада не будет ждать.',
  },
  {
    q: 'Какой минимальный объём заказа по Глазову?',
    a: 'Отгружаем от 1 м³. Для малых объёмов доставка считается отдельно, при заказе от нескольких кубов условия заметно выгоднее.',
  },
  {
    q: 'Возите ли бетон в Глазовский район?',
    a: 'Да, обслуживаем весь Глазовский район, а также Балезино, Яр и Юкаменское. График подачи согласуем заранее.',
  },
];

export default function GlazovPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: 'Бетон в Глазове' }]}
        h1="Купить бетон в Глазове с доставкой"
        lead="ООО «Монолит» — бетонный завод в Глазове на улице Юкаменской, 29. Производим товарный бетон М100–М500 и строительный раствор по ГОСТ, доставляем миксерами по городу и Глазовскому району. Работаем ежедневно 8:00–18:00."
      />

      <section className="section-pad bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Бетонный завод в Глазове
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Мы работаем в Глазове более двадцати лет и знаем местную
              специфику: грунты, климат, сроки строительного сезона. За это
              время через наш завод прошли сотни объектов — от частных
              фундаментов в частном секторе до промышленных площадок.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Производительность до 200 м³ в час позволяет закрывать и разовый
              заказ на куб бетона для отмостки, и непрерывную заливку большой
              монолитной плиты, где перерыв недопустим.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                  <MapPin size={18} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Адрес завода</h3>
                  <p className="text-muted">{site.contacts.addressGlazov}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                  <Clock size={18} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Режим работы</h3>
                  <p className="text-muted">{site.contacts.hours}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                  <Truck size={18} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Доставка</h3>
                  <p className="text-muted">
                    По Глазову и Глазовскому району, от 1 м³
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-white">
                  <Phone size={18} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Заказ по телефону</h3>
                  <a
                    href={site.contacts.phoneHref}
                    className="text-lg font-semibold text-accent hover:underline"
                  >
                    {site.contacts.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative min-h-[320px] overflow-hidden border border-line sm:min-h-[420px]">
            <Image
              src={photos.plant}
              alt="Бетонный завод ООО «Монолит» в Глазове"
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
            Марки бетона с доставкой по Глазову
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Для фундамента частного дома чаще всего берут М200–М300, для стяжек
            и дорожек — М150, для промышленных объектов — М350 и выше.
          </p>
          <ProductGrid items={concrete.slice(0, 6)} kind="beton" />
          <Link href="/beton" className="btn btn-dark mt-6 inline-flex">
            Все марки бетона →
          </Link>
        </div>
      </section>

      <FaqSection items={faq} title="Вопросы о бетоне в Глазове" />

      <section className="section-pad bg-bg">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Оставьте заявку
            </h2>
            <p className="mt-4 text-muted sm:text-lg">
              Перезвоним в рабочее время, уточним объём и адрес объекта в
              Глазове, назовём стоимость с доставкой.
            </p>
            <div className="mt-8">
              <CtaBand compact text="Или позвоните прямо сейчас" />
            </div>
          </div>
          <div className="border border-line bg-panel p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
