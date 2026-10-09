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

/**
 * Название в конце заголовка каждой страницы: «Бетон М300 … | «Монолит»».
 * Подставляется шаблоном в app/layout.tsx — в самих заголовках страниц
 * название компании повторять не нужно.
 */
export const BRAND = '«Монолит»';

/**
 * Номер счётчика Яндекс Метрики (только цифры).
 * Пусто — счётчик не подключается. Создайте счётчик на metrika.yandex.ru
 * и впишите сюда его номер — код и цели (звонок, почта, заявка)
 * подключатся сами.
 */
export const METRIKA_ID: string = '';

/**
 * Ключ IndexNow. По нему Яндекс принимает от сайта список новых
 * и изменённых страниц сразу после публикации. Файл с этим ключом
 * лежит в public/ — менять ключ можно только вместе с именем файла.
 */
export const INDEXNOW_KEY = '5b6096476e43430691dbf2a8c671ed8f';
