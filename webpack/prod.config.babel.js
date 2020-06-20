/* eslint-disable import/no-extraneous-dependencies */
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
/* eslint-enable import/no-extraneous-dependencies */
import baseConfig from '~webpack/base.config.babel';

const config = { ...baseConfig };
config.mode = 'production';
config.output.filename = '[name].[chunkhash].js';
config.output.chunkFilename = '[name].[chunkhash].js';

config.optimization = {
  minimize: true,
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
    filename: '[name].[chunkhash].css',
  }),
];

export default config;
