import {createStore,applyMiddleware,combineReducers} from 'redux';  //注意这里引入了applyMiddleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const stateValue = 5;  //给state赋初始值
const reducer = (state = stateValue, action) => {
    console.log(action,'reducer')
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

const stroe = createStore(
    combineReducers({
        reducer:reducer,
        reducer2:reducer,
    }), 
    applyMiddleware(thunk, logger)
    );
export default stroe;