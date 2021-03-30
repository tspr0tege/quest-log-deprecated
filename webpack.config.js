const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './client/src'),
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, './client/src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
}