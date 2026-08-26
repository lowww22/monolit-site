import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/ProductPage';
import { concrete, getProduct } from '@/lib/catalog';
import { abs } from '@/lib/seo';

/** Страницы всех марок собираются заранее — открываются мгновенно */
export function generateStaticParams() {
  return concrete.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct('beton', slug);
  if (!product) return {};

  const title = `Бетон ${product.mark} (${product.cls}) в Глазове — цена за куб, характеристики`;
  const description = `Купить бетон ${product.mark} класса ${product.cls} в Глазове и Игре. Прочность ${product.strength}, морозостойкость ${product.frost}, ГОСТ 26633-2015. ${product.short}. Доставка миксером по Удмуртии.`;

  return {
    title,
    description,
    alternates: { canonical: `/beton/${product.slug}` },
    openGraph: {
      title,
      description,
      url: abs(`/beton/${product.slug}`),
      type: 'website',
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct('beton', slug);
  if (!product) notFound();

  return <ProductPage product={product} kind="beton" />;
}
