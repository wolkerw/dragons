import React, { Component } from "react";
import Routes from "./utils/Routes";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./styles/main.scss";

const country = "pt-BR";

class App extends Component {
    render() {
        return (
            <IntlProvider locale={country}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

export default App;
