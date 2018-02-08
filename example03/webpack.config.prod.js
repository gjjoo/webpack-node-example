const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlMinifier = require('html-minifier');

const minifyOpts = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true
};

module.exports = {
  devtool: false,
  entry: {
    home: './client/src/scripts/home.js',
    about: './client/src/scripts/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'static/js/[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(hbs|handlebars)$/,
        include: [path.resolve(__dirname, 'client/src/scripts/shared')],
        loader: 'handlebars-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          compact: true
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  postcssFlexbugsFixes,
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ],
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['client/dist']),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['home'],
      template: './client/src/home.hbs',
      filename: 'home.hbs',
      minify: minifyOpts
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['about'],
      template: './client/src/about.hbs',
      filename: 'about.hbs',
      minify: minifyOpts
    }),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new CopyWebpackPlugin([
      {
        context: 'client/src/scripts/shared',
        from: '**/*',
        to: 'shared',
        transform: (content) => {
          return HtmlMinifier.minify(content.toString(), minifyOpts);
        }
      }
    ])
  ]
};
