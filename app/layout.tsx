import type { Metadata, Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";

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
  title: "ООО «Монолит» — бетон в Глазове и Игре",
  description:
    "Производство и доставка товарного бетона в Глазове и Игре. Более 20 лет на рынке, контроль по ГОСТ, собственная лаборатория. Около 80% рынка региона.",
  keywords: [
    "бетон Глазов",
    "бетон Игра",
    "товарный бетон",
    "ООО Монолит",
    "доставка бетона Удмуртия",
  ],
  openGraph: {
    title: "ООО «Монолит» — бетон в Глазове и Игре",
    description:
      "Товарный бетон В7,5–В40 (М100–М500), строительный раствор. ГОСТ, лаборатория, доставка по Удмуртии.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1113",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
