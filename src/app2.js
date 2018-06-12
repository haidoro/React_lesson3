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
