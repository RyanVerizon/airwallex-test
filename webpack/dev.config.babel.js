import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import baseConfig from '~webpack/base.config.babel';
import paths from '~webpack/paths';

const config = { ...baseConfig };

config.devServer = {
  contentBase: paths.build.web,
  compress: true,
  host: '0.0.0.0',
  port: 9000,
};

config.optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial',
      },
    },
  },
};

config.plugins = [
  ...baseConfig.plugins,
  // new webpack.DefinePlugin({
  //   IMAGE_BASE_PATH: JSON.stringify('/dist/images/public'),
  //   'process.env': {
  //     CUSTOM_ENV: JSON.stringify('stage'),
  //   },
  // }),
  new CleanWebpackPlugin({
    verbose: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
  new AssetsPlugin({
    filename: 'assets.json',
    path: paths.build.assetsJson,
    prettyPrint: true,
    fullPath: true,
  }),
];

export default config;
