'use strict';
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConf = require('./common.js');

module.exports = env => webpackMerge(commonConf, {
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 8080,
    quiet: true,
  },

});

