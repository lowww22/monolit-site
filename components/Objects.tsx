import Image from "next/image";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

const objectImages = [photos.building, photos.construction, photos.industrial];

export default function Objects() {
  return (
    <section id="objects" className="section-pad bg-bg">
      <div className="container-x">
        <p className="eyebrow">Объекты</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl md:text-5xl">
          Бетон для любого масштаба строительства
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {site.objects.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden border border-line bg-panel"
            >
              <div className="relative h-48">
                <Image
                  src={objectImages[index] ?? photos.construction}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="display absolute bottom-4 left-4 text-3xl text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
