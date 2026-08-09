import Image from "next/image";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

export default function About() {
  return (
    <section id="about" className="section-pad bg-panel">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">О компании</p>
          <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
            {site.company.legalName} — опора строек Глазова и Игры
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Более двух десятилетий мы производим и доставляем товарный бетон в
            Удмуртии. ООО «Монолит» — {site.company.position}: стабильное
            качество по ГОСТ и дисциплина поставок.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Работаем с частными заказчиками, подрядчиками и промышленными
            предприятиями. Один звонок — и команда подберёт марку, объём и
            график доставки.
          </p>
          <a href="#contacts" className="btn btn-primary mt-8">
            Связаться с нами
          </a>
        </div>

        <div className="space-y-4">
          <div className="relative min-h-[240px] overflow-hidden border border-line sm:min-h-[300px]">
            <Image
              src={photos.plant}
              alt="Производственная площадка"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-line bg-bg p-4 sm:p-5"
              >
                <div className="display text-2xl text-ink sm:text-3xl">
                  {stat.value}
                </div>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
