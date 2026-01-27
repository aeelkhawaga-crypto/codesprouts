import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Custom domain codesprouts.ie serves from the root.
  // Removed basePath and assetPrefix to ensure root-relative paths.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
