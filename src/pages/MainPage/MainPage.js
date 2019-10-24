import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import messages from "../../assets/i18n";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import OrderList from "../../containers/OrderList/OrderList";
import "./MainPage.scss";

class MainPage extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            errorMessage: null
        };*/
    }

    /*loadMount = () => {
        this.setState({
            errorMessage: null
        });

        // testa se as ordens selecionadas estão na mesma semana comercial de entrega
        let sameDeliverWeek;
        //let errorMessage = [];
        let msg;
        this.props.orderList.forEach(order => {
            if (!sameDeliverWeek) {
                sameDeliverWeek = order.semanaDeEntrega;
            } else if (sameDeliverWeek !== order.semanaDeEntrega) {
                msg =
                    "Não é permitido montar carga com pedidos com semana comercial diferentes.";
                //if (!errorMessage.includes(msg)) errorMessage.push(msg);
            }

            if (order.nCarga) {
                msg = "Pedido já está vinculado em outra carga.";
                if (!errorMessage.includes(msg)) errorMessage.push(msg);
            }
        });

        if (errorMessage.length) {
            this.setState({
                errorMessage: errorMessage
            });
        } else this.props.history.push(`/scheduling`);
    };*/

    addDragon = () => {
        this.props.history.push(`/dragon/add`);
    };

    logout = () => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("profiles");
        this.props.history.push(`/login`);
    };

    render() {
        const { lang, orderList /*, permissions*/ } = this.props;

        return (
            <Fragment>
                <div className="mainPage">
                    <Container className="text-center py-4 container-sticky">
                        <Row>
                            <Col xs={6} className="text-left">
                                <p className="text-5 text-color-primary font-weight-bolder my-0 pt-1">
                                    Lista de Dragões:
                                </p>
                            </Col>
                            <Col xs={6} className="text-right">
                                <ButtonStandard
                                    text="Cadastrar novo dragão"
                                    textClass="text-2"
                                    className="btn btn-primary btn-rounded btn-standard px-4"
                                    onClick={this.addDragon}
                                />
                                <ButtonStandard
                                    text="Sair"
                                    textClass="text-2"
                                    className="btn btn-primary btn-rounded btn-standard px-4 ml-2"
                                    onClick={this.logout}
                                />
                            </Col>
                            {/* <Col xs={6} className="text-right">
                                {permissions.includes("mdl-conciliacao") ? (
                                    <ButtonStandard
                                        id="order_list_reconcile_button"
                                        disabled={orderList.length !== 1}
                                        text={messages[lang.name].reconcile}
                                        textClass="text-2"
                                        className="btn btn-primary btn-rounded btn-standard px-4"
                                        icon="icon-box text-4 pl-2"
                                        onClick={this.reconcile}
                                    />
                                ) : null}

                                {permissions.includes("mdl-carga") ? (
                                    <ButtonStandard
                                        id="order_list_assemble_cargo_button"
                                        disabled={orderList.length <= 0}
                                        text={messages[lang.name].loadCargo}
                                        textClass="text-2"
                                        className="btn btn-primary btn-rounded btn-standard px-4 ml-3"
                                        icon="icon-box text-4 pl-2"
                                        onClick={this.loadMount}
                                    />
                                ) : null}

                                {permissions.includes("mdl-relatorio-po") ? (
                                    <ButtonStandard
                                        id="order_list_export_button"
                                        disabled={orderList.length !== 1}
                                        text={messages[lang.name].export}
                                        textClass="text-2"
                                        className="btn btn-primary btn-rounded btn-standard px-4 ml-3"
                                        icon="icon-export text-4 pl-2"
                                        onClick={() => this.props.getReport()}
                                    />
                                ) : null}
                            </Col> */}
                        </Row>
                        {/* {this.state.errorMessage ? ( */}
                        {/* <Row>
                            <Col>
                                {this.state.errorMessage.map((error, i) => (
                                    <p className="form-message error" key={i}>
                                        {error}
                                    </p>
                                ))}
                            </Col>
                        </Row> */}
                        {/* ) : (
                            ""
                        )} */}
                    </Container>

                    <OrderList checkList />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language,
        orderList: state.orderList
        //id: state.relatorio
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getReport: () => dispatch({ type: "GET_REPORT" })
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MainPage)
);
