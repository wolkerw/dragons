import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "react-bootstrap";
import FormLogin from "../../containers/FormLogin/FormLogin";
import Header from "../../components/Header/Header";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import { addLocaleData } from "react-intl";
import messages from "../../assets/i18n";
import { Creators as Lang } from "../../store/ducks/language";
// import logoLogin from "./../../assets/images/logos/logos-login.svg";
import "./../../styles/custom-bootstrap.scss";
// import "./LoginPage.scss";
import "./LoginPage.scss";
//Adicionando os Locales
addLocaleData(pt);
addLocaleData(en);

class LoginPage extends Component {
    /*constructor() {
        super();
        this.state = {
            isLogeddIn: false
        };
    }*/
    /*constructor(props) {
        super(props);
        console.log("2LoginPage props", props);
        // props.test();
    }*/

    render() {
        const { login, isLogged } = this.props;

        return (
            <div className="login">
                <Header />
                <div className="bg-image" />

                <Container>
                    <Row>
                        <Col>
                            <p className="text-5 text-color-primary font-weight-bolder my-0 pt-1">
                                Lista de Dragões:
                            </p>
                            <FormLogin login={login} isLogged={isLogged} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

// export default Login;

// const mapStateToProps = state => ({
//     lang: state.language
// });

// const mapDispatchToProps = (dispatch, props) => {
//     return bindActionCreators(
//         {
//             change: Lang.change
//         },
//         dispatch
//     );
// };

export default LoginPage;

// export default connect()(LoginPage);
// mapStateToProps,
// mapDispatchToProps
