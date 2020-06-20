/* eslint-disable import/no-extraneous-dependencies */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import jsonImporter from 'node-sass-json-importer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
/* eslint-enable import/no-extraneous-dependencies */
import paths from '~webpack/paths';

const config = {
  entry: paths.entry,

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: paths.build.output,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '~webpack': paths.alias.webpack,
      '~app': paths.alias.app,
      '~components': paths.alias.components,
      '~containers': paths.alias.containers,
      '~pages': paths.alias.pages,
      '~helpers': paths.alias.helpers,
      '~resources': paths.alias.resources,
      '~assets-json': paths.alias.assetsJson,
    },
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/, /\.test\.js(x)?$/],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter(),
            },
          },
        ],
      },
      {
        test: /.(svg|woff|woff2|eot|ttf)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'BROCCOLI & CO.',
      scriptLoading: 'defer',
      template: paths.assets.template,
    }),
  ],
};

export default config;
