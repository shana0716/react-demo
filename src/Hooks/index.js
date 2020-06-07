import React,{useState, useEffect, useReducer} from 'react';
import { Button } from 'antd';
import { act } from 'react-dom/test-utils';

const HooksDemo = ()=>{
    const [num,setNum] = useState(10);
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime(new Date())
        },1000);
        return ()=>clearInterval(timer)
    },[])
    return(
        <div style={{textAlign:'left',padding:20}}>
            <p>Hooks  ===> 主要用在函数内部  主要提供了useState\useReducer\useEffect方法</p>
            <p>num=>{num}</p>
            <p><Button onClick={()=>setNum(num+1)}>num+1</Button> <Button onClick={()=>setNum(num-1)}>num-1</Button></p>
            <p>time=>{time.toLocaleTimeString()}</p>
            <UseReducerDemo />
        </div>
    )
}
export default HooksDemo;


const UseReducerDemo = ()=>{
    const [names,setNames] = useReducer(nameReducer,['shana']);
    const [val,setVal] = useState('');
    return(
        <div>
            <p>useReducer</p>
            {names.map((val,key)=>(
                <li key={'name'+key}>{val} <Button onClick={()=>{
                    let _names = [...names];
                    _names.splice(key,1);
                    setNames({type:'del',payload:_names})
                }}>del</Button></li>
            ))}
            <input onChange={(e)=>setVal(e.target.value)} value={val} />
            <Button onClick={()=>setNames({type:'add',payload:[...names, val]})}>新增</Button>
        </div>
    )
}

const nameReducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'add':
            case 'del':
            return action.payload
        default:
            return state;
    }
}