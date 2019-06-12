// For some reason, the following import must be done with `import` syntax, while all the rest must
// be requires.
import { Configuration } from 'webpack'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC = path.join(__dirname, 'src')

const config: Configuration = {
  mode: process.env.NODE_ENV as 'development' | 'production',
  target: 'node',
  entry: path.join(SRC, 'main.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
}

module.exports = config
