// 引入index.css
require('./index.css')
//引入React和ReactDOM
import React,{Component}from 'react'
import ReactDOM from 'react-dom'
//一定要加./否则会认为是引入一个模块
import Top from './Top.js'
import Bottom from './Bottom.js'
//定义数据
let data = {
	topValue:['tab1','tab2','tab3','tab4'],
	bottomValue:['content1','content2','content3']
}
//用webpack配置写选项卡
class Tab extends Component{
	constructor(){
		super();
		this.state = {
			index:0
		}
	}
	change(v){
		this.setState({
			index:v
		});
	}
	render(){
		return (
				<div className='out'>
					<Top top={this.props.text.topValue} index={this.state.index} change={this.change.bind(this)}/>
					<Bottom bottom={this.props.text} index={this.state.index}/>
				</div>
			);
	}
}
ReactDOM.render(
	<Tab text={data}/>,
	document.getElementById('app')
);