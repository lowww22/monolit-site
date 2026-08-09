import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compact production bundle for Docker / Timeweb Apps / VPS
  output: "standalone",
};

export default nextConfig;
