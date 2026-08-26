import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Advantages from '@/components/Advantages';
import Production from '@/components/Production';
import Objects from '@/components/Objects';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';
import { abs } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'О компании ООО «Монолит» — бетонный завод Глазовского района',
  description:
    'ООО «Монолит» — крупнейший бетонный завод Глазовского района. Более 20 лет производим товарный бетон и раствор по ГОСТ, производительность до 200 м³/час, две производственные площадки в Удмуртии.',
  alternates: { canonical: '/o-kompanii' },
  openGraph: {
    title: 'О компании ООО «Монолит» — бетонный завод в Удмуртии',
    description:
      'Более 20 лет на рынке, две площадки, производительность до 200 м³/час, контроль качества по ГОСТ.',
    url: abs('/o-kompanii'),
  },
};

export default function OKompaniiPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: 'О компании' }]}
        h1="О компании ООО «Монолит»"
        lead="Крупнейший бетонный завод Глазовского района. Более двадцати лет обеспечиваем стройки Удмуртии товарным бетоном и строительным раствором."
      />

      <section className="section-pad bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Кто мы
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              ООО «Монолит» производит товарный бетон и строительный раствор в
              Удмуртской Республике более двадцати лет. За это время через наши
              площадки прошли тысячи объектов: частные фундаменты и бани,
              коммерческие здания, промышленные площадки.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Сегодня это {site.company.position} с производительностью{' '}
              {site.company.capacity}. Такой мощности хватает и на разовый
              заказ в один кубометр, и на непрерывную заливку большой
              монолитной плиты, где остановка недопустима.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              У нас две производственные площадки — в Глазове и в Игринском
              районе. Это не про масштаб ради масштаба: товарный бетон живёт
              около двух часов после замеса, и вторая площадка позволяет возить
              смесь в центральную часть республики, не выходя за безопасное
              время доставки.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
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

          <div className="relative min-h-[320px] overflow-hidden border border-line sm:min-h-[440px]">
            <Image
              src={photos.plant}
              alt="Производственная площадка ООО «Монолит»"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-x">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Качество и контроль
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted sm:text-lg">
            Вся продукция производится по ГОСТ 26633-2015 (тяжёлые бетоны) и
            ГОСТ 28013-98 (строительные растворы). Контроль начинается с
            входной проверки сырья — цемента, щебня и песка — и продолжается на
            каждом замесе: проверяем дозирование и подвижность готовой смеси.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted sm:text-lg">
            Стабильная рецептура важнее разовой рекордной прочности. Заказчик
            должен получать одинаковый бетон и в мае, и в октябре — на этом
            строится доверие, которое мы зарабатывали двадцать лет.
          </p>

          <div className="mt-10">
            <CtaBand text="Нужен бетон на объект? Позвоните — подберём марку и согласуем график." />
          </div>
        </div>
      </section>

      <Advantages />
      <Production />
      <Objects />
    </>
  );
}
