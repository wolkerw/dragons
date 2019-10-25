import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { TextLabel } from "../../components/Labels";
import Input from "../../components/Input/Input";
import InputPassword from "../../components/InputPassword/InputPassword";
// import messages from "../../assets/i18n";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import "./FormLogin.scss";
import "../../styles/base/_typography.scss";

class FormLogin extends Component {
    constructor() {
        super();
        this.state = {
            validInputs: false,
            disabled: true,
            login: "",
            password: "",
            loginIsValid: false,
            passwordIsValid: false,
            firstInteraction: true,
            completedAuth: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveLoginData(token /*, profiles, chapa*/) {
        localStorage.setItem("TOKEN", token);
        // localStorage.setItem("profiles", JSON.stringify(profiles));
        // localStorage.setItem("chapa", chapa);

        return true;
    }

    componentWillMount() {
        // if is logged, redirect to the main
        try {
            const isLogged = this.props.isLogged();

            if (isLogged && typeof isLogged === "string" && isLogged)
                this.props.history.push(`/main`);
        } catch (e) {
            console.log("FormLogin componentWillMount catch error");
        }
    }

    componentDidUpdate = () => {
        if (this.state.completedAuth) return;

        let gotToken =
            this.props.authentication && this.props.authentication.length;
        /* let gotPermissions =
            this.props.authorization && this.props.authorization.length; */

        // test if the redux updated the props
        if (gotToken) {
            //&& !gotPermissions
            // this.props.getAuthorization(
            //     localStorage.getItem("TOKEN")
            //     // JSON.parse(localStorage.getItem("profiles"))
            // );

            this.setState({ completedAuth: true });
            this.props.history.push(`/main`);
        }
    };

    login = () => {
        if (this.state.completedAuth) return;

        /*let gotToken =
            this.props.authentication && this.props.authentication.length;
        let gotPermissions =
            this.props.authorization && this.props.authorization.length;*/

        this.props.getAuthentication();
    };

    callback = (text, stateName, valid) => {
        this.setState({ [stateName]: text, [stateName + "IsValid"]: valid });
    };

    validationServices = () => {
        //Chamada do serviço de validação
        //simulação do serviço de validação
        //let logged = false;
        //let profiles = [];

        // TODO get token and profiles from authentication saga
        /*if (this.state.login === "admin" && this.state.password === "admin") {
            profiles = ["grp-meta-dev-root", "grp-meta-dev-root"];
        } else if (
            this.state.login === "123456" &&
            this.state.password === "123456"
        ) {
            profiles = ["grp-meta-dev-po"];
        } else if (
            this.state.login === "carga" &&
            this.state.password === "carga"
        ) {
            profiles = ["grp-meta-dev-carga"];
        } else if (
            this.state.login === "conciliacao" &&
            this.state.password === "conciliacao"
        ) {
            profiles = ["mdl-meta-dev-conciliacao"];
        } else if (
            this.state.login === "relatorio" &&
            this.state.password === "relatorio"
        ) {
            profiles = ["mdl-meta-dev-relatorio"];
        } else if (
            this.state.login === "agendamentos" &&
            this.state.password === "agendamentos"
        ) {
            profiles = ["mdl-meta-dev-agendamento"];
        }*/
        //if (profiles.length) logged = true;

        /*if (!logged) {
            return this.setState({
                validInputs: false,
                firstInteraction: false
            });
        }*/

        this.setState({ validInputs: true, firstInteraction: true });

        const token =
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Im1ldGEiLCJzZW5oYSI6Im1ldGEifQ.dBDm1QTX-Nfu-eciOCh76z6LXzRLl-8hnmwm11zzcZc";

        // TODO a chapa deve vir do back
        this.saveLoginData(token /*, profiles this.state.login "888001"*/);

        this.login();
    };

    handleSubmit(event) {
        event.preventDefault();
        this.validationServices();
    }

    render() {
        const { lang, loginIsRequired } = this.props;
        const {
            firstInteraction,
            validInputs,
            loginIsValid,
            passwordIsValid
        } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div type="text" className="form-group">
                    <Input
                        placeholder="Login"
                        validateCallback={this.callback}
                        firstSubmit={firstInteraction}
                        isRequired={loginIsRequired}
                        name="login"
                    />
                </div>
                <div className="form-group">
                    <InputPassword
                        placeholder="Senha"
                        validateCallback={this.callback}
                        firstSubmit={firstInteraction}
                    />
                </div>
                <div className="error-message text-1">
                    {!validInputs && !firstInteraction ? (
                        // <TextLabel id={messages[lang.name].loginError} />
                        <p>Dados incorretos!</p>
                    ) : (
                        ""
                    )}
                </div>
                <div
                    className={
                        validInputs && !firstInteraction
                            ? "error-button"
                            : "form-group-button"
                    }
                >
                    <ButtonStandard
                        disabled={
                            !(loginIsRequired
                                ? loginIsValid && passwordIsValid
                                : passwordIsValid)
                        }
                        textId="Entrar"
                        className={
                            "btn-login btn-rounded mt-2" +
                            (!(loginIsRequired
                                ? loginIsValid && passwordIsValid
                                : passwordIsValid)
                                ? " btn-login-disabled"
                                : " btn-hover")
                        }
                        type="submit"
                    />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        authentication: state.authentication,
        //authorization: state.authorization,
        lang: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAuthentication: () =>
            dispatch({
                type: "GET_AUTHENTICATION"
            }) /*,
        getAuthorization: (token, profiles) =>
            dispatch({
                type: "GET_AUTHORIZATION",
                token: token,
                profiles: profiles
            })*/
    };
};

// export for testing and storybook
export const FormLoginWithoutWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormLogin);

// export for use
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FormLogin)
);
