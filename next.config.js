require('dotenv').config()

const webpack = require('webpack');
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});