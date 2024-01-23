const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: path.resolve(appDirectory, "src/app.ts"), //путь к основному файлу .ts
  output: {
    filename: "js/bundleName.js", //имя для js файла, который создается / компилируется в памяти
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080, //порт, который мы используем для локального хоста (localhost: 8080)
    disableHostCheck: true,
    contentBase: path.resolve(appDirectory, "public"), //сообщает webpack работать из общей папки
    publicPath: "/",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appDirectory, "public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
};
