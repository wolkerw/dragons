import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "../../components/Input/Input";
import InputPassword from "../../components/InputPassword/InputPassword";
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
            firstInteraction: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveLoginData(token) {
        localStorage.setItem("TOKEN", token);

        return true;
    }

    componentWillMount() {
        try {
            const isLogged = this.props.isLogged();

            if (isLogged && typeof isLogged === "string" && isLogged)
                this.props.history.push(`/main`);
        } catch (e) {
            console.log("FormLogin componentWillMount catch error");
        }
    }

    login = () => {
        this.props.history.push(`/main`);
    };

    callback = (text, stateName, valid) => {
        this.setState({ [stateName]: text, [stateName + "IsValid"]: valid });
    };

    validationServices = () => {
        this.setState({ validInputs: true, firstInteraction: true });

        const token =
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Im1ldGEiLCJzZW5oYSI6Im1ldGEifQ.dBDm1QTX-Nfu-eciOCh76z6LXzRLl-8hnmwm11zzcZc";

        this.saveLoginData(token);

        this.login();
    };

    handleSubmit(event) {
        event.preventDefault();
        this.validationServices();
    }

    render() {
        const { loginIsRequired } = this.props;
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

export const FormLoginWithoutWithRouter = FormLogin;

export default withRouter(FormLogin);
