const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: `public/index.html`,
      hash: true,
      inject: 'head',
      scriptLoading: 'blocking',
    }),
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: false,
    port: 9000,
    hot: true,
    host: '0.0.0.0',
  },
})
