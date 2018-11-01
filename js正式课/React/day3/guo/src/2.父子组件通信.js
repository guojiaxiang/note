// function

// class：定义的组件有this、状态和生命周期
// 在项目工作中如果当前的元素是静态的，不变的，一般会使用function的方法定义组件；
// 如果当前组件的元素是由数据渲染出来的，一般会采用class的方式定义；
// 只有属性或状态发生改变的时候才会导致视图的刷新
import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component{
    constructor(){
        super();
        // 一般情况下，在constructor中定义状态（constructor先执行）
        this.state={a:99}
    }
    addNum=(count)=>{
        this.setState({a:this.state.a+count})
    }
    render(){
        return <div>
            {this.state.a}
            {/* <button onClick={()=>{this.addNum(1)}}>+</button>
            <button onClick={()=>{this.addNum(2)}}>+</button> */}
<button onClick={()=>{this.addNum(10)}}>+</button>
            <button onClick={this.addNum.bind(this,2)}>+</button>
            
            <Child m={this.state.a}/>
            
        </div>
    }
}
// 一个组件A在另一个组件B中进行注册使用，那么这个组件A就是另一个组件B的子组件
class Child extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>{this.props.m}</div>
    }
}
ReactDOM.render(
<Parent/>,
document.querySelector("#root")
)