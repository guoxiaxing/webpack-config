//引入react和react-dom
import React,{Component}from 'react'
class Bottom extends Component{
	render(){
		let content = [];
		this.props.bottom.topValue.forEach((val,index)=>{
			content.push(<div key={index} style={{display:index==this.props.index?'block':'none'}}>{this.props.bottom.bottomValue[index]==undefined?'nocontent':this.props.bottom.bottomValue[index]}</div>);
		});
		return (
				<div className='bottom'>{content}</div>
			)
	}
}
export default Bottom;