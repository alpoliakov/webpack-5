const paths = require('./paths')
const { HotModuleReplacementPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    overlay: true,
  },

  plugins: [
    new HotModuleReplacementPlugin(),
  ],
})
