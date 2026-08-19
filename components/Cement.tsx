import Image from "next/image";
import { Package } from "lucide-react";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

export default function Cement() {
  return (
    <section id="cement" className="section-pad bg-panel">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Цемент</p>
          <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl md:text-5xl">
            Продажа цемента
          </h2>
          <p className="mt-4 max-w-2xl text-muted sm:text-lg">
            Подберём цемент нужной марки и организуем поставку. Наличие,
            условия и стоимость — по телефону.
          </p>

          <ul className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Package size={14} aria-hidden />
              </span>
              Подбор марки под задачи строительства
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-accent/20" />
              Консультация по условиям поставки
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-accent/20" />
              Ответим по графику работы {site.contacts.hours}
            </li>
          </ul>

          <a href={site.contacts.phoneHref} className="btn btn-primary mt-8">
            {site.contacts.phoneDisplay}
          </a>
        </div>

        <div className="relative min-h-[240px] overflow-hidden border border-line sm:min-h-[320px]">
          <Image
            src={photos.plant}
            alt="Цемент и строительные материалы"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

