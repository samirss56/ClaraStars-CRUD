'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const vueSrc = './src'

const path = require('path')
// eslint-disable-next-line no-unused-vars
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, vueSrc)
    },
    extensions: ['.js', '.vue', '.json']
  },

  mode: 'development',
  entry: [
    './src/main.js'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },

      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.s([ca])ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: 'sass-loader',
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              }
            }
          }
        ]

      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\??#?v=[.0-9]+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // new CopyPlugin([{
    //   from: resolve('static/img'),
    //   to: resolve('dist/static/img'),
    //   toType: 'dir'
    // }])
    // new CopyPlugin({
    //   patterns: [
    //     'relative/path/to/file.ext',
    //     'relative/path/to/dir',
    //     path.resolve(__dirname, 'src', 'file.ext'),
    //     path.resolve(__dirname, 'src', 'dir'),
    //     '**/*',
    //     {
    //       from: '**/*',
    //     },
    //     // If absolute path is a `glob` we replace backslashes with forward slashes, because only forward slashes can be used in the `glob`
    //     path.posix.join(
    //       path.resolve(__dirname, 'src').replace(/\\/g, '/'),
    //       '*.txt'
    //     )
    //   ]
    // })
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'file.txt')
    //     }
    //   ]
    // })
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'src/*.txt',
    //       to: 'dest/',
    //       context: 'app/'
    //     }
    //   ]
    // })
    new CopyPlugin({
      patterns: [
        {
          from: 'src/',
          // to: 'dist/[name].[hash].[ext]',
          to: '[name].[hash].[ext]',
          toType: 'template'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}
