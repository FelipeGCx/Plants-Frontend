/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const path = require("path");

module.exports = {
  serverRuntimeConfig: {
    CORS_ORIGIN: "*",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       {
  //         loader: "sass-resources-loader",
  //         options: {
  //           resources: [
  //             path.join(__dirname, "styles/globals.scss"),
  //             path.join(__dirname, "styles/mixins.scss"),
  //           ],
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
  images: {
    domains: [
      "https://firebasestorage.googleapis.com",
      "firebasestorage.googleapis.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "443",
        pathname: "/v0/b/simple-a5eec.appspot.com/o/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/plants",
        permanent: true,
      },
    ];
  },
  ...nextConfig,
};
