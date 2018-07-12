const path = require('path');

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'docs', '3-preact'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      // these are necessary for `styled-components` to work
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
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
