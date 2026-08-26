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
  title: 'Купить бетон в Игре с доставкой — завод ООО «Монолит»',
  description:
    'Бетон в Игре и Игринском районе от производителя. Площадка в д. Сундур, ул. Производственная, 4. Товарный бетон М100–М500, раствор, доставка миксером. Тел. +7 (912) 850-17-11.',
  alternates: { canonical: '/igra' },
  openGraph: {
    title: 'Купить бетон в Игре — ООО «Монолит»',
    description:
      'Производственная площадка в Игринском районе: товарный бетон всех марок с доставкой по посёлку и району.',
    url: abs('/igra'),
  },
};

const faq: Faq[] = [
  {
    q: 'Где купить бетон в Игре?',
    a: 'Наша производственная площадка расположена в Игринском районе, д. Сундур, ул. Производственная, 4. Оттуда мы отгружаем бетон и раствор на объекты Игры и района. Заказ оформляется по телефону +7 (912) 850-17-11.',
  },
  {
    q: 'Доставляете бетон по Игринскому району?',
    a: 'Да, обслуживаем весь Игринский район, а также Кез и Дебёсы. Благодаря собственной площадке в Сундуре смесь приезжает на объекты района свежей, с запасом по времени схватывания.',
  },
  {
    q: 'Можно ли забрать бетон самовывозом?',
    a: 'Условия самовывоза обсуждаются индивидуально — нужна подходящая техника для перевозки товарной смеси. Позвоните, обсудим ваш случай.',
  },
  {
    q: 'Работаете ли с организациями по безналичному расчёту?',
    a: 'Да, работаем и с частными заказчиками, и с организациями. Условия оплаты уточняйте при оформлении заказа.',
  },
];

export default function IgraPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: 'Бетон в Игре' }]}
        h1="Купить бетон в Игре с доставкой"
        lead="Вторая производственная площадка ООО «Монолит» работает в Игринском районе — д. Сундур, ул. Производственная, 4. Отсюда мы возим товарный бетон и раствор на объекты Игры, Игринского района, Кеза и Дебёс."
      />

      <section className="section-pad bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden border border-line sm:min-h-[420px]">
            <Image
              src={photos.mixer}
              alt="Доставка бетона в Игринский район автобетоносмесителем"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Площадка в Игринском районе
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Товарный бетон сохраняет рабочую подвижность около двух часов
              после замеса. Именно поэтому мы держим отдельную площадку в
              Сундуре: смесь для объектов Игры и района не едет через полреспублики,
              а приходит свежей и укладывается без потери качества.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Марки, рецептура и контроль качества — те же, что на основном
              заводе в Глазове. Работаем по ГОСТ 26633-2015.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                  <MapPin size={18} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Адрес площадки</h3>
                  <p className="text-muted">{site.contacts.addressIgra}</p>
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
                  <h3 className="font-semibold text-ink">Зона доставки</h3>
                  <p className="text-muted">
                    Игра, Игринский район, Кез, Дебёсы
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
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Марки бетона с доставкой в Игру
          </h2>
          <ProductGrid items={concrete.slice(0, 6)} kind="beton" />
          <Link href="/beton" className="btn btn-dark mt-6 inline-flex">
            Все марки бетона →
          </Link>
        </div>
      </section>

      <FaqSection items={faq} title="Вопросы о бетоне в Игре" />

      <section className="section-pad bg-bg">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Оставьте заявку
            </h2>
            <p className="mt-4 text-muted sm:text-lg">
              Перезвоним, уточним объём и адрес объекта, согласуем время подачи
              миксера.
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
