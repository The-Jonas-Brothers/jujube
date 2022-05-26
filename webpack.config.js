const path = require('path');

module.exports = {
  // target: 'web',
  mode: "development",
  entry: path.join(__dirname, "client", "src", "index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  }
}
