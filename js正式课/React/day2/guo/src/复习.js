// 组件化的优势：可复用 可组合 可维护
// JSX语法：JS+XML：可以在JS中编写html的一种语法；
// 只有react支持JSX语法
let a=<div></div>;
// a 是一个变量，存储的是JSX元素，也叫react元素，也叫虚拟的DOM元素
// 1.用大括号来取值
// 2.大括号中不允许直接放对象
// 3.true/false/null/undefined都不显示任何内容
// 4.数组每一项会转成字符串拼接到一起
// 5.支持三元运算符
// 6.可以放函数的返回值
// 7.style=》{{}}
// 8.class=》className ；for=》htmlFor
// JSX元素必须被一个闭合的标签包裹起来，只能有一个根元素。

// JSX元素就是一个虚拟的DOM元素