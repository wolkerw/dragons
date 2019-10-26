import React, { Component } from "react";

const AuthHOC = WrappedComponent => {
    class Auth extends Component {
        logout = () => {
            localStorage.removeItem("TOKEN");
            localStorage.removeItem("profiles");
        };

        isLogged = () => {
            return localStorage.getItem("TOKEN");
        };

        render() {
            return (
                <WrappedComponent
                    isLogged={this.isLogged}
                    logout={this.logout}
                    getPermissions={this.getPermissions}
                ></WrappedComponent>
            );
        }
    }

    return Auth;
};

export default AuthHOC;
