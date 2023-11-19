/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa"],
  },
};

module.exports = nextConfig;
