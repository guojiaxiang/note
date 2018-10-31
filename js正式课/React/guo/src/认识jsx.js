// JSX：js和XML的组合 可以在js中编写html元素
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// render是一个ReactDOM中的一个函数
// 将<div>123</div>这个元素放进全局下id名是root的元素中
// 1.JSX元素不是一个真实的DOM；JSX元素是一个虚拟的DOM元素，是一个对象数据类型的
// 2.JSX元素必须被一个闭合的标签包裹起来（只有一个根元素）；
// 3.JSX元素中采用{}进行获取值的操作
// 4.JSX元素取值时，{}不能放对象，但是可以放数组,注意！如果放的是数组的话，会把数组中的每一项转换成字符串进行拼接，一起放进元素中
// 5.如果大括号中的值是true/false/null/undefined；那么这些值将不会显示
// 6.JSX中的{}支持三元表达式
// 7.支持函数的执行结果，函数中没有return是，页面中什么也不显示。
// 8.style 不支持字符串的类型，需要转成{{}}
// 9.如果是class要写className；for要写htmlFor




// ReactDOM.render(<div>123<div>456</div></div>,document.getElementById('root'));
function b(){
    return 100
}
let zfpx=111111;
// let a = <div>123<div>{zfpx}</div></div>
let obj={a:'999'};
let a = <div>123<div>{obj.a}</div></div>
let arr=[1,2,3,4,5,6,'qqq'];
// let a = <div>123<div>{arr}</div></div>;
// let a = <div>123<div>{false}</div></div>
// let a = <div>123<div>{b()}</div></div>
// let a = <div>123<div style={{width:'100px' ,color:'red'}}>{zfpx}</div></div>
// let a = <div>123<div style={{color:'red'}} className='container'>{zfpx}</div></div>
console.log(a);
// render方法
// 1.参数1是虚拟的DOM元素；参数2是将要挂载的元素；
// 2.render方法是将虚拟的DOM元素先转换成真实的DOM元素
// 3.然后将真实的DOM元素注入到root根元素中
ReactDOM.render(a,document.getElementById('root')) 