/** @type {import('next').NextConfig} */
module.exports = {
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
