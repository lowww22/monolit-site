import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contacts" className="section-pad bg-panel">
      <div className="container-x">
        <div className="overflow-hidden border border-line bg-bg-deep text-white lg:grid lg:grid-cols-2">
          <div className="p-6 sm:p-8 md:p-12">
            <p className="eyebrow text-orange-400">Контакты</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">
              Закажите бетон для объекта
            </h2>
            <p className="mt-5 text-white/65 sm:text-lg">
              Подберём марку, рассчитаем объём и организуем доставку в{" "}
              {site.company.cities}.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent">
                  <Phone size={18} aria-hidden />
                </span>
                <div>
                  <div className="text-sm text-white/50">Телефон</div>
                  <a
                    href={site.contacts.phoneHref}
                    className="block text-lg font-semibold hover:text-orange-300"
                  >
                    {site.contacts.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent">
                  <Mail size={18} aria-hidden />
                </span>
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <a
                    href={site.contacts.emailHref}
                    className="text-lg font-semibold hover:text-orange-300"
                  >
                    {site.contacts.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent">
                  <MapPin size={18} aria-hidden />
                </span>
                <div>
                  <div className="text-sm text-white/50">Производство</div>
                  <p className="font-semibold">{site.contacts.addressGlazov}</p>
                  <p className="text-white/70">{site.contacts.addressIgra}</p>
                  <p className="mt-1 text-sm text-white/50">
                    {site.contacts.hours}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-panel p-6 text-ink sm:p-8 md:p-12">
            <h3 className="text-2xl font-semibold">Заявка на звонок</h3>
            <p className="mt-2 text-muted">
              Оставьте контакты — перезвоним в рабочее время{" "}
              {site.contacts.hours.replace("Ежедневно ", "")}.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
