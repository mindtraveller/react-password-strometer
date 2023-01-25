const webpackMerge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = webpackMerge.merge(common, {
  mode: 'production',
  target: 'web',
  output: {
    library: 'PasswordStrometer',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    react: 'commonjs react',
  },
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
