/* eslint-disable import/no-extraneous-dependencies */
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
/* eslint-enable import/no-extraneous-dependencies */
import baseConfig from '~webpack/base.config.babel';
import paths from '~webpack/paths';

const config = { ...baseConfig };

config.devServer = {
  contentBase: paths.build.output,
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
  new CleanWebpackPlugin({
    verbose: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
];

export default config;
