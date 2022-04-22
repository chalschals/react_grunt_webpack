const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ["/node_modules"],
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.svg$/,

        use: [
          {
            loader: "svg-url-loader",

            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      // template: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
