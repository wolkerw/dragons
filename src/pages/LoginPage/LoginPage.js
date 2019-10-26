import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormLogin from "../../containers/FormLogin/FormLogin";
import Header from "../../components/Header/Header";
import pt from "react-intl/locale-data/pt";
import { addLocaleData } from "react-intl";
import "./../../styles/custom-bootstrap.scss";
import "./LoginPage.scss";
addLocaleData(pt);

class LoginPage extends Component {
    render() {
        const { login, isLogged } = this.props;

        return (
            <div className="login">
                <Header />
                <div className="bg-image" />

                <Container className="text-center py-4 container-sticky">
                    <Row>
                        <Col className="text-left">
                            <p className="text-5 text-color-primary font-weight-bolder my-0 pt-1">
                                Entrar:
                            </p>

                            <Container>
                                <Row>
                                    <Col>
                                        <br />
                                        <FormLogin
                                            login={login}
                                            isLogged={isLogged}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LoginPage;
