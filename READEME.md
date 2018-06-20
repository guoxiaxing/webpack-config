webpack基本命令：（在当前文件夹下打开命令行窗口并操作）
1.执行：
webpack 回车
2.监听：
webpack -w 回车
3.压缩：
webpack -p 回车
4.监听和压缩
webpack -pw 回车
下载css-loader和style-loader
先执行：
npm init
生成一个package.json文件
命令行：cnpm i css-loader style-loader -D
然后在webpack.config.js文件中配置

配置react：
需要：
1.react.js
2.react-dom.js
3.babel.js


先配置babel：
需要：
1.babel-core
2.babel-loader
3.babel-preset-es2015(用于将es5转换为es6)
注意：babel-preset的包需要预设
在一个.babelrc文件中预设
安装：
cnpm i babel-core babel-loader babel-preset-es2015 -D


配置react：
需要：
1.react
2.react-dom
3.babel-preset-react
4.react-hot-loader
安装：
cnpm i react react-dom babel-preset-react react-hot-loader -D

用配置好的webpack写了一个选项卡组件，灵活性好，可以任意添加上面的按钮，且内容区的个数随着上面按钮的个数而变化，当没有对于内容时显示nocontent