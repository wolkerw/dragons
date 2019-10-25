import React, { Component } from "react";
// import { connect } from "react-redux";

const AuthHOC = WrappedComponent => {
    class Auth extends Component {
        /*componentDidMount = () => {
            if (this.isLogged()) {
                let gotPermissions =
                    this.props.authorization && this.props.authorization.length;

                if (gotPermissions) return;

                // test if the redux updated the props
                if (!gotPermissions) {
                    const token =
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Im1ldGEiLCJzZW5oYSI6Im1ldGEifQ.dBDm1QTX-Nfu-eciOCh76z6LXzRLl-8hnmwm11zzcZc";*/
        //const profiles = ["grp-meta-dev-root", "grp-meta-dev-root"];

        // const profiles = JSON.parse(
        //     localStorage.getItem("profiles")
        // );

        // this.props.getAuthorization(token /*, profiles*/);

        /*  this.setState({
                        completedAuth: true
                    });
                }
            }
        };*/

        /*getPermissions = () => {
            // if redux lost permissions, get them again
            return this.props.authorization;
        };*/

        logout = () => {
            localStorage.removeItem("TOKEN");
            localStorage.removeItem("profiles");
        };

        isLogged = () => {
            console.log("islogged ? ", localStorage.getItem("TOKEN"));

            return localStorage.getItem("TOKEN"); // &&
            // localStorage.getItem("profiles") &&
            // localStorage.getItem("chapa")
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

    /*const mapStateToProps = state => {
        return {
            authorization: state.authorization
        };
    };*/

    /*const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            getAuthorization: (token, profiles) =>
                dispatch({
                    type: "GET_AUTHORIZATION",
                    token: token,
                    profiles: profiles
                })
        };
    };*/

    // return Auth;
    return Auth; /*connect(
        mapStateToProps,
        mapDispatchToProps
    )*/
};

export default AuthHOC;
