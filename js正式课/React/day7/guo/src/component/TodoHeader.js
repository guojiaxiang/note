import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/index";

 class TodoHeader extends React.Component{
    constructor(){
        super()
    }
    addTodo=(e)=>{
        let reg=/[\u4e00-\u9fa5]/;
        if(e.keyCode===13){
            if(!reg.test(e.target.value)){
                e.target.value=""  
            }else{
                this.props.add(e.target.value);
            }
            e.target.value=""
        }
    }
    unfinish=()=>{
        return this.props.todos.filter((item)=>!item.isSelected).length
    }
    render(){
        return <div>
            <h2>还有{this.unfinish()}件事未完成！</h2>
            <input type="text" className="form-control" onKeyUp={this.addTodo}/>
        </div>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoHeader)