import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import PrivateRoute from './privateRoute';

export default class RouterDemo extends React.Component{
    render(){
        return (
            <div style={{textAlign:'left',padding:20}}>
                <p>路由器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect</p>
                <BrowserRouter>
                    <p>
                        <Link to='/'>首页</Link>||
                        <Link to='/aboutUs'>关于我们</Link>||
                        <Link to='/dynamic/shana/24'>动态路由</Link>||
                        <Link to='/login'>登录</Link>
                    </p>
                    <Switch> {/**独占路由 */}
                    {/* 根路由需要添加exact实现精确匹配 */}
                        <PrivateRoute exact path="/" component={Home} isLogin={true} />  
                        <Route path="/aboutUs" component={About} />
                        <Route path="/dynamic/:name/:age" component={Dynamic} />
                        <Route path="/login" component={Login} />
                        <Route component={() => <h1>404</h1>} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

class Home extends React.Component{
    render(){
        return (
            <div>首页</div>
        )
    }
}

class About extends React.Component{
    render(){
        return (
            <div>关于我们</div>
        )
    }
}

class Login extends React.Component{
    render(){
        return (
            <div>登录</div>
        )
    }
}

class Dynamic extends React.Component{
    render(){
        console.log(this.props);
        const {name,age} = this.props.match.params;
        return(
            <div>动态路由呀，{name}今年{age}了 </div>
        )
    }
}