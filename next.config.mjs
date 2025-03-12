/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Add your image domains here
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Example of custom webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    // CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
};

export default nextConfig;
