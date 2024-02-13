/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ancean.net',
        port: '80',
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

