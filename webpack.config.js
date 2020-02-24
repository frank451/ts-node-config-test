const path = require('path');

module.exports = {
  entry: './server.ts',
  mode:"development",
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    // {
    //     test: /\.ts$/,
    //     exclude: /(node_modules|bower_components)/,
    //     use: {
    //         loader: "swc-loader",
    //         options: {
    //             jsc: {
    //                 parser: {
    //                     syntax: "typescript"
    //                 }
    //             }
    //         }
    //     }
    // }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      "level1": path.resolve(__dirname, 'level1/'),
      // "level1": './level1/',
      }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};