const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./src/index.ts',
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  resolve:{
    extensions: [".vue", ".js", ".ts"],
    alias: {
        "@src": path.resolve(__dirname, "src"),
    },
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
}
