import type { NextConfig } from "next";

/**
 * Проект собирается в двух режимах:
 *
 * 1. Обычный (по умолчанию) — для хостинга с Node.js, например Timeweb.
 *    Работают серверные маршруты, в том числе форма заявки /api/contact.
 *
 * 2. Статический (STATIC_EXPORT=1) — для GitHub Pages.
 *    Собираются только готовые HTML-страницы, серверные маршруты недоступны,
 *    поэтому форма переключается на отправку письмом.
 */
const isStatic = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const staticConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

const serverConfig: NextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/google53220b585c70e120.html",
        destination: "/api/google-site-verification",
      },
    ];
  },
};

export default isStatic ? staticConfig : serverConfig;
