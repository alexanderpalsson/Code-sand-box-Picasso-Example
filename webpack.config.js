const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname),
  entry: { app: "./app.js" },
  output: {
    filename: "app.js",
  },
  devServer: { host: "0.0.0.0", port: "8081", disableHostCheck: true },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [path.resolve(__dirname, "node_modules")],
        query: { presets: ["@babel/preset-env"] }
      }
    ]
  },
  plugins: [new CopyWebpackPlugin([{ from: "index.html" }])]
};
