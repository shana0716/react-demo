import {createStore,applyMiddleware,combineReducers} from 'redux';  //applyMiddleware支持中间件  //combineReducers 模块化
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const stateObj = {
    total:100,
    num: 5
};  //给state赋初始值
const reducer = (state = stateObj, action) => {
    console.log(action)
    switch (action.type){
        case 'add': 
            return {...state,num:state.num+1};
        case 'minus':
            return {...state,num:state.num-1};
        case 'asyminus':
            return {...state,num:state.num-1};
        default:
            return state;
    }
}

const stroe = createStore(combineReducers({
    reducer:reducer,
    reducer2:reducer
}),applyMiddleware(thunk, logger));
export default stroe;