import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
class User extends Component {
    constructor() {
        super();
        this.state = {
            number: 100
        }
    }
    change=(m,e)=>{
        // 受控组件如果想更改内容，必须通过更改状态来影响内容
        // console.log(e);
        // 当事件触发的时刻，那么事件对象是存在的，当方法执行完成，那么会被赋默认值
        // console.log(e.target.value)
        // 受控组件一般是针对表单元素
        // onkeydown：键盘按下获取input框的值，获取的是上一次的value 
        // onkeyup 键盘按下之后改变的值
        // onchange 键盘按下之后改变的值
        this.setState({number:e.target.value})
    }
    render() {
        // 组件依赖于状态
        return <div value={this.state.number}>
            <input type = "text" value={this.state.number} onChange={(e)=>{this.change(5)}}/>
            </div>
    }
}
ReactDOM.render( < User /> , window.root)