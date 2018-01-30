module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: './dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};
