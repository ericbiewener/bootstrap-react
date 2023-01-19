import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import { Configuration } from "webpack";

const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
};

const config: Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  target: "web",
  entry: path.join(paths.src, "main.tsx"),
  output: {
    path: paths.dist,
    filename: "app.js",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: "babel-loader",
        test: /\.tsx?$/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, "index.html"),
      filename: "./index.html",
    }),
    new Dotenv(),
  ],
};

export default config;
