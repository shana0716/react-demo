import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import ReduceDemo from './Reduce';
import ReduxDemo from './Redux';
import ReactReduxDemo from './ReactRedux';
import ReduxDemo2 from './Redux2';
import ReduxPrinciple from './ReduxPrinciple';
import ReactReduxPrinciple from './ReactReduxPrinciple';
import RouterDemo from './Router';
import HooksDemo from './Hooks';

function App() {
  return (
    <div className="App">
      <HooksDemo />
      <ReduceDemo />
      <ReduxDemo />
      <ReduxDemo2 />
      <ReactReduxDemo /> 
      <ReduxPrinciple />
      <RouterDemo />
      {/* <ReactReduxPrinciple /> */}
    </div>
  );
}

export default App;

// 测试按需加载和配置装饰器器
// const foo = Cmp => props => {
//   return (
//   <div className="border">
//   <Cmp {...props} />
//   </div>
//   );
//   };
//   const foo2 = Cmp => props => {
//   return (
//   <div className="border" style={{ border: "solid 1px red" }}>
//   <Cmp {...props} />
//   </div>
//   );
//   };
//   @foo
//   @foo2
//   class Child extends Component {
//   render() {
//   return <div className="border">child</div>;
//   }
//   }
//   /* function Child(props) {
//   return <div className="border">child</div>;
//   } */
//   @foo2
//   class HocPage extends Component {
//   render() {
//   // const Foo = foo2(foo(Child));
//     return (
//       <div>
//       <h1>HocPage</h1>
//       <Child />
//       <Button type="dashed">click</Button>
//       </div>
//     );
//   }
//   }
