/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/next-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-portfolio/" : "",
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
