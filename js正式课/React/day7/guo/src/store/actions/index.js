import * as Types from '../action-types';
export default{
    add(todo){
        return {type:Types.ADD_TODO,todo}
    },
    delete(id){
        return {type:Types.DELETE_TODO,id}
    },
    change(id){
        return {type:Types.CHANGE,id}
    },
    changeType(val){
        console.log(1);
        
        return {type:Types.CHANGE_TYPE,val}
    }
} 