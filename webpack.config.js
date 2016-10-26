var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'compiled');
var APP_DIR = path.resolve(__dirname, 'client');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var config = {
  entry: {
    bundle: APP_DIR + '/index.jsx',
    spec: APP_DIR + '/test/gameRuleSpec.js'
  },
  output: {
      path: path.join(__dirname, 'compiled'),
      filename: "[name].js"
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          }
        }
      ]
  },
};

module.exports = config;