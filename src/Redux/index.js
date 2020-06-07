import React,{Component} from 'react';
import store from './store.js';
import { Button } from 'antd';

export default class ReduxDemo extends Component{
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
                default:
                    return state;
            }
        }
        store.replaceReducer(nextReducer);
    }

    render(){
        console.log(store)
        return(
            <div style={{textAlign:'left',padding:20}}>
                <p>ReduxDemo</p>
                <p>1.需要一个store来储存数据</p>
                <p>2.store里的的reducer初始化state并定义state的修改规则</p>
                <p>3.通过dispatch一个action来提交对数据的修改</p>
                <p>4.action提交到reducer函数里，根据传入的action的type，返回新的state</p>
                <p>=============================================================</p>
                <p>实现步骤</p>
                <p>1.创建store.js  ===>  调用redux的createStore创建一个store参数</p>
                <p>2.引入 =》 import store from './store.js'; 打印store,可以看见store提供了四个方法 </p>
                <div style={{paddingLeft:10}}>
                    <p>dispatch: ƒ dispatch(action)</p>
                    <p>getState: ƒ getState()</p>
                    <p>replaceReducer: ƒ replaceReducer(nextReducer)  //替换最初的reducer，后面的dispath均执行替换后的reducer</p>
                    <p>subscribe: ƒ subscribe(listener) // 监听state改变</p>
                </div>
                <div>
                    使用
                    <p>这里调用getState => {store.getState()}  //因为初始的state我在store里面赋值为0</p>
                    <p>这里调用dispatch => <Button type="primary" onClick={()=>store.dispatch({type:'add'})}>增加</Button> <Button type="primary" onClick={()=>store.dispatch({type:'minus'})}>减少</Button>  //点击增加减少，getSate返回的数据没有变化，这时你需要在subscribe方法里面收到更新页面</p>
                    <p>这里调用replaceReducer => <Button type="primary" onClick={this.replaceReducer}>replaceReducer</Button>  //点击后，在触发上面的按钮事件，会走替换后的reducer</p>
                </div>
            </div>
        )
    }
}