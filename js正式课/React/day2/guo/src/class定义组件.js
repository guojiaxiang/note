import React,{Component} from "react";
// 在导入react是一个对象，对象中有个Component属性，属性值是一个类
import ReactDOM from "react-dom";
// 类定义组件：
// 1.需要继承Component这个类
// 2.需要在类的原型上添加render方法
// 3.render函数一定要有return
// 4.一般返回一个顶级的react元素
class Fn extends Component{
    constructor(props){
        console.log(1);

        super();
        console.log(props)
        console.log(this)
    };
    render(){
        // console.log(this);//this=>Fn的实例
        // 这个render是通过实例调用的；
        // this.props.a=1000;
        // props传递过来的属性不能进行修改；react单向数据流
        return <h1>{this.props.a}</h1>
    }
}
// 类声明的组件有状态、this、生命周期；
// 
ReactDOM.render(<Fn a='999'/>,window.root)
// render：
// 1.如果判断当前是一个类组件，首先把行间属性打包成一个对象传给这个组件类
// 2.那么会立即创建这个类的实例；new Fn({a:999})；constructor执行完成之后。将传进来的数据放到实例的props属性上；
// 3.通过实例调用原型上的render函数，让其执行，
// 4.把render的返回值转换成真实的DOM，并且插入到根元素中；