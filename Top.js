//引入react和react-dom
import React,{Component}from 'react'
class Top extends Component{
	render(){
		//定义一个数组来存放顶部列表的个数
		let Tit = [];
		this.props.top.forEach((val,index)=>{
			Tit.push(<li key={index} className={index==this.props.index?'active':''} onMouseOver={this.props.change.bind(val,index)}>{val}</li>);
		});
		return (
				<div className='title'>
					<ul>{Tit}</ul>
				</div>
			);
	}
}
export default Top;