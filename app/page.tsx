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

export const metadata: Metadata = {
  title:
    'Купить бетон в Глазове — цена за куб с доставкой | ООО «Монолит»',
  description:
    'Купить бетон в Глазове и Игре от производителя. Товарный бетон М100–М500 и раствор М50–М200 по ГОСТ, доставка миксером по Удмуртии от 1 м³. Крупнейший завод Глазовского района. Звоните: +7 (912) 850-17-11.',
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
