import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { photos } from '@/lib/photos';
import { faqCement } from '@/lib/faq';
import { abs, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Купить цемент в Глазове и Игре — продажа цемента с доставкой',
  description:
    'Продажа цемента в Глазове и Игре: портландцемент ПЦ400 и ПЦ500 для фундамента, кладки и стяжек. Подберём марку под задачу, организуем поставку. Тел. +7 (912) 850-17-11.',
  alternates: { canonical: '/cement' },
  openGraph: {
    title: 'Купить цемент в Глазове — ООО «Монолит»',
    description:
      'Продажа цемента разных марок с доставкой по Глазову, Игре и районам Удмуртии.',
    url: abs('/cement'),
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Цемент',
  description:
    'Портландцемент марок ПЦ400 и ПЦ500 для приготовления бетона, кладочных растворов и стяжек. Продажа в Глазове и Игре.',
  category: 'Строительные материалы',
  manufacturer: { '@id': `${SITE_URL}/#organization` },
  offers: {
    '@type': 'Offer',
    url: abs('/cement'),
    priceCurrency: 'RUB',
    availability: 'https://schema.org/InStock',
    seller: { '@id': `${SITE_URL}/#organization` },
  },
};

export default function CementPage() {
  return (
    <>
      <JsonLd data={productJsonLd} />

      <PageHeader
        crumbs={[{ name: 'Цемент' }]}
        h1="Купить цемент в Глазове и Игре"
        lead="Продаём цемент для приготовления бетона, кладочных растворов и стяжек. Подберём марку под задачу и организуем поставку на объект."
      />

      <section className="section-pad bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Какой цемент бывает
            </h2>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              В строительстве чаще всего применяют портландцемент двух марок.
              <strong className="text-ink"> ПЦ400 (ЦЕМ I 32,5)</strong> —
              универсальный вариант для фундаментов, стяжек и кладочных
              растворов в частном строительстве.{' '}
              <strong className="text-ink">ПЦ500 (ЦЕМ I 42,5)</strong> прочнее и
              быстрее набирает прочность — его берут для ответственных
              конструкций и работ в прохладную погоду.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              Расход цемента зависит от нужной марки бетона: на куб М200 уходит
              около 285 кг, на М300 — около 355 кг, на М400 — около 420 кг.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Подбор марки под конкретную задачу строительства',
                'Консультация по расходу и условиям хранения',
                'Организация поставки на объект',
                'Работа с частными заказчиками и организациями',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={13} aria-hidden />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaBand
                compact
                text="Наличие, марки и цены уточняйте по телефону"
              />
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden border border-line sm:min-h-[400px]">
            <Image
              src={photos.plant}
              alt="Цемент и строительные материалы на площадке завода"
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
            Цемент или готовый бетон — что выгоднее
          </h2>
          <p className="mt-4 max-w-3xl text-muted sm:text-lg">
            Замешивать бетон самостоятельно имеет смысл только на очень малых
            объёмах — примерно до одного кубометра. Дальше начинают работать
            другие расчёты.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Самостоятельный замес
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>• Нужно купить и привезти цемент, песок и щебень</li>
                <li>• Нужна бетономешалка и место для хранения материалов</li>
                <li>• Марка получается «на глаз» — пропорции плавают</li>
                <li>• Время бригады уходит на замес, а не на укладку</li>
                <li>• Непрерывную заливку плиты так не сделать</li>
              </ul>
            </article>

            <article className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold text-ink">
                Готовый товарный бетон
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>• Стабильная марка по ГОСТ на каждом кубе</li>
                <li>• Приезжает готовым к укладке в нужный час</li>
                <li>• Бригада занимается только заливкой</li>
                <li>• Можно залить большой объём без холодных швов</li>
                <li>• Не нужно хранить сыпучие материалы на участке</li>
              </ul>
              <Link
                href="/beton"
                className="mt-4 inline-block font-semibold text-accent hover:underline"
              >
                Посмотреть марки товарного бетона →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <FaqSection items={faqCement} title="Вопросы о цементе" />
    </>
  );
}
