import React,{Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// 一、组件中的数据来源有两个：
// 1.props，从外界传递过来的是属性
// 2.state：是组件中自己私有的
// 组件中只有当属性或者状态发生改变，才会重新渲染视图；
class Test extends Component{
    static propTypes={
        num:PropTypes.number
        
        //常用的属性检验类型
        /*optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,
        optionalSymbol: PropTypes.symbol,*/
    }
    static defaultProps={
        // 如果父组件传递过来属性，那么使用传递过来的属性，如果没有值，则使用默认的属性值
        n:100
    }
    constructor(){
        super();
    }
    render(){
        return <div>{this.props.num}{this.props.n}</div>
    }
}
ReactDOM.render(<Test num={999} n={666}/>,document.querySelector('#root'));