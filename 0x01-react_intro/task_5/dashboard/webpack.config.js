const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../dashboard/src/index.js'), // Adjusted the path to the entry file
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), // Adjusted the path to the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Removed unnecessary single quotes
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Removed unnecessary single quotes
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i, // Corrected regular expression
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'), // Adjusted the path to the static files directory
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
