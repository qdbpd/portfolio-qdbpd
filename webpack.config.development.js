const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    // serverのルートパスを設定する
    publicPath: '/'
  },
  // devServer: {
  //   contentBase: 'dist',
  //   host: '0.0.0.0',
  //   disableHostCheck: true,
  //   hot: true,
  //   inline: true,
  //   overlay: true,
  //   port: 8000,
  //   historyApiFallback: true,
  //   watchContentBase: true
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});

// entryにhot-middlewareを追加する
for (const key in config.entry) {
  if (config.entry.hasOwnProperty(key)) {
    config.entry[key].unshift('webpack/hot/dev-server');
    config.entry[key].unshift('webpack-hot-middleware/client');
  }
}

config.module.rules.push({
  test: /\.(sass|scss)$/,
  use: [
    'css-hot-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        // 0 => no loaders (default);
        // 1 => postcss-loader;
        // 2 => postcss-loader, sass-loader
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: [
          autoprefixer({
            browsers: [
              'last 2 version',
              'IE 11'
            ]
          })
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: [path.resolve('./node_modules/')]
      }
    },
    // {
    //   loader: 'sass-resources-loader',
    //   options: {
    //     sourceMap: true,
    //     resources: [path.resolve('./src/css/resources/*.scss')]
    //   }
    // }
  ]
});

module.exports = config;
