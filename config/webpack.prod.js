'use strict';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConf = require('./common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = env => webpackMerge(commonConf, {
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks: 2,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});

