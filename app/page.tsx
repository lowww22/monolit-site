import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProductsBlocks from '@/components/ProductsBlocks';
import Advantages from '@/components/Advantages';
import Catalog from '@/components/Catalog';
import Services from '@/components/Services';
import Production from '@/components/Production';
import Delivery from '@/components/Delivery';
import Objects from '@/components/Objects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FaqSection from '@/components/FaqSection';
import { faqHome } from '@/lib/faq';
import { site } from '@/lib/site';
import { BRAND } from '@/lib/seo';

export const metadata: Metadata = {
  // Главная — единственная страница без общего шаблона заголовка,
  // поэтому название компании здесь пишем сами.
  // Слово «цена» — только когда на сайте видны цены: иначе человек
  // приходит за ценой, не находит её и уходит, а Яндекс это учитывает.
  title: {
    absolute: site.showPrices
      ? `Купить бетон в Глазове и Игре — цены за куб с доставкой | ${BRAND}`
      : `Купить бетон в Глазове и Игре с доставкой от завода | ${BRAND}`,
  },
  // Держим в пределах 160 символов — длиннее поисковики обрезают в выдаче
  description:
    'Бетон М100–М500 и раствор от производителя. Площадки в Глазове и Игринском районе, доставка миксером от 1 м³, ежедневно 8:00–18:00. Тел. +7 (912) 850-17-11.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsBlocks />
      <Advantages />
      <Catalog />
      <Delivery />
      <Services />
      <Production />
      <Objects />
      <About />
      <FaqSection items={faqHome} title="Частые вопросы о бетоне в Глазове" />
      <Contact />
    </>
  );
}
