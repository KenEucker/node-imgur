const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const universalConfig = {
  entry: {
    index: path.resolve(__dirname, 'dist', 'esm', 'index.js'),
  },
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new NodePolyfillPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.t|js$/,
        use: 'babel-loader',
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  target: 'web',
  context: path.resolve(__dirname),
  output: {
    library: 'imgur',
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: '[name].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    scriptType: 'module',
    globalObject: `(() => {
        if (typeof self !== 'undefined') {
            return self;
        } else if (typeof window !== 'undefined') {
            return window;
        } else if (typeof global !== 'undefined') {
            return global;
        } else {
            return Function('return this')();
        }
      })()`,
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment',
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    universalConfig.devtool = 'inline-source-map';
  } else {
    universalConfig.devtool = 'cheap-module-source-map';
    universalConfig.mode = 'development';
  }

  return universalConfig;
};
