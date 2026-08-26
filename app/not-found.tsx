import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section-pad bg-bg-deep text-white">
      <div className="container-x px-4 pb-20 pt-32 sm:px-6 lg:px-0">
        <p className="eyebrow text-orange-400">Ошибка 404</p>
        <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
          Такой страницы нет
        </h1>
        <p className="mt-5 max-w-xl text-white/70 sm:text-lg">
          Возможно, страницу перенесли или в адресе опечатка. Загляните в
          каталог или позвоните — подскажем по телефону.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            На главную
          </Link>
          <Link href="/beton" className="btn btn-ghost">
            Марки бетона
          </Link>
          <a href={site.contacts.phoneHref} className="btn btn-ghost">
            {site.contacts.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
