import React,{Component} from 'react';
import store from './store.js';
import { Button } from 'antd';

export default class ReduxDemo2 extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        store.subscribe(()=>{
            // this.setState({}); //更新方法1
            this.forceUpdate(); //更新方法2  推荐使用
        })
    }

    replaceReducer=()=>{
        const nextReducer = (state, action)=>{
            console.log(action,'replaceReducer')
            switch (action.type){
                case 'add': 
                    return state+2;
                case 'minus':
                    return state-2;
                case 'asyminus':
                    return state-2;
                default:
                    return state;
            }
        }
        store.replaceReducer(nextReducer);
    }

    asyminus=()=>{
        setTimeout(()=>{
            store.dispatch({type:'asyminus'})
        },1000)
    }

    render(){
        console.log(store)
        return(
            <div style={{textAlign:'left',padding:20}}>
                <p>1.redux + redux-thunk + redux-logger  ===》  同理，可以react-redux使用</p>
                <p>2.redux 模块话  combineReducers => store.getState() 返回都是模块里面的对象了，react-redux同理</p>
                <p>由于redux只能单纯的支持同步，但是接口请求都是异步的，这时我们需要引入中间件thunk来支持异步</p>
                <p></p>
                <div>
                    使用
                    <p>这里调用getState => {store.getState().reducer}  //值获取就需要取store.getState()下你创建模块化时定义的对象了，我的是store.getState().reducer</p>
                    <p>这里调用dispatch => <Button type="primary" onClick={()=>store.dispatch({type:'add'})}>增加</Button> <Button type="primary" onClick={()=>store.dispatch({type:'minus'})}>减少</Button>  //点击增加减少，getSate返回的数据没有变化，这时你需要在subscribe方法里面收到更新页面</p>
                    <p>这里调用replaceReducer => <Button type="primary" onClick={this.replaceReducer}>replaceReducer</Button>  //点击后，在触发上面的按钮事件，会走替换后的reducer</p>
                    <p>这里异步调用dispatch,用setTimeout一秒后执行 => <Button type="primary" onClick={this.asyminus}>asyminus</Button>  //点击后，在触发上面的按钮事件，会走替换后的reducer</p>
                </div>
            </div>
        )
    }
}