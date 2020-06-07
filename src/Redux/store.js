import {createStore} from 'redux';
const stateValue = 5;  //给state赋初始值
const reducer = (state = stateValue, action) => {
    console.log(action,'reducer')
    switch (action.type){
        case 'add': 
            return state+1;
        case 'minus':
            return state-1;
        default:
            return state;
    }
}

const stroe = createStore(reducer);
export default stroe;