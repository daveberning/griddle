const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    './src/scss/includes/grid.scss',
    './src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'editor.blocks.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].css', }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader?-url' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}