import type { Metadata, Viewport } from 'next';
import { Manrope, Oswald } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCall from '@/components/FloatingCall';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { SITE_URL, abs, OG_IMAGE, VERIFICATION } from '@/lib/seo';

const display = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Купить бетон в Глазове — цена за куб с доставкой | ООО «Монолит»',
    template: '%s | ООО «Монолит» Глазов',
  },
  description:
    'Купить бетон в Глазове и Игре от производителя. Товарный бетон М100–М500 и раствор М50–М200 по ГОСТ, доставка миксером по Удмуртии. Крупнейший завод Глазовского района, до 200 м³/час. Звоните: +7 (912) 850-17-11.',
  applicationName: site.company.legalName,
  authors: [{ name: site.company.legalName }],
  creator: site.company.legalName,
  publisher: site.company.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Купить бетон в Глазове и Игре — ООО «Монолит»',
    description:
      'Товарный бетон М100–М500 и раствор с доставкой по Глазову, Игре и районам Удмуртии. Крупнейший бетонный завод Глазовского района.',
    url: SITE_URL,
    locale: 'ru_RU',
    type: 'website',
    siteName: site.company.legalName,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Купить бетон в Глазове и Игре — ООО «Монолит»',
    description:
      'Товарный бетон М100–М500 и раствор с доставкой по Удмуртии. Завод в Глазовском районе.',
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    yandex: VERIFICATION.yandex,
  },
  category: 'construction',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f1113',
};

/* ------------------------------------------------------------------ */
/*  Микроразметка организации — общая для всех страниц                 */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;

/** Общие поля обеих производственных площадок */
const commonPlace = {
  telephone: site.contacts.phoneRaw,
  email: site.contacts.email,
  priceRange: '$$',
  currenciesAccepted: 'RUB',
  paymentAccepted: 'Наличные, Безналичный расчёт',
  image: abs('/images/plant.jpg'),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  ],
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.company.legalName,
    alternateName: ['Монолит Глазов', 'Бетонный завод Монолит'],
    url: SITE_URL,
    logo: abs('/logo.png'),
    image: abs('/images/plant.jpg'),
    email: site.contacts.email,
    telephone: site.contacts.phoneRaw,
    description:
      'Крупнейший бетонный завод Глазовского района. Производство и доставка товарного бетона М100–М500 и строительного раствора М50–М200 по ГОСТ. Производительность до 200 м³/час.',
    foundingDate: '2004',
    areaServed: [
      'Глазов',
      'Игра',
      'Глазовский район',
      'Игринский район',
      'Балезино',
      'Яр',
      'Красногорское',
      'Юкаменское',
      'Кез',
      'Дебёсы',
      'Удмуртская Республика',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.contacts.phoneRaw,
        contactType: 'sales',
        areaServed: 'RU',
        availableLanguage: 'Russian',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#glazov`,
    parentOrganization: { '@id': ORG_ID },
    name: `${site.company.legalName} — производственная площадка в Глазове`,
    url: abs('/glazov'),
    ...commonPlace,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Юкаменская, 29',
      addressLocality: 'Глазов',
      addressRegion: 'Удмуртская Республика',
      postalCode: '427620',
      addressCountry: 'RU',
    },
    areaServed: ['Глазов', 'Глазовский район', 'Балезино', 'Яр', 'Юкаменское'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#igra`,
    parentOrganization: { '@id': ORG_ID },
    name: `${site.company.legalName} — производственная площадка в Игринском районе`,
    url: abs('/igra'),
    ...commonPlace,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Производственная, 4, д. Сундур',
      addressLocality: 'Игринский район',
      addressRegion: 'Удмуртская Республика',
      addressCountry: 'RU',
    },
    areaServed: ['Игра', 'Игринский район', 'Кез', 'Дебёсы'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.company.legalName,
    inLanguage: 'ru-RU',
    publisher: { '@id': ORG_ID },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <JsonLd data={jsonLd} />

        <a href="#content" className="skip-link">
          Перейти к содержимому
        </a>

        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}
