/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Add your image domains here
  },
  webpack: (config, { isServer }) => {
    // Example of custom webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    // CUSTOM_VAR: process.env.CUSTOM_VAR, // Example of environment variable
  },
};

export default nextConfig;
