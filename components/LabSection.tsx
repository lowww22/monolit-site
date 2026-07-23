import Image from "next/image";
import { Beaker, ClipboardCheck, Microscope } from "lucide-react";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

const icons = [Microscope, Beaker, ClipboardCheck];

export default function LabSection() {
  return (
    <section
      id="lab"
      className="section-pad relative overflow-hidden bg-bg-deep text-white"
    >
      <Image
        src={photos.lab}
        alt="Лабораторный контроль качества"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-bg-deep/85" aria-hidden />

      <div className="container-x relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-orange-400">Лаборатория</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">
              Исследования качества на каждом этапе
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Собственная лаборатория проверяет сырьё и готовую смесь. Вы
              получаете бетон по ГОСТ с документами на объект.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="display text-3xl">ГОСТ</div>
                <p className="mt-1 text-sm text-white/55">нормативный контроль</p>
              </div>
              <div className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="display text-3xl">100%</div>
                <p className="mt-1 text-sm text-white/55">партий на проверке</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {site.lab.map((item, i) => {
              const Icon = icons[i] ?? Beaker;
              return (
                <article
                  key={item.title}
                  className="flex gap-4 border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent">
                    <Icon size={20} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
