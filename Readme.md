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


## webpack起動

```
yarn build
```

# TODO作成

## functionでコンポーネント作成
```
import React from 'react';
import ReactDOM from 'react-dom';

const App = (props)=>{
	return <h1>Hello function</h1>;
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
```

## Classでコンポーネント作成
```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
	render(){
		return <h1>Hello Tahara</h1>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
```

## propsでコンポーネントに値を渡す
```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
	render(){
		return <h1>Hello {this.props.name}</h1>;
	}
}

ReactDOM.render(
	<App name={"Kity"}/>,
	document.getElementById('app')
)

```

