const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    './src/index.jsx'
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve('./src')]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./assets/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: '4040',
    hot: true
  }
}
