const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',

    'babel-polyfill',

    `${__dirname}/app/index.jsx`,
  ],
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.jsx', '.scss', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.js|jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options:
            {
              presets: ['es2015', 'react', 'stage-0'],
              env: {
                development: {
                  plugins: ['react-hot-loader/babel'],
                },
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /(\.scss|\.css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options:
            {
              // sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:8]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-smart-import'),
                require('autoprefixer'),
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options:
            {
              sourceMap: true,
              data: `@import "${__dirname}/app/components/theme.scss";`,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/assets/index.template.html`,
    }),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
};
