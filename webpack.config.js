const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname.concat('/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
      },
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src',
    }], {
      ignore: ['*.js'],
    }),
  ],
};
