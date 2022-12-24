/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["https://firebasestorage.googleapis.com","firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/simple-a5eec.appspot.com/o/**',
      },
    ],
  },
  nextConfig,
};
