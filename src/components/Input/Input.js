import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Input.scss";
import { Form } from "react-bootstrap";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            firstInteraction: true,
            valid: false,
            value: null
        };
    }

    componentWillMount() {
        if (this.state.value !== this.props.value)
            this.setState({ value: this.props.value });
    }

    render() {
        const { id, placeholder, isRequired, name } = this.props;

        //this.setState({ value: value });

        const handleChange = event => {
            this.setState({ value: event.target.value });

            const value = event.target.value.length > 0 ? true : false;
            if (isRequired) {
                event.target.value = event.target.value.replace(/[\s]/g, "");
                this.setState({
                    valid: value
                });
                this.props.validateCallback(event.target.value, name, value);
            } else {
                this.props.validateCallback(event.target.value, name, true);
            }
        };

        const onBlur = () => {
            this.setState({ firstInteraction: false });
        };

        return (
            <div className="input" onBlur={onBlur}>
                <Form.Control
                    type="text"
                    id={id}
                    autoComplete="off"
                    name={name}
                    value={this.state.value}
                    placeholder={placeholder}
                    className={
                        "form-control" +
                        (!isRequired ||
                        (this.props.firstSubmit &&
                            (this.state.firstInteraction || this.state.valid))
                            ? ""
                            : " is-invalid")
                    }
                    onChange={handleChange}
                />
            </div>
        );
    }
}

Input.propTypes = {
    //id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    firstSubmit: PropTypes.bool,
    isRequired: PropTypes.bool
};

export default Input;
