import React,{PureComponent,Component} from 'react';

const foo1 = ()=>{
    console.log('foo1')
}

const foo2 = ()=>{
    console.log('foo2')
}

const foo3 = ()=>{
    console.log('foo3')
}

function compose(...funcs){
    if(!funcs.length){
        return console.log('none')
    }
    if(funcs.length===1){
        return funcs[0]
    }
    return funcs.reduce((left, right) => (...args) => right(left(...args)))
}
export default class ReduceDemo extends PureComponent{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //reduce
        let arr = [1,2,3,4,5,6,7,8,9,10];
        console.log(arr.reduce((one,two)=>one+two));
        console.log(arr.reduce((one,two)=>one+two,5));
        compose(
            foo1,
            foo2,
            foo3,
            )();
    }    

    render(){
        return(
            <div>
                该reduce()方法在数组的每个元素上执行reducer函数，从而产生单个输出值。
            </div>
        )
    }
}