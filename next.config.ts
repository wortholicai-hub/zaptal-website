/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  images: {
    domains: ["randomuser.me"],
    dangerouslyAllowSVG: true, // optional if you have SVGs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
