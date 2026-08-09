import type { MetadataRoute } from "next";

const SITE_URL = "https://lowww22-monolit-site-c958.twc1.net";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
