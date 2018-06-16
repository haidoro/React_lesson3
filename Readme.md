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
## カウンター

app.js
```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
	constructor(){
		super()
		this.state ={
			count: 0
		}
		this.onClickButton = this.onClickButton.bind(this)
	}
	onClickButton(){
		let { count } = this.state
		this.setState({count: count + 1})
	}
	render(){
		return (
			<div>
				<h1>{`クリック回数 : ${this.state.count}`}</h1>
				<button onClick={this.onClickButton}>click</button>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
```
## JSXと配列

```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
	constructor(){
		super()
		this.state = {
			input : "",
			todos:[]
		}
		this.addToDo = this.addToDo.bind(this)
	}
	addToDo(){
		let { todos,input } = this.state
		todos = todos.concat(input)
		this.setState({todos:todos,input: ""})
	}

	render(){
		return (
			<div>
				<h1>新しいタスク</h1>
				<input type="text" onChange={e => this.setState({input: e.target.value})} value={this.state.input} />
				<button onClick={this.addToDo}>click</button>
				<h2>ToDo:</h2>
				<ul>
				{this.state.todos.map((todo)=>{
					return <li key={todo}>{todo}</li>
				})}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

```

## add time

```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
	constructor(){
		super()
		this.state = {
			input : "",
			todos:[],
			time: new Date(),
			intervalId:""
		}
		this.addToDo = this.addToDo.bind(this)
		this.tick = this.tick.bind(this)
	}
	tick(){
		let { time } = this.state
		time.setSeconds(time.getSeconds() + 1)
		this.setState({time: time})
	}
	componentDidMount(){
		let id = setInterval(this.tick, 1000)
		this.setState({intervalId: id})
	}
	componentWillUnmount(){
		clearInterval(this.state.intervalId)
	}
	addToDo(){
		let { todos,input } = this.state
		todos = todos.concat(input)
		this.setState({todos:todos,input: ""})
	}

	render(){
		return (
			<div>
				<h1>新しいタスク</h1>
				<input type="text" onChange={e => this.setState({input: e.target.value})} value={this.state.input} />
				<button onClick={this.addToDo}>click</button>
				<h2>現在の時間</h2>
				<span>今の時間{this.state.time.toLocaleTimeString()}</span>
				<h2>ToDo:</h2>
				<ul>
				{this.state.todos.map((todo)=>{
					return <li key={todo}>{todo}</li>
				})}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

```

## ToDo完成

app.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todos'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
        input: "",
        todos:[],
        time: new Date(),
        intervalId: ""
        }
        this.tick = this.tick.bind(this)
        this.addToDo = this.addToDo.bind(this)
        this.removeToDo = this.removeToDo.bind(this)
    }
    componentDidMount(){
        let id = setInterval(this.tick, 1000)
        this.setState({intervalId: id})
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalId)
    }
    addToDo(){
        let { todos, input } = this.state
        todos = todos.concat(input)
        this.setState({todos:todos, input:""})
    }
    removeToDo(i){
        let { todos } = this.state
        todos = todos.slice(0, i).concat(todos.slice(i + 1))
        this.setState({todos:todos, input:""})
    }
    tick(){
        let { time } = this.state
        time.setSeconds(time.getSeconds() + 1)
        this.setState({time: time})
    }
    render() {

        return (
                <div>
                <h1>新しいタスク</h1>
                <input type="text" onChange={e => this.setState({input: e.target.value})} value={this.state.input}/>
                <button onClick={this.addToDo}>追加</button>
                <h2>現在の時間</h2>
                <span>今の時間 {this.state.time.toLocaleTimeString()}</span>
                <h2>ToDo:</h2>
                <Todo todos={this.state.todos} removeToDo={this.removeToDo} />
                </div>
                )
    }
}
ReactDOM.render(
  <App />,
  document.getElementById("app")
)

```

todo.js
```
import React from "react";
import ReactDOM from "react-dom"


export default class Todo extends React.Component {
  render(){
    const { todos } = this.props
    return(
        <ul>
        {todos.map((todo, i) =>{
          return(
            <li key={todo} onClick={e => this.props.removeToDo(i)}>{todo}</li>
          )
        })}
        </ul>
    )
  }
}

```