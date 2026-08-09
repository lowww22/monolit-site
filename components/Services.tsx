import { Container, Phone, TrainFront } from "lucide-react";
import { site } from "@/lib/site";

const icons = [TrainFront, Container, Phone];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-panel">
      <div className="container-x">
        <p className="eyebrow">Услуги</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
          Приём вагонов и выгрузка щебня
        </h2>
        <p className="mt-4 max-w-2xl text-muted sm:text-lg">
          Помимо бетона и раствора принимаем железнодорожные вагоны и выполняем
          выгрузку щебня на площадке завода.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {site.services.map((item, i) => {
            const Icon = icons[i] ?? TrainFront;
            return (
              <article
                key={item.title}
                className="border border-line bg-bg p-6 transition hover:border-accent/40"
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

        <div className="mt-8 flex flex-wrap items-center gap-4 border border-line bg-bg-deep p-5 text-white">
          <p className="flex-1 text-white/75">
            График подачи вагонов и условия выгрузки уточняйте по телефону.
          </p>
          <a href={site.contacts.phoneHref} className="btn btn-primary">
            {site.contacts.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
