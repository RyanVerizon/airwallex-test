import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import jsonImporter from 'node-sass-json-importer';
import paths from '~webpack/paths';
// import svgSpritesHelper from '~webpack/helpers/svg';

const config = {
  entry: paths.entry,

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: paths.build.output,
    publicPath: '/dist/',
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
    alias: {
      web: paths.build.web,
      '~webpack': paths.alias.webpack,
      '~app': paths.alias.app,
      '~components': paths.alias.components,
      '~containers': paths.alias.containers,
      '~pages': paths.alias.pages,
      '~constants': paths.alias.constants,
      '~helpers': paths.alias.helpers,
      '~settings': paths.alias.settings,
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
    new CopyWebpackPlugin([
      { from: paths.assets.public, to: 'images/public' },
    ]),
    // ...svgSpritesHelper({
    //   inputPaths: [
    //     paths.assets.sprites,
    //   ],
    //   baseOutputPath: '/dist',
    //   srpiteOutputPath: 'images/sprites',
    //   assetsJsonPath: paths.build.assetsJson,
    // }),
  ],
};

export default config;
