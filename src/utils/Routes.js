import React, { Component } from "react";
import AuthHOC from "./AuthHOC";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import DragonPage from "../pages/DragonPage/DragonPage";
import Header from "../components/Header/Header";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";

class PrivateRoute extends Component {
    render() {
        const { isLogged, logout } = this.props;

        let Component = this.props.component;

        return (
            <div>
                <Header />
                <Route
                    render={(props, rest) =>
                        isLogged() ? (
                            <div>
                                <Redirect
                                    to="/main"
                                    isLogged={isLogged()}
                                    logout={logout}
                                />
                                <Component
                                    {...this.props}
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
        const { isLogged, redirect, logout } = this.props;
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
                    />
                    <PrivateRoute
                        path="/dragon/add"
                        component={DragonPage}
                        isLogged={isLogged}
                    />
                    <PrivateRoute
                        path="/dragon/:id"
                        component={DragonPage}
                        isLogged={isLogged}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AuthHOC(withRouter(Routes));
