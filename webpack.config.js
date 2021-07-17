const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {

    contentBase: './dist',

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Weather App', // title of webpage that appears in tab and top of browser

    }),

  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // | 'production' | 'none'

  module: {
    rules: [
      { // for css
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { // for imgs
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      { // for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
