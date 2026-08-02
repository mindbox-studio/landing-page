import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The D1/Cloudflare worker helper is only used in Sites deployment; Vercel
  // should still build the landing page without type-checking that runtime module.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
