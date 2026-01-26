import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/codesprouts',
  assetPrefix: '/codesprouts/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
