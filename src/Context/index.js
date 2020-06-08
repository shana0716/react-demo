import React,{createContext,useContext} from 'react';

const myContext = createContext({name:'shana'});  //传初始值
const {Provider,Consumer} = myContext;

export default class ContextDemo extends React.Component{

    render(){
        return (
            <div style={{textAlign:'left',padding:20}}>
                <p>使用context可以避免组件套用时，多层级传值</p>
                <p>Context=>使用react提供的createContext创建和useContext获取，创建后会返回Provider,Consumer</p>
                <p>1.Provider的value提供放置共享的数据</p>
                <p>2.Consumer(消费者)=>需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源</p>
                {/* 注意这里使用了Provider包裹 */}
                <Provider value={{name:'wesson'}}>
                    <Component1 />
                </Provider>
                {/* 注意这里未使用了Provider包裹 */}
                <NoComponent1 />
            </div>
        )
    }
}

function Component1(props){
    return <Component2 />
}
function Component2(props){
    const obj = useContext(myContext);
    console.log(obj,444)
    return (
        <div>
            <p>这里是使用useContext获取的值=》{obj.name}</p>
            <Consumer>
                {ctx=><div>我是Component2=》{ctx.name}</div>}
            </Consumer>
        </div>
    )
}

function NoComponent1(props){
    return <NoComponent2 />
}
function NoComponent2(props){
    return (
        <Consumer>
            {ctx=><div>我是NoComponent1,如果没有被provider包裹，使用consumer则获取到createContext创建时的初始值=》{ctx.name}</div>}
        </Consumer>
    )
}