"use client";

import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const HEADER_OFFSET = 72;

function goTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-bg-deep text-white">
      <div className="container-x grid gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-0 lg:py-16">
        <div>
          <a
            href="#hero"
            className="inline-block text-white"
            onClick={(e) => {
              e.preventDefault();
              goTo("#hero");
            }}
          >
            <Logo />
          </a>
          <p className="mt-4 max-w-sm leading-relaxed text-white/55">
            Производство и доставка товарного бетона в Глазове, Игре и районах
            Удмуртии. ГОСТ, лаборатория, {site.company.years} лет на рынке.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Навигация
          </h3>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/70 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Контакты
          </h3>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>
              <a href={site.contacts.phoneHref} className="hover:text-white">
                {site.contacts.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.contacts.phoneAltHref} className="hover:text-white">
                {site.contacts.phoneAltDisplay}
              </a>
            </li>
            <li>
              <a href={site.contacts.emailHref} className="hover:text-white">
                {site.contacts.email}
              </a>
            </li>
            <li>{site.contacts.addressGlazov}</li>
            <li>{site.contacts.addressIgra}</li>
            <li>{site.contacts.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/40">
        © {new Date().getFullYear()} {site.company.legalName}. Все права
        защищены.
      </div>
    </footer>
  );
}
