import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/** Файл всегда одинаковый — генерируем его один раз при сборке */
export const dynamic = 'force-static';

/**
 * robots.txt генерируется из адреса сайта в lib/seo.ts —
 * менять вручную не нужно.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
