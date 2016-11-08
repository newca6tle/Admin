var path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    //historyApiFallback: true
  },
  entry: [
    path.join(__dirname, '/src/app.js')
  ],
  //entry: './src/app.js',
  output: {
      path: path.resolve(__dirname, "bin"),
      publicPath: "/bin/",
      filename: 'app.bundle.js',
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }]
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }]
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
