/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
