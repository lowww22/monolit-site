import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-bg-deep text-white"
    >
      <Image
        src={photos.hero}
        alt="Заливка товарного бетона на строительном объекте в Глазове"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"
        aria-hidden
      />

      <div className="relative z-10 container-x w-full px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:px-0 lg:pb-24 lg:pt-32">
        <p className="eyebrow animate-rise text-orange-400">
          {site.company.legalName} · {site.company.cities}
        </p>

        {/*
          H1 содержит основной поисковый запрос «купить бетон в Глазове».
          Раньше здесь стояло просто «МОНОЛИТ» — поисковики не понимали,
          о чём страница.
        */}
        <h1 className="display animate-rise-delay mt-4 max-w-4xl text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {site.hero.h1}
        </h1>

        <p className="animate-rise-delay mt-4 max-w-2xl text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
          {site.hero.subtitle}
        </p>

        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {site.hero.text}
        </p>

        <div className="animate-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={site.contacts.phoneHref} className="btn btn-primary">
            <Phone size={16} className="mr-2" aria-hidden />
            {site.contacts.phoneDisplay}
          </a>
          <Link href="/kontakty#zayavka" className="btn btn-ghost">
            Заявка на звонок
          </Link>
          <Link href="/kalkulyator" className="btn btn-ghost">
            Рассчитать объём
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-6">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <div className="display text-3xl text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/55 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
