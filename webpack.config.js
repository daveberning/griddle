const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    './src/scss/includes/utilities/containers.scss',
    './src/scss/includes/utilities/displaying.scss',
    './src/scss/includes/utilities/positioning.scss',
    './src/scss/includes/utilities/spacing.scss',
    './src/scss/includes/grid.scss',
    './src/scss/includes/grid-plus.scss',
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
            options: { 
                name: '[name].css',
                outputPath: (url, resourcePath, context) => {
                    if(/utilities/.test(resourcePath)) {
                        return `utils/${url}`;
                    }
                    return url;
                }
            }
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