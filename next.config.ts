import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  basePath: "/enesyilmazcode.github.io", // Sets the correct base path for GitHub Pages
  assetPrefix: "/enesyilmazcode.github.io",
  devIndicators: false,
  errorIndicators: false,
};

export default nextConfig;
