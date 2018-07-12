const path = require('path');

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'docs', '2-react-fancy'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',
};
