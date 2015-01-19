module.exports = {
  entry: './examples/index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};