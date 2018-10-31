import React from 'react';
import ReactDOM from 'react-dom';
let arr=[{name:'aa'},{name:'bb'},{name:'cc'}];
// 将数组中的每一项循环到每一个li中；
// 在react中经常使用数组的map方法来遍历数据，创建出新的DOM；
 let ul=<ul>
    {arr.map((item,index)=>{
        // item代表数组的每一项 index代表每一项的索引；
        // forEach 没有返回值
        let {name}=item;
        return <li key={index}>{item.name}</li>
    })}
</ul> 
ReactDOM.render(ul,window.root);
// 1.箭头函数中的this指向上一级作用域中的this
// 2.没有arguments
// 3.不能作为构造函数，不能被new
// 4.不能作为generator





/* map和forEach的区别
let c=arr.map((item,index)=>{})
console.log(c);//[ undefined, undefined, undefined, undefined, undefined ]
let d=arr.forEach((item,index)=>{
    return 5
});//undefined
console.log(d);
 */