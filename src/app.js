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
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
