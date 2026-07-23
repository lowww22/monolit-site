"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const HEADER_OFFSET = 72;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = site.nav.map((item) => item.href.replace("#", ""));

    const onScroll = () => {
      const y = window.scrollY + HEADER_OFFSET + 8;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(href: string) {
    const id = href.replace("#", "");
    setOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#0f1113] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="container-x flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-0">
        <a
          href="#hero"
          className="site-header__brand"
          onClick={(e) => {
            e.preventDefault();
            goTo("#hero");
          }}
        >
          <Logo />
        </a>

        <nav
          className="site-header__nav hidden items-center gap-5 xl:gap-7 lg:flex"
          aria-label="Навигация"
        >
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(item.href);
                }}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contacts.phoneHref}
            className="btn btn-primary hidden sm:inline-flex"
          >
            <Phone size={16} className="mr-2" aria-hidden />
            <span className="hidden md:inline">{site.contacts.phoneDisplay}</span>
            <span className="md:hidden">Позвонить</span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/20 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
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
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(item.href);
                  }}
                  className={isActive ? "is-active" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={site.contacts.phoneHref}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3"
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
