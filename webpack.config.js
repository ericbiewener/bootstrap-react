/* eslint-disable @typescript-eslint/no-var-requires */
// For some reason, the following import must be done with `import` syntax, while all the rest must
// be requires.
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const SRC = path.join(__dirname, 'src')

const config = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.join(SRC, 'main.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.p?css$/,
        use: [
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({ stage: 0 }),
                require('tailwindcss'),
                // require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, 'index.html'),
      filename: './index.html',
    }),
    new Dotenv(),
  ],
}

module.exports = config
