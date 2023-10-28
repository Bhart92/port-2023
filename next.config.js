/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: false,
  i18n: {
  locales: ["en"],
  defaultLocale: "en",
  },
};

module.exports = nextConfig;
