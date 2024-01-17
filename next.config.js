/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5050',
        pathname: '/**',
      }
    ]
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: 'standalone',
};

module.exports = nextConfig

