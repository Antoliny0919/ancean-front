/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '80',
        pathname: '/**',
      }
    ]
  },
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig

