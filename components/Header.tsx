'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { site } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Блокируем прокрутку страницы, пока открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Закрываем меню при переходе на другую страницу
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#0f1113] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="container-x flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-0">
        <Link href="/" className="site-header__brand" aria-label="На главную">
          <Logo />
        </Link>

        <nav
          className="site-header__nav hidden items-center gap-4 xl:gap-6 lg:flex"
          aria-label="Основная навигация"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'is-active' : undefined}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contacts.phoneHref}
            className="btn btn-primary hidden sm:inline-flex"
          >
            <Phone size={16} className="mr-2" aria-hidden />
            <span className="hidden md:inline">
              {site.contacts.phoneDisplay}
            </span>
            <span className="md:hidden">Позвонить</span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/20 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="site-header__mobile absolute inset-x-0 top-full max-h-[calc(100svh-64px)] overflow-y-auto border-t border-white/15 bg-[#0f1113] shadow-[0_16px_32px_rgba(0,0,0,0.45)] lg:hidden"
        >
          <nav className="flex flex-col px-4 py-4" aria-label="Мобильное меню">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? 'is-active' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.contacts.phoneHref}
              className="btn btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              <Phone size={16} className="mr-2" aria-hidden />
              {site.contacts.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
