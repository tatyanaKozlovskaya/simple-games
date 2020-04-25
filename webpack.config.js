const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
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
              sassOptions: {
                indentWidth: 4,
                includePaths: ['src/styles/common.sass'],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
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
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],

  //...
};

module.exports = env => {
  const isDevelopment = env && env.NODE_ENV === 'development';
  if (isDevelopment) {
    config.devtool = 'source-map';
    config.watchOptions = {
      ignored: /node_modules/,
    };
    config.devServer = {
      contentBase: './dist',
      port:3000,
      open:true
    };
  }

  if (!isDevelopment) {
    //...
  }

  config.mode = isDevelopment ? 'development' : 'production';

  return config;
};
