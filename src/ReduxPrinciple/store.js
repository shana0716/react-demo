
export const createStore = (reducer) => {
    let _reducer = reducer,currentState = undefined,currentListeners = [];
    const dispatch = (action)=>{
        currentState = _reducer(currentState, action);  // 更新当前的state
        currentListeners.map(args=>args());   //调用订阅state改变的事件
        return action;
    }
    const getState = ()=>{
        return currentState;
    }
    const subscribe = (listenr)=>{
        currentListeners.push(listenr);  //储存订阅事件
    }
    const replaceReducer = (newReducer) => {
        _reducer = newReducer;   //替换reducer
    }
    dispatch({type:'@shana'});  //第一次调用
    return {
        dispatch,
        getState,
        subscribe,
        replaceReducer,
    }
}


const firstState = 10;
function reducerFun(state = firstState, action){
    console.log(action,state,333)
    switch (action.type){
        case 'add': 
            return state+1;
        case 'minus':
            return state-1;
        case 'asyminus':
            return state-1;
        default:
            return state;
    }
}

export const store = createStore(reducerFun);
