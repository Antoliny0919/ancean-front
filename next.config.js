/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["localhost", "*"]
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: 'standalone',
};
