/**
 * Центральная точка настройки SEO.
 *
 * ЕДИНСТВЕННОЕ МЕСТО, где задаётся адрес сайта.
 * После покупки домена достаточно указать его в переменной окружения
 * NEXT_PUBLIC_SITE_URL на хостинге (Timeweb → приложение → переменные),
 * либо поменять DEFAULT_SITE_URL ниже — и все страницы, sitemap.xml,
 * robots.txt, canonical и микроразметка обновятся автоматически.
 */

const DEFAULT_SITE_URL = 'https://monolit-glazovbeton.ru';

function normalize(url: string) {
  return url.trim().replace(/\/+$/, '');
}

export const SITE_URL = normalize(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
);

/** Абсолютный URL из относительного пути: abs('/beton') → https://.../beton */
export function abs(path = '/') {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Картинка для соцсетей и Яндекс.Турбо */
export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'ООО «Монолит» — бетонный завод в Глазове и Игре',
};

/** Коды подтверждения прав в панелях вебмастеров */
export const VERIFICATION = {
  yandex: '8422a70ebbe149bc',
  google: 'google53220b585c70e120.html',
};
