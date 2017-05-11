'use strict';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConf = require('./common.js');

module.exports = webpackMerge(commonConf, {
  module: {
    rules: [
      {
        test: /\.(c|sc|le)ss$/,
        loader: 'null-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules|\.test\.js$/,
        loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true,
        },
      },
    ],
  },
});
