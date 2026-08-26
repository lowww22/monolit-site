import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { concrete, mortar } from '@/lib/catalog';
import { articles } from '@/lib/articles';

/**
 * Карта сайта. Собирается автоматически из каталога и статей —
 * при добавлении новой марки или статьи она попадает сюда сама.
 * Адрес: /sitemap.xml — его нужно указать в Яндекс.Вебмастере
 * и Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: Array<{
    path: string;
    priority: number;
    freq: 'daily' | 'weekly' | 'monthly';
  }> = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/beton', priority: 0.9, freq: 'weekly' },
    { path: '/rastvor', priority: 0.8, freq: 'weekly' },
    { path: '/glazov', priority: 0.9, freq: 'weekly' },
    { path: '/igra', priority: 0.9, freq: 'weekly' },
    { path: '/dostavka', priority: 0.8, freq: 'monthly' },
    { path: '/cement', priority: 0.7, freq: 'monthly' },
    { path: '/shcheben', priority: 0.7, freq: 'monthly' },
    { path: '/kalkulyator', priority: 0.8, freq: 'monthly' },
    { path: '/o-kompanii', priority: 0.6, freq: 'monthly' },
    { path: '/kontakty', priority: 0.8, freq: 'monthly' },
    { path: '/stati', priority: 0.6, freq: 'weekly' },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...concrete.map((p) => ({
      url: `${SITE_URL}/beton/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...mortar.map((p) => ({
      url: `${SITE_URL}/rastvor/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/stati/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
