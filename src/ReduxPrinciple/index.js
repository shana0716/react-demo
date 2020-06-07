import React,{Component} from 'react';
import {store} from './store';
import {Button} from 'antd';

export default class ReduxPrinciple extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate();
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
        console.log(store,store.getState())
        return (
            <div style={{textAlign:'left',padding:20}}>
                <p>Redux原来/手写一个简单的redux</p>
                <p>首先，我们需要定义以下四个方法</p>
                <div style={{paddingLeft:10}}>
                    <p>dispatch: ƒ dispatch(action)</p>
                    <p>getState: ƒ getState()</p>
                    <p>replaceReducer: ƒ replaceReducer(nextReducer)  //替换最初的reducer，后面的dispath均执行替换后的reducer</p>
                    <p>subscribe: ƒ subscribe(listener) // 监听state改变</p>
                </div>
                <div>
                    使用
                    <p>这里调用getState => {store.getState()}  //因为初始的state我在store里面赋值为10</p>
                    <p>这里调用dispatch => <Button type="primary" onClick={()=>store.dispatch({type:'add'})}>增加</Button> <Button type="primary" onClick={()=>store.dispatch({type:'minus'})}>减少</Button>  //点击增加减少，getSate返回的数据没有变化，这时你需要在subscribe方法里面收到更新页面</p>
                    <p>这里调用replaceReducer => <Button type="primary" onClick={this.replaceReducer}>replaceReducer</Button>  //点击后，在触发上面的按钮事件，会走替换后的reducer</p>
                </div>
                <p>一个简单的redux的实现就完成了</p>
            </div>
        )
    }
}