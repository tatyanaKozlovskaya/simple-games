const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: 'localhost',
    port: 3000,
    open: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: './simple-games/',
    path: path.resolve(__dirname, 'build'),
    sourcePrefix: 'simple-games/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentWidth: 2,
              data: '@import "variables"; @import "common";',
              includePaths: ['./src/styles'],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],

  //...
};

module.exports = (env) => {
  return config;
};
