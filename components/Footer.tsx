import Link from 'next/link';
import Logo from '@/components/Logo';
import { site } from '@/lib/site';
import { concrete, mortar } from '@/lib/catalog';

/**
 * Подвал держит перелинковку всего сайта: из него доступна каждая
 * посадочная страница. Это помогает поисковикам быстрее найти и
 * проиндексировать страницы марок, а посетителю — не искать меню.
 */
export default function Footer() {
  return (
    <footer className="bg-bg-deep text-white">
      <div className="container-x grid gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-0 lg:py-16">
        <div>
          <Link href="/" className="inline-block text-white">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm leading-relaxed text-white/55">
            Крупнейший бетонный завод Глазовского района. Производство и
            доставка товарного бетона и раствора в Глазове, Игре и районах
            Удмуртии. Работаем по ГОСТ, {site.company.years} лет на рынке.
          </p>
          <a
            href={site.contacts.phoneHref}
            className="btn btn-primary mt-6 inline-flex"
          >
            {site.contacts.phoneDisplay}
          </a>
        </div>

        <div>
          <h2 className="footer-heading">Марки бетона</h2>
          <ul className="mt-4 space-y-2">
            {concrete.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/beton/${p.slug}`}
                  className="text-white/70 hover:text-white"
                >
                  Бетон {p.mark}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Раствор и материалы</h2>
          <ul className="mt-4 space-y-2">
            {mortar.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/rastvor/${p.slug}`}
                  className="text-white/70 hover:text-white"
                >
                  Раствор {p.mark}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cement" className="text-white/70 hover:text-white">
                Цемент
              </Link>
            </li>
            <li>
              <Link href="/shcheben" className="text-white/70 hover:text-white">
                Щебень и приём вагонов
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Компания</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/dostavka" className="text-white/70 hover:text-white">
                Доставка бетона
              </Link>
            </li>
            <li>
              <Link
                href="/kalkulyator"
                className="text-white/70 hover:text-white"
              >
                Калькулятор бетона
              </Link>
            </li>
            <li>
              <Link href="/glazov" className="text-white/70 hover:text-white">
                Бетон в Глазове
              </Link>
            </li>
            <li>
              <Link href="/igra" className="text-white/70 hover:text-white">
                Бетон в Игре
              </Link>
            </li>
            <li>
              <Link href="/stati" className="text-white/70 hover:text-white">
                Полезные статьи
              </Link>
            </li>
            <li>
              <Link
                href="/o-kompanii"
                className="text-white/70 hover:text-white"
              >
                О компании
              </Link>
            </li>
            <li>
              <Link href="/kontakty" className="text-white/70 hover:text-white">
                Контакты
              </Link>
            </li>
          </ul>

          <address className="mt-6 space-y-1 not-italic text-white/55">
            <p>{site.contacts.addressGlazov}</p>
            <p>{site.contacts.addressIgra}</p>
            <p>{site.contacts.hours}</p>
            <p>
              <a
                href={site.contacts.emailHref}
                className="hover:text-white"
              >
                {site.contacts.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/40">
        © {new Date().getFullYear()} {site.company.legalName}. Бетон, раствор,
        цемент и щебень в Глазове и Игре.
      </div>
    </footer>
  );
}
