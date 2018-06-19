// 引入index.css
require('./index.css')
//引入React和ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
class Leo extends React.Component{
	render(){
		return (
				<div>	
					<h1>hello world!</h1>
					<h1>hello react!</h1>
				</div>
			);
	}
}
ReactDOM.render(
	<Leo />,
	document.getElementById('app')
);