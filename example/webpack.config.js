const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => ({
  entry: {
    main: path.resolve('.', 'src', 'index.js')
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: path.join('[name]-[hash].min.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react','stage-0']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(['css-loader','postcss-loader','less-loader'])
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new ExtractTextPlugin('../css/[name]-[hash].min.css'),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: path.resolve(__dirname, 'src', 'index.html'),
      title: 'reframe'
    })
  ]
})
