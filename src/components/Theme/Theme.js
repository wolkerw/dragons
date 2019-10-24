import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "react-bootstrap";
import prefixes from "./prefixes";

class Theme extends PureComponent {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        return (
            <ThemeProvider prefixes={prefixes}>
                {this.props.children}
            </ThemeProvider>
        );
    }
}

export default Theme;
