import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
});

// rule to exclude controller.ts and preload.ts from the renderer bundle

rules.push({
  test: /\.tsx?$/,
  exclude: /(controller\.ts|preload\.ts)/,
  use: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
  },
});

export const rendererConfig: Configuration = {
  target: ['web', 'electron-renderer'],
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
