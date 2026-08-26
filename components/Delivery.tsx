import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';

export default function Delivery() {
  return (
    <section id="delivery" className="section-pad bg-panel">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[280px] overflow-hidden border border-line sm:min-h-[360px]">
            <Image
              src={photos.mixer}
              alt="Автобетоносмеситель Монолит доставляет бетон на объект"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Доставка</p>
            <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
              Доставка бетона по Глазову, Игре и Удмуртии
            </h2>
            <p className="mt-4 text-muted sm:text-lg">
              Собственный автопарк автобетоносмесителей. Планируем поставки под
              ваш график заливки — бетон приезжает вовремя, бригада не стоит без
              работы.
            </p>

            <div className="mt-8 space-y-4">
              {site.deliveryZones.slice(0, 4).map((zone) => (
                <article
                  key={zone.name}
                  className="flex gap-4 border border-line bg-bg p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-bg-deep text-white">
                    <MapPin size={18} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{zone.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {zone.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link href="/dostavka" className="btn btn-dark mt-8 inline-flex">
              Все условия доставки →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
