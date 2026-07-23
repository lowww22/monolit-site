import Image from "next/image";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

export default function Production() {
  return (
    <section id="production" className="section-pad bg-bg">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Производство</p>
            <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl md:text-5xl">
              Полный цикл — от сырья до объекта
            </h2>
            <p className="mt-4 max-w-2xl text-muted sm:text-lg">
              Контролируем каждый этап, чтобы смесь прибыла на стройку в срок и
              с нужными характеристиками.
            </p>
          </div>

          <div className="relative min-h-[200px] overflow-hidden border border-line sm:min-h-[240px]">
            <Image
              src={photos.plant}
              alt="Производство бетона"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.production.map((step) => (
            <article
              key={step.step}
              className="relative border border-line bg-panel p-6"
            >
              <div className="display text-4xl text-accent/80">{step.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
