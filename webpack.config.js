const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // TODO remove when plugins are built separately
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: true,
                  // "corejs": false,
                  helpers: true,
                  regenerator: true,
                  // "version": "7.0.0-beta.0"
                },
              ],
              [
                './plugin',
                {
                  roots: {
                    eeRoot: './ee',
                    ceRoot: './src',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
