import type { Metadata, Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const SITE_URL = "https://lowww22-monolit-site-c958.twc1.net";

const display = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Купить бетон в Глазове — ООО «Монолит» | завод Глазовского района",
    template: "%s | Монолит Глазов",
  },
  description:
    "Купить товарный бетон и раствор в Глазове и Игре. ООО «Монолит» — крупнейший бетонный завод Глазовского района, производительность до 200 м³/час. ГОСТ, доставка, ежедневно 8:00–18:00.",
  keywords: [
    "бетон Глазов",
    "купить бетон Глазов",
    "монолит Глазов бетон",
    "товарный бетон Глазов",
    "бетон Игра",
    "бетонный завод Глазовский район",
    "доставка бетона Удмуртия",
    "раствор Глазов",
    "ООО Монолит",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Купить бетон в Глазове — ООО «Монолит»",
    description:
      "Крупнейший бетонный завод Глазовского района. До 200 м³/час. Товарный бетон В7,5–В40, раствор, доставка. Ежедневно 8:00–18:00.",
    url: SITE_URL,
    locale: "ru_RU",
    type: "website",
    siteName: "ООО Монолит",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1113",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.company.legalName,
  alternateName: "Монолит Глазов",
  description:
    "Крупнейший бетонный завод Глазовского района. Производительность до 200 м³/час. Производство и доставка товарного бетона и раствора.",
  url: SITE_URL,
  telephone: ["+79124645460", "+79956445459"],
  email: site.contacts.email,
  image: `${SITE_URL}/images/plant.jpg`,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "ул. Юкаменская, 29",
      addressLocality: "Глазов",
      addressRegion: "Удмуртская Республика",
      addressCountry: "RU",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "ул. Производственная, 4, д. Сундур",
      addressLocality: "Игринский район",
      addressRegion: "Удмуртская Республика",
      addressCountry: "RU",
    },
  ],
  areaServed: ["Глазов", "Игра", "Глазовский район", "Удмуртия"],
  openingHours: "Mo-Su 08:00-18:00",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
