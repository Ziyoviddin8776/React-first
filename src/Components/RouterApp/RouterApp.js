import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ApplePage from "../../ApplePage/ApplePage";
import Game from "../../navigationPage/Game";
import GetAPI from "../../getAPI/GetAPI";
import Error from "../../getAPI/Error";
import {privateRoutes,publicRoutes} from "../../Router/Route";
import {AuthContext} from "../../Context";

function RouterApp(props) {
    const {isAuth,setIsAuth}=useContext(AuthContext)
    return (
        isAuth
        ? <Switch>
                {privateRoutes.map(route=>(
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))}
                <Redirect to="/"/>
            </Switch>
            : <Switch>
            {publicRoutes.map(route=>(
                <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
            ))}
                <Redirect to="/login"/>
        </Switch>
    );
}

export default RouterApp;