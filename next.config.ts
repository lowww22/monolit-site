import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/google53220b585c70e120.html",
        destination: "/api/google-site-verification",
      },
    ];
  },
};

export default nextConfig;
