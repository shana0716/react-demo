import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd';

class ReactReduxDemo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        const {num,add,minus,total,asyminus} = this.props;
        return(
            <div style={{textAlign:'left',padding:20}}>
                <p>react-redux</p>
                <p>（每次state改变都通过subscribe订阅后重新去render和getSate,这样比较繁琐）</p>
                <p>react-redux提供两个api</p>
                <div style={{paddingLeft:10}}>
                    <p>1.Provider 为后代组件提交store</p>
                    <p>2.connect 为组件提供数据和变更方法</p>
                </div>
                <p></p>
                <p>这里要注意，Provider放到index.js里面，全局提供store</p>
                <p>这里展示state.num =》 {num}===={total}=》store里面写死的一个参数</p>
                <p><Button type="primary" onClick={add}>add</Button> <Button type="primary" onClick={minus}>minus</Button> <Button type="primary" onClick={asyminus}>asyminus</Button></p>
            </div>
        )
    }
}
//是否需要提取出去看项目需求把
const mapStateToProps = (state) => {
    console.log(state,123)
    const {reducer} = state;
        return {...reducer}
    }
const mapDispatchToProps = {
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
};
export default connect(
    mapStateToProps, //状态映射 mapStateToProps
    mapDispatchToProps, //派发事件映射
    )(ReactReduxDemo)