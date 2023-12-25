const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: { index: "./src/index.js", print: "./src/print.js" },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new WebpackManifestPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
};
