import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InputPassword.scss";
// import eye from "../../assets/images/icons/icon-eye.svg";
// import eyeFalse from "../../assets/images/icons/icon-eye-false.svg";
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
        const { /*id, */ placeholder } = this.props;
        // const showHide = event => {
        //     event.preventDefault();
        //     event.stopPropagation();

        //     this.setState({
        //         type: this.state.type === "text" ? "password" : "text"
        //     });
        // };

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
                    // id={id}
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
                {/* <div type="text" className="password-eye" onClick={showHide}>
                    <img
                        alt="Eye icon"
                        width="16"
                        src={this.state.type === "text" ? eye : eyeFalse}
                    />
                </div> */}
            </div>
        );
    }
}

InputPassword.propTypes = {
    placeholder: PropTypes.string.isRequired,
    firstSubmit: PropTypes.bool
};
export default InputPassword;
