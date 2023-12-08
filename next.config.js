/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePattern: [
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ]
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: 'standalone',
};

module.exports = nextConfig;
