import React,{Component} from 'react';
import {Button} from 'antd';
import {connect} from './my-react-redux';

class ReactReduxPrinciple extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {num,add,minus,total,asyminus} = this.props;
        return(
            <div style={{textAlign:'left',padding:20}}>
                <p>react-redux实现原理</p>
                <p>1.需要写一个Provider组件用来传递store</p>
                <p>2.需要一个高阶函数工⼚connect，传入状态映射规则函数和派发器映射规则函数</p>
                <p>{num}</p>
                <p><Button type="primary" onClick={add}>add</Button> <Button type="primary" onClick={minus}>minus</Button> <Button type="primary" onClick={asyminus}>asyminus</Button></p>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        console.log(state,123)
        const {reducer} = state;
        return {...reducer}
    },
    {
        add: () => {
            return { type: "add" };
        },
        minus: () => {
            return { type: "minus" };
        },
        asyminus: () => {
            //这里return返回一个function，thunk判断是function的话，会调用方法并返回dispath
            return dispatch=>{
                setTimeout(()=>{
                    dispatch({ type: "asyminus" })
                },1000)
            }
        }
    }
)(ReactReduxPrinciple)