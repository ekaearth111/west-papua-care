import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/west-papua-care",
  assetPrefix: "/west-papua-care",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
