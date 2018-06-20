// 导出(默认只能操作js文件，其余文件需要loader)
module.exports={
	//入口文件
	entry:'./index.js',
	//出口文件
	output:{
		// 打包后的文件名
		filename:'bundle.js'
	},
	//配置服务器
	devServer:{
		inline:true,//自动刷新
		open:true,//自动打开浏览器
		port:8080
	},
	//配置模块加载器
	module:{
		// 配置规则
		rules:[
			{
				// 正则表达式匹配(所有的CSS文件)
				test:/\.css$/,
				//所要的加载器，从右往左读，所以css-loader在后
				use:['style-loader','css-loader']
			},
			//配置react
			{
				test:/\.js$/,
				use:['react-hot-loader','babel-loader'],
				//不需要使用loader的文件
				exclude:/node_modules/
			}
		]
	}
}