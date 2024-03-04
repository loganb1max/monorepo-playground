const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const stylesHandler = MiniCssExtractPlugin.loader;
const cwd = process.cwd();

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: path.resolve(cwd, "src/index"),
  output: {
    path: path.resolve(cwd, "dist"),
  },
  plugins: [new MiniCssExtractPlugin()],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(?:ts|tsx|js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
            ],
            plugins: [
              [
                "formatjs",
                {
                  idInterpolationPattern: "[sha512:contenthash:base64:6]",
                  ast: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};
