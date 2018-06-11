# React Lesson3

## yarnの環境
Homebrewがインストールされている前提です。
以下コマンドで`yarn`のインストールを行います。
```
brew install yarn
```

## プロジェクトの作成
```
yarn init
```

## 必要なパッケージをインストール
webpack4のインストール
```
yarn add webpack --dev
```
Reactのインストール
```
yarn add react react-dom
```
webpack-cliのインストール
```
yarn add webpack-cli -D
```
その他必要なbabe関連のパッケージをインストール
```
yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
```
minimizeのインストール
```
yarn build --optimize-minimize
```
CSS loaderインストール
```
yarn add css-loader style-loader --dev
```
webpack-dev-serverインストール
```
yarn add webpack-dev-server --dev
```
SASSの導入
```
yarn add node-sass style-loader css-loader sass-loader import-glob-loader extract-text-webpack-plugin
```
## 問題点

extract-text-webpack-pluginが原因っぽい。
extract-text-webpack-pluginはWebpackのバージョンが4以上だとまだうまく作動しないみたい。

```
npm install -D extract-text-webpack-plugin@next
```
# webpack起動

```
yarn build
```