function createStore(reducer){
    let state;
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners=[];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter((item)=>
                item!==fn
            )
        }
    }
    function dispatch(action){
        state=reducer(state,action);
        listeners.forEach((item)=>{
            item()
        })
    }
    dispatch({})
    return {
        getState,
        subscribe,
        dispatch
    }
}