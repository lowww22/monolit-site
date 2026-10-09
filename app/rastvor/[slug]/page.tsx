import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/ProductPage';
import { mortar, getProduct } from '@/lib/catalog';
import { abs } from '@/lib/seo';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return mortar.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct('rastvor', slug);
  if (!product) return {};

  const title = site.showPrices
    ? `Раствор ${product.mark} в Глазове — цена за куб`
    : `Раствор ${product.mark} в Глазове и Игре с доставкой`;
  const description = `Купить строительный раствор ${product.mark} в Глазове и Игре. Прочность ${product.strength}, морозостойкость ${product.frost}, ГОСТ 28013-98. ${product.short}. Доставка по Удмуртии.`;

  return {
    title,
    description,
    alternates: { canonical: `/rastvor/${product.slug}` },
    openGraph: {
      title,
      description,
      url: abs(`/rastvor/${product.slug}`),
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
  const product = getProduct('rastvor', slug);
  if (!product) notFound();

  return <ProductPage product={product} kind="rastvor" />;
}
