import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
// import { TextLabel } from "../../components/Labels";
import Input from "../../components/Input/Input";
// import messages from "../../assets/i18n";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import "./FormDragon.scss";
import "../../styles/base/_typography.scss";
import { Creators as List } from "../../store/ducks/dragonList";

class FormDragon extends Component {
    constructor() {
        super();
        this.state = {
            validInputs: false,
            disabled: true,
            login: "",
            name: "",
            type: "",
            password: "",
            nameIsValid: false,
            typeIsValid: false,
            firstInteraction: true,
            completedAuth: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.id) this.props.getDragon(this.props.id);
    }

    /*componentWillMount() {
        // if is logged, redirect to the main
        try {
            const isLogged = this.props.isLogged();

            if (typeof isLogged === "string" && isLogged)
                this.props.history.push(`/main`);
        } catch (e) {
            console.log("FormLogin componentWillMount catch error");
        }
    }*/

    /*componentWillReceiveProps = () => {
        console.log("componentWillReceiveProps props", this.props);
    };*/

    /*componentDidUpdate = () => {
        console.log("2this.props", this.props);
    };*/

    callback = (text, stateName, valid) => {
        /*console.log("callback text", text);
        console.log("callback stateName", stateName);
        console.log("callback valid", valid);*/

        this.setState({ [stateName]: text, [stateName + "IsValid"]: valid });
    };

    validationServices = () => {
        this.setState({ validInputs: true, firstInteraction: true });

        const token =
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Im1ldGEiLCJzZW5oYSI6Im1ldGEifQ.dBDm1QTX-Nfu-eciOCh76z6LXzRLl-8hnmwm11zzcZc";

        this.saveLoginData(token);
    };

    handleSubmit(event) {
        event.preventDefault();
        /*console.log("event.target.name", event.target.name.value);
        console.log("event.target.type", event.target.type.value);*/
        if (this.props.id) {
            this.props.editDragon(
                event.target.name.value,
                event.target.type.value,
                this.props.id
            );

            alert("Dragão atualizado com sucesso!");
        } else {
            this.props.addDragon(
                event.target.name.value,
                event.target.type.value
            );
            alert("Dragão cadastrado com sucesso!");
        }
        this.props.history.push(`/main`);
    }

    render() {
        const { /*lang, */ loginIsRequired, id, dragons } = this.props;
        console.log("formdragon this.props", this.props);
        // console.log("id", id);

        //console.log("dragonId", id);

        const {
            firstInteraction,
            validInputs,
            nameIsValid,
            typeIsValid
        } = this.state;

        return (
            <div>
                {!id || dragons.name ? (
                    <form onSubmit={this.handleSubmit}>
                        <div type="text" className="form-group">
                            <Input
                                placeholder="Nome"
                                validateCallback={this.callback}
                                firstSubmit={firstInteraction}
                                isRequired={loginIsRequired}
                                name="name"
                                value={
                                    this.props.dragons.name
                                        ? this.props.dragons.name
                                        : ""
                                }
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                placeholder="Tipo"
                                validateCallback={this.callback}
                                firstSubmit={firstInteraction}
                                name="type"
                                value={
                                    this.props.dragons.type
                                        ? this.props.dragons.type
                                        : ""
                                }
                            />
                        </div>
                        <div className="error-message text-1">
                            {!validInputs && !firstInteraction ? (
                                <p>Dados incorretos!</p>
                            ) : (
                                // <TextLabel
                                //     id={messages[lang.name].loginError}
                                // />
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
                                disabled={!id && !(typeIsValid && nameIsValid)}
                                textId={id ? "Editar" : "Cadastrar"}
                                className={
                                    "btn-login btn-rounded mt-2" //+
                                    // (!(loginIsRequired
                                    //     ? loginIsValid && passwordIsValid
                                    //     : passwordIsValid)
                                    //     ? " btn-login-disabled"
                                    //     : " btn-hover")
                                }
                                type="submit"
                            />
                        </div>
                    </form>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //dragonCreated: state.dragonCreated
        dragonList: state.dragonList,
        dragons: state.dragons
    };
};

/*const mapStateToProps = state => {
    return {
        authentication: state.authentication,
        authorization: state.authorization,
        lang: state.language
    };
};*/
const mapDispatchToProps = dispatch => {
    return {
        getDragon: id => dispatch({ type: "GET_DRAGON", id: id }),
        addDragon: (dragonName, dragonType) =>
            dispatch({
                type: "ADD_DRAGON",
                dragonName: dragonName,
                dragonType: dragonType
            }),
        editDragon: (dragonName, dragonType, dragonId) =>
            dispatch({
                type: "EDIT_DRAGON",
                dragonName: dragonName,
                dragonType: dragonType,
                dragonId: dragonId
            }),
        dragonCreated: bindActionCreators(List, dispatch)
    };
};

// export for testing and storybook
export const FormDragonWithoutWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormDragon);

// export for use
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FormDragon)
);
