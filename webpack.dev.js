const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/dist'),
  }
});