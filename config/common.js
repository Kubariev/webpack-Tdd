const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../src'),

  entry: {
    app: './app',
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash:6].[ext]?[hash]',
            },
          },
        ],
      },
      {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader']
          })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-cssnext')({
            browsers: 'last 2 versions',
          }),
        ],
      },
    }),
  ],
};
