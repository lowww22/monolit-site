import {
  Award,
  Beaker,
  Factory,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { site } from "@/lib/site";

const icons = [Award, Users, ShieldCheck, Beaker, Truck, Factory];

export default function Advantages() {
  return (
    <section id="advantages" className="section-pad bg-bg">
      <div className="container-x">
        <p className="eyebrow">Почему Монолит</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl md:text-5xl">
          Достоинства, на которых держится доверие региона
        </h2>
        <p className="mt-4 max-w-2xl text-muted sm:text-lg">
          Мы не просто поставляем бетон — обеспечиваем стройки Глазова и Игры
          стабильным качеством, сроками и лабораторным контролем.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.advantages.map((item, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <article
                key={item.title}
                className="border border-line bg-panel p-6 transition hover:border-accent/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-bg-deep text-white">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
