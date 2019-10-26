import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Input from "../../components/Input/Input";
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

    callback = (text, stateName, valid) => {
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
        const { loginIsRequired, id, dragons } = this.props;

        const {
            firstInteraction,
            validInputs,
            nameIsValid,
            typeIsValid
        } = this.state;

        return (
            <div className="form-dragon">
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
                                className={"btn-login btn-rounded mt-2"}
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
        dragonList: state.dragonList,
        dragons: state.dragons
    };
};

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

export const FormDragonWithoutWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormDragon);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FormDragon)
);
