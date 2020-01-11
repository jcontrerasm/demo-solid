const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputPath = path.join(__dirname, '../../dist');
const sourcePath = path.join(__dirname, '../../src');
const isProduction = process.env.NODE_ENV === undefined;
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

const webpackConfig = {
  mode,
  devtool,
  target: 'node',
  entry: [
    './src/app.ts'
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@app': sourcePath
    }
  },
  externals: nodeExternals({
    modulesFromFile: true
  }),
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'awesome-typescript-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [outputPath],
    }),
    new webpack.NamedModulesPlugin()
  ],
};

module.exports = webpackConfig;
