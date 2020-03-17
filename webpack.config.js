//https://qiita.com/soarflat/items/28bf799f7e0335b68186

//TODO
//vue.js　bable scssのコンパイル監視

const path = require('path');
const webpack = require('webpack');
module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/main.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'main.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};