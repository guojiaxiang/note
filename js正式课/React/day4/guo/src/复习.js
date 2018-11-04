// react 是Facebook()开发的js框架 构建用户界面的
// react是MVC框架，单项数据流
// JSX是JS+XML；React.createElement的语法糖,特点创建了一个虚拟的dom
// import React from "react"
// class Element{
//     constructor(type,attr,children){
//         this.type=type;
//         this.attr=attr;
//         this.children=children
//     }
//     render(){
//         // 把虚拟的dom转成真正的dom
//         // htis--->实例
//         let ele=document.createElement(this.type);
//         for(let key in this.attr){
//             ele.setAttribute(key,this.attr[key])
//         }
//         this.children.forEach((item,index)=>{
//             let a = item instanceof Element ? item.render():document.createElement(item);
//             ele.appendChild(a)
//         })
//         return ele;
//     }
// }
// let React = {
//     createElement(type, attr, ...children) {
//         return new Element(type,attr,children)
//     }
// };
// let ReactDOM = {
//     render(element, container) {
//         container.appendChild()//必须放入节点类型的数据，其他数据不行
//     }
// }
// React.createElement('div',{a:1},12,React.createElement())
// 组件：定义方式=》 函数 class
// 函数：定义一些静态的DOM
// class：定义动态的DOM；类定义的组件有this、state和生命周期
// 数据来源：props（外边传进来的） state（自己的）这两个数据都会影响视图的更新
// 动态绑定：如果数据时后端请求过来可变的都是动态的数据；
// 受控组件：onChange 只能通过修改状态来修改input元素的值
// 生命周期：

// 实例的初始化：defaultProps=》constructor=》componentWillMount=》render=》componentDidMount（可以操作dom）

// 数据更新
// shouldComponentUpdate:经常用于react中的优化：nextProps，nextState  return =》Boolean会根据当前函数的返回值，判断是否向下继续执行
// shouldComponentUpdate=>componentWillUpdate=》render =》componentDidUpdate；

// 实例销毁
// componentWillUnmount
// ReactDOM.unmountComponentAtNode(window.root)