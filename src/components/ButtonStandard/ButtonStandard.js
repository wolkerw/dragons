import React from "react";
import PropTypes from "prop-types";

function ButtonStandard(props) {
    const {
        text,
        textId,
        textClass,
        className,
        type,
        disabled,
        onClick,
        isLoading
    } = props;

    const showText =
        textId === undefined && text === undefined ? (
            ""
        ) : text !== undefined && textId === undefined ? (
            <span className={textClass}>{text}</span>
        ) : (
            <span>{textId}</span>
        );

    return (
        <button
            type={type ? type : "buttom"}
            className={className + (isLoading ? " loading" : "")}
            disabled={isLoading ? true : disabled}
            onClick={isLoading ? null : onClick}
        >
            {isLoading ? <p>Carregando</p> : null}
            {showText}
        </button>
    );
}
export default ButtonStandard;

ButtonStandard.propTypes = {
    text: PropTypes.string,
    textId: PropTypes.string,
    textClass: PropTypes.string,
    disabled: PropTypes.bool,
    textValues: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
};
