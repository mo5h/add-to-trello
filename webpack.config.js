const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DotenvPlugin = require('webpack-dotenv-plugin')

module.exports = {
  entry: {
    popup: './src/assets/js/popup.js',
    settings: './src/assets/js/settings.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src', 'assets', 'css'),
      libs: path.resolve(__dirname, 'src', 'assets', 'js', 'libs'),
      components: path.resolve(__dirname, 'src', 'assets', 'js', 'components'),
      actions: path.resolve(__dirname, 'src', 'assets', 'js', 'actions'),
      bootstrap: path.resolve(__dirname, 'node_modules', 'bootstrap-sass', 'assets'),
      toggle: path.resolve(__dirname, 'node_modules', '@trendmicro', 'react-toggle-switch', 'dist', 'react-toggle-switch.css')
    }
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: process.env.NODE_ENV === 'development'
    }),

    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new webpack.DefinePlugin({
      DEVELOPMENT: process.env.NODE_ENV === 'development'
    }),

    // extract css into separate file
    new ExtractTextPlugin('assets/css/bundle.css'),

    new CopyWebpackPlugin([
      // copy the chrome extension manifest
      { from: './src/manifest.json', to: 'manifest.json' },
      // copy the images
      { from: './src/assets/images', to: 'assets/images' }
    ]),

    // copy the popup and settings html files
    new HtmlWebpackPlugin({
      inject: false,
      title: 'popup',
      filename: 'popup.html',
      template: 'src/index.pug'
    }),

    new HtmlWebpackPlugin({
      inject: false,
      title: 'settings',
      filename: 'settings.html',
      template: 'src/index.pug'
    })
  ]
}
