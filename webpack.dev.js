const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = webpackMerge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    library: 'PasswordStrometer',
    libraryTarget: 'assign',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: `public/index.html`,
      hash: true,
      inject: 'head',
    }),
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    open: false,
    port: 9000,
    hot: true,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
})