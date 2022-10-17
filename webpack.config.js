const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].[contenthash].js",
  },
  mode,
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    allowedHosts: "all",
  },
  devtool: process.env.NODE_ENV !== "production" && "eval",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            env: {
              coreJs: "3.25.3",
              targets: "> 0.2%, not dead",
            },
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                dynamicImport: true,
              },

              transform: {
                react: {
                  runtime: "automatic",
                },
              },
              target: "es5",
            },
            minify: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      inject: true,
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
      "process.env.DEBUG": false,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
};
