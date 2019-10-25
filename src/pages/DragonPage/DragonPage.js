import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FormDragon from "../../containers/FormDragon/FormDragon";
import { matchPath } from "react-router";
import "./DragonPage.scss";

class DragonPage extends Component {
    render() {
        // const { lang } = this.props;

        const match = matchPath(this.props.history.location.pathname, {
            path: "/dragon/:id",
            exact: true,
            strict: false
        });
        const id =
            match && match.params && match.params.id ? match.params.id : null;

        return (
            <Fragment>
                <div className="DragonPage">
                    <Container className="text-center py-4 container-sticky">
                        <Row>
                            <div className="text-left">
                                <p className="text-5 text-color-primary font-weight-bolder my-0 pt-1">
                                    {id ? "Editar" : "Adicionar"} Dragão:
                                </p>
                            </div>

                            <Container>
                                <Row>
                                    <Col>
                                        <br />
                                        <FormDragon
                                            id={id !== "add" ? id : null}
                                            // login={login}
                                            // isLogged={isLogged}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        // lang: state.language,
        dragonList: state.dragonList
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
    )(DragonPage)
);
