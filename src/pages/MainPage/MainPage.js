import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import messages from "../../assets/i18n";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import DragonList from "../../containers/DragonList/DragonList";
import "./MainPage.scss";

class MainPage extends Component {
    addDragon = () => {
        this.props.history.push(`/dragon/add`);
    };

    logout = () => {
        // localStorage.removeItem("TOKEN");
        // localStorage.removeItem("profiles");
        this.props.logout();
        this.props.history.push(`/login`);
    };

    render() {
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
                        </Row>
                    </Container>

                    <DragonList /*checkList*/ />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        // lang: state.language,
        dragonList: state.dragonList
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
