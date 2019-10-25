import React, { Component } from "react";
import AuthHOC from "./AuthHOC";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import DragonPage from "../pages/DragonPage/DragonPage";
//import Load from "../components/Load/Load";
// import SchedulingPage from "../pages/SchedulingPage/SchedulingPage";
// import ReconcilePage from "../pages/ReconcilePage/ReconcilePage";
import Header from "../components/Header/Header";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }, test) => {
class PrivateRoute /*React.*/ extends Component {
    render() {
        const { isLogged, logout } = this.props;

        let Component = this.props.component;

        //let isLogged = this.props.isLogged();

        //let permissions = this.props.getPermissions();
        //let currentPage = this.props.location.pathname.substr(1);

        //let havePermission = false;
        //let currentPageCode;
        /*switch (currentPage) {
            case "scheduling":
                currentPageCode = "mdl-carga";
                break;
            case "reconcile":
                currentPageCode = "mdl-conciliacao";
                break;
            default:
                currentPageCode = "mdl-lista-po";
                break;
        }*/

        // test if have permission to acces a page
        /*if (permissions && permissions.length) {
            permissions.forEach(permission => {
                if (currentPageCode === permission) havePermission = true;
            });
        }*/

        return (
            <div>
                <Header />
                <Route
                    // {...rest}
                    render={(props, rest) =>
                        /*isLogged && (!permissions || !permissions.length) ? (
                            <h2 className="text-center">Carregando...</h2>
                        ) : */ isLogged() /*&&
                        havePermission*/ ? (
                            <div>
                                <Redirect
                                    to="/main"
                                    //permissions={permissions}
                                    isLogged={isLogged()}
                                    logout={logout}
                                />
                                <Component
                                    {...this.props}
                                    //permissions={permissions}
                                    isLogged={isLogged}
                                    {...this.rest}
                                />
                            </div>
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: this.props.location }
                                }}
                                login={this.props.login}
                                isLogged={isLogged}
                            />
                        )
                    }
                />
            </div>
        );
    }
}

class Routes extends Component {
    render() {
        const { isLogged, redirect, logout /*, getPermissions*/ } = this.props;
        console.log("routes this.props", this.props);

        // redirect to the page requested by the HOC
        if (redirect) {
            this.props.history.push(redirect);
        }

        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/login" isLogged={isLogged} />
                    <Route
                        path="/login"
                        component={() => (
                            <LoginPage isLogged={isLogged}></LoginPage>
                        )}
                    />
                    <PrivateRoute
                        path="/main"
                        component={MainPage}
                        isLogged={isLogged}
                        logout={logout}
                        // getPermissions={getPermissions}
                    />
                    <PrivateRoute
                        path="/dragon/add"
                        component={DragonPage}
                        isLogged={isLogged}
                        // getPermissions={getPermissions}
                    />
                    <PrivateRoute
                        path="/dragon/:id"
                        component={DragonPage}
                        isLogged={isLogged}
                        // getPermissions={getPermissions}
                    />
                    {/* <PrivateRoute
                        path="/load"
                        component={Load}
                        isLogged={isLogged}
                        // getPermissions={getPermissions}
                    /> */}
                    {/* <PrivateRoute
                        path="/scheduling"
                        component={SchedulingPage}
                        isLogged={isLogged}
                        getPermissions={getPermissions}
                    />
                    <PrivateRoute
                        path="/reconcile"
                        component={ReconcilePage}
                        isLogged={isLogged}
                        getPermissions={getPermissions}
                    /> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AuthHOC(withRouter(Routes));
