import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Avoid native sharp issues on small App Platform VMs
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
