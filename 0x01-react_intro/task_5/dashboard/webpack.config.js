const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../dashboard/src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    compress: true,
    open: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
    }),
  ],
};
