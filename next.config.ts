import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Compact production bundle for Docker / Timeweb Apps / VPS
  output: "standalone",
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
