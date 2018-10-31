import React from "react";//react：是react的核心模块
import ReactDOM from "react-dom";//提供和DOM相关的功能，会在window下新增一个ReactDOM属性，ReactDOM属性下有一个render方法；render方法将react元素或组件插入到页面中；
let a =<div></div>
// JSX元素实际上是React.createElement的一个语法糖
// React.createElement(type,prop,chhildren)
// type:当前的标签类型
// prop：行间属性
// children：子节点；从三个参数开始，后面的参数都是子节点
let b=React.createElement("div",{attr:'123'},"珠峰",React.createElement('span',null,11234),React.createElement("span",null,111111),"帅");
console.log(b);
ReactDOM.render(b,window.root)