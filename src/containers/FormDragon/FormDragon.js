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
import { Creators as List } from "../../store/ducks/orderList";

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
        // Fazendo o primeiro load de usuários
        //console.log("getting order this.props.id", this.props.id);

        this.props.getOrder(this.props.id);
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

    componentDidUpdate = () => {
        console.log("2this.props", this.props);
        /*if (this.props.orders.name) {
            this.setState({ dragon: this.props.orders })
            alert(
                "Dragão " + this.props.orders.name + " cadastrado com sucesso!"
            );
            console.log("cadastrado this.props.orders.data", this.props.orders);
        }*/
    };

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

    /*componentDidUpdate() {
        if (this.props.orders.name) {
        }
    }*/

    render() {
        const { lang, loginIsRequired, id, orders } = this.props;
        // console.log("id", id);

        //console.log("dragonId", id);

        const {
            firstInteraction,
            validInputs /*,
            nameIsValid,
            typeIsValid*/
        } = this.state;

        return (
            <div>
                {!id || orders.name ? (
                    <form onSubmit={this.handleSubmit}>
                        <div type="text" className="form-group">
                            <Input
                                placeholder="Nome"
                                validateCallback={this.callback}
                                firstSubmit={firstInteraction}
                                isRequired={loginIsRequired}
                                name="name"
                                value={
                                    this.props.orders.name
                                        ? this.props.orders.name
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
                                    this.props.orders.type
                                        ? this.props.orders.type
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
                                // disabled={!(typeIsValid && nameIsValid)}
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
        orderList: state.orderList,
        orders: state.orders
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
        getOrder: id => dispatch({ type: "GET_ORDER", id: id }),
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
