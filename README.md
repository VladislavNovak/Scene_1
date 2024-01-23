# Введение в BabylonJS

## Настройка окружения
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
    }),