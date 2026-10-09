import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';
import { abs } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Контакты бетонного завода в Глазове и Игре',
  description:
    'Контакты бетонного завода ООО «Монолит»: г. Глазов, ул. Юкаменская, 29 и Игринский район, д. Сундур, ул. Производственная, 4. Телефон +7 (912) 850-17-11, работаем ежедневно 8:00–18:00.',
  alternates: { canonical: '/kontakty' },
  openGraph: {
    title: 'Контакты «Монолит» — бетонный завод в Глазове и Игре',
    description:
      'Две производственные площадки, телефон и форма заявки. Работаем ежедневно 8:00–18:00.',
    url: abs('/kontakty'),
  },
};

const places = [
  {
    city: 'Глазов',
    address: site.contacts.addressGlazov,
    note: 'Основной завод. Отгрузка бетона и раствора, приём вагонов и выгрузка щебня.',
    zones: 'Глазов, Глазовский район, Балезино, Яр, Юкаменское',
    map: site.maps.glazov,
  },
  {
    city: 'Игринский район',
    address: site.contacts.addressIgra,
    note: 'Вторая производственная площадка в д. Сундур. Отгрузка на объекты Игры и района.',
    zones: 'Игра, Игринский район, Кез, Дебёсы',
    map: site.maps.igra,
  },
];

export default function KontaktyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: 'Контакты' }]}
        h1="Контакты ООО «Монолит»"
        lead="Две производственные площадки — в Глазове и в Игринском районе. Принимаем заказы ежедневно с 8:00 до 18:00, включая выходные."
      />

      <section className="section-pad bg-panel">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={site.contacts.phoneHref}
              className="group border border-line bg-bg p-6 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-accent text-white">
                <Phone size={18} aria-hidden />
              </span>
              <h2 className="mt-4 text-sm uppercase tracking-wider text-muted">
                Телефон
              </h2>
              <p className="mt-1 text-lg font-semibold text-ink group-hover:text-accent">
                {site.contacts.phoneDisplay}
              </p>
            </a>

            <a
              href={site.contacts.emailHref}
              className="group border border-line bg-bg p-6 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-accent text-white">
                <Mail size={18} aria-hidden />
              </span>
              <h2 className="mt-4 text-sm uppercase tracking-wider text-muted">
                Email
              </h2>
              <p className="mt-1 break-all text-lg font-semibold text-ink group-hover:text-accent">
                {site.contacts.email}
              </p>
            </a>

            <div className="border border-line bg-bg p-6">
              <span className="flex h-11 w-11 items-center justify-center bg-bg-deep text-white">
                <Clock size={18} aria-hidden />
              </span>
              <h2 className="mt-4 text-sm uppercase tracking-wider text-muted">
                Режим работы
              </h2>
              <p className="mt-1 text-lg font-semibold text-ink">
                {site.contacts.hours}
              </p>
            </div>

            <div className="border border-line bg-bg p-6">
              <span className="flex h-11 w-11 items-center justify-center bg-bg-deep text-white">
                <MapPin size={18} aria-hidden />
              </span>
              <h2 className="mt-4 text-sm uppercase tracking-wider text-muted">
                Зона доставки
              </h2>
              <p className="mt-1 font-semibold text-ink">{site.contacts.zone}</p>
            </div>
          </div>

          <h2 className="display mt-14 text-3xl text-ink sm:text-4xl">
            Производственные площадки
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {places.map((p) => (
              <article key={p.city} className="border border-line bg-bg p-6">
                <h3 className="display text-2xl text-ink">{p.city}</h3>
                <address className="mt-3 not-italic text-muted">
                  {p.address}
                </address>
                <p className="mt-4 leading-relaxed text-muted">{p.note}</p>
                <p className="mt-4 text-sm text-muted">
                  <strong className="text-ink">Доставка:</strong> {p.zones}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={p.map.open}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <MapPin size={16} aria-hidden className="mr-2" />
                    Открыть на карте
                  </a>
                  <a
                    href={p.map.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border border-line bg-panel text-ink hover:border-accent"
                  >
                    Проложить маршрут
                  </a>
                </div>
              </article>
            ))}
          </div>

          {site.requisites.inn && (
            <p className="mt-8 text-sm text-muted">
              {site.company.legalName}, ИНН {site.requisites.inn}
              {site.requisites.ogrn && `, ОГРН ${site.requisites.ogrn}`}
            </p>
          )}
        </div>
      </section>

      <section id="zayavka" className="section-pad bg-bg">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Заявка на звонок
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Оставьте контакты и параметры заказа — перезвоним в рабочее
              время, уточним детали и назовём стоимость с доставкой на ваш
              объект.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Если нужно срочно — быстрее позвонить:{' '}
              <a
                href={site.contacts.phoneHref}
                className="font-semibold text-accent hover:underline"
              >
                {site.contacts.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="border border-line bg-panel p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
