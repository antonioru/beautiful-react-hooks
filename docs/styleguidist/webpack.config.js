const path = require('path');

// local constants
const srcPath = path.resolve(__dirname, '../..', 'src');

module.exports = {
  resolve: {
    alias: { 'beautiful-react-hooks': srcPath },
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
