module.exports = {
  // example entry point
  entry: './examples/index.jsx',
  // output to memory
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  // process jsx
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  // do not bundle react
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};