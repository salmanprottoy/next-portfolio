/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  ...(process.env.GITHUB_ACTIONS === "true" && {
    basePath: "/next-portfolio",
    assetPrefix: "/next-portfolio/",
  }),
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
