/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    workerThreads: false,
    cpus: 4,
  },
};

module.exports = nextConfig;
