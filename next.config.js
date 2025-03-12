/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "",
  images: {
    domains: ["example.com"],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    // Your environment variables here if needed
  },
};

module.exports = nextConfig;
