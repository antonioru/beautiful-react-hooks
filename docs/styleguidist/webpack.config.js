const path = require('path');

// local constants
const srcPath = path.resolve(__dirname, '../..', 'src');
const outPath = path.resolve(__dirname, '../..','gitpages');

module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: { 'beautiful-react-hooks': srcPath },
  },
  devtool: 'inline-source-map',
  output: {
    path: outPath,
    filename: 'beautiful-react-hooks.doc.js',
  },
  devServer: {
    open: true,
    hot: false,
    liveReload: true,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
    ],
  },
};
