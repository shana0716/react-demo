import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function PrivateRoute({ component: Cmp, isLogin, ...rest }) {
return (
<Route  {...rest} render={props =>
        isLogin ? (
            <Cmp {...props} />
        ) : (
        <Redirect
        to={{
            pathname: "/login",
            state: { redirect: props.location.pathname },
        }}
        />
        )
    }
/>
)
}