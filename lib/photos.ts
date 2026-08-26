/**
 * Пути к фотографиям сайта.
 *
 * Если сайт размещён не в корне, а в подпапке (так работает GitHub Pages
 * без своего домена), путь нужно дополнить префиксом — иначе браузер ищет
 * картинки не там, где они лежат, и показывает пустые рамки.
 */
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const photos = {
  hero: `${prefix}/images/hero.jpg`,
  plant: `${prefix}/images/plant.jpg`,
  mixer: `${prefix}/images/mixer.jpg`,
  lab: `${prefix}/images/lab.jpg`,
  construction: `${prefix}/images/construction.jpg`,
  building: `${prefix}/images/building.jpg`,
  industrial: `${prefix}/images/industrial.jpg`,
} as const;
