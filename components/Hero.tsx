import Image from "next/image";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-bg-deep text-white"
    >
      <Image
        src={photos.hero}
        alt="Заливка бетона на строительном объекте"
        fill
        priority
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

        <h1 className="display animate-rise-delay mt-4 max-w-4xl text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {site.hero.title}
        </h1>

        <p className="animate-rise-delay mt-3 max-w-2xl text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
          {site.hero.subtitle}
        </p>

        <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          {site.hero.text}
        </p>

        <div className="animate-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contacts" className="btn btn-primary">
            Заявка на звонок
          </a>
          <a href={site.contacts.phoneHref} className="btn btn-ghost">
            {site.contacts.phoneDisplay}
          </a>
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
