const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context : __dirname,

  entry : [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    './src/index.js',
  ],

  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, 'public'),
  },

  devtool : 'source-map',

  devServer : {
    contentBase : './public',
  },

  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : [/node_modules/],
        use : [{
          loader : 'babel-loader',
          options : {presets : ['es2015', 'react']},
        }],
      },
      {
        test : /\.css$/,
        exclude : /node_modules/,
        use : ['style-loader', {
          loader : 'css-loader',
          options : {
            modules : true,
            importLoaders : 1,
            localIdentName : '[path][name]__[local]--[hash:base64:5]',
          },
        }],
      },
    ],
  },

  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : './src/index.html',
    }),
  ],
};
