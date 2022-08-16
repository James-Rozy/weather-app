const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dirname } = require("path");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    pageLoad: "./src/pageLoad.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Got Weather?",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/weather-app/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
