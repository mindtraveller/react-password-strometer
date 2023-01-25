const { BundleDeclarationsWebpackPlugin } = require('bundle-declarations-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    chunkFilename: '[name].js',
    library: 'PasswordStrometer',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.worker\.js$/,
        use: [
          { loader: 'worker-loader', options: { inline: 'no-fallback' } },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleDeclarationsWebpackPlugin(),
  ],
}
