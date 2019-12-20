const path = require('path');

// local constants
const srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: { 'beautiful-react-hooks': srcPath },
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'beautiful-react-hooks.dev.js',
  },
  devServer: {
    open: true,
    hot: false,
    liveReload: true,
    watchContentBase: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
