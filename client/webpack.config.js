const HtmlWebpackPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const webpack = require("webpack");
const path = require("path");

module.exports = (env) => ({
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../server/src/public/dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(webp|jpe?g|svg|png)$/i,
        loader: "file-loader"
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [tailwindcss]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    symlinks: false,
    extensions: [".ts", ".tsx", ".js", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({ "process.env": JSON.stringify(process.env) })
  ],
  devServer: {
    historyApiFallback: true,
    port: 3001
  }
});
