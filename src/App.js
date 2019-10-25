import React, { Component } from "react";
// import { connect } from "react-redux";
import Routes from "./utils/Routes";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
// import messages from "./assets/i18n";
import "./styles/main.scss";

// const log = require("loglevel");
// const logLevel = process.env.REACT_APP_LOG_LEVEL || "silent";
// log.setLevel(logLevel);
const country = "pt-BR";

class App extends Component {
    // constructor() {
    //     super();
    //     // log.info("Log Inicializando App");
    // }

    render() {
        // const { lang } = this.props;
        return (
            <IntlProvider
                locale={country}
                // key="en"
                // messages={messages[lang.name]}
                // defaultLocale="en"
            >
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

// const mapStateToProps = state => ({
//     lang: state.language
// });

export default /*connect(mapStateToProps)(*/ App /*)*/;
