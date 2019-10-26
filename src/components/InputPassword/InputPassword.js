import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InputPassword.scss";
import { Form } from "react-bootstrap";

class InputPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "password",
            firstInteraction: true,
            valid: false
        };
    }

    render() {
        const { placeholder } = this.props;

        const handleChange = event => {
            const value = event.target.value.length > 0 ? true : false;
            event.target.value = event.target.value.replace(/[\s]/g, "");
            this.setState({
                valid: value
            });
            this.props.validateCallback(event.target.value, "password", value);
        };

        const onBlur = () => {
            this.setState({ firstInteraction: false });
        };

        return (
            <div type="text" className="input-password" onBlur={onBlur}>
                <Form.Control
                    autoComplete="off"
                    name="password"
                    type={this.state.type}
                    placeholder={placeholder}
                    className={
                        "form-control" +
                        (this.props.firstSubmit &&
                        (this.state.firstInteraction || this.state.valid)
                            ? ""
                            : " is-invalid")
                    }
                    onChange={handleChange}
                />
            </div>
        );
    }
}

InputPassword.propTypes = {
    placeholder: PropTypes.string.isRequired,
    firstSubmit: PropTypes.bool
};
export default InputPassword;
