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
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: 'standalone',
};
module.exports = nextConfig

