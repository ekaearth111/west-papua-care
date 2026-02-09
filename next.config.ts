import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/west-papua-care" : "",
  assetPrefix: isProd ? "/west-papua-care/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
