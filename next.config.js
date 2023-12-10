/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost'
    ]
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: 'standalone',
};

module.exports = nextConfig;
