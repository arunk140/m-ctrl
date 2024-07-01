import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

export const preloadConfig: Configuration = {
  target: 'electron-preload',
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts'],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};
