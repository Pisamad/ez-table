const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'ez-table.js',
    library: 'ezTable',
    libraryTarget:'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};
