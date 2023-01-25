const webpackMerge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = webpackMerge.merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
})
