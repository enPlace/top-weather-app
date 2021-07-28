const path = require("path");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack")
module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
         'GEO_KEY': JSON.stringify(process.env.GEO_KEY),
         'WEATHER_KEY': JSON.stringify(process.env.WEATHER_KEY),
         'GOOGLE_KEY': JSON.stringify(process.env.GOOGLE_KEY) 
      },
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // | 'production' | 'none'

  module: {
    rules: [
      {
        // for css
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // for imgs
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
