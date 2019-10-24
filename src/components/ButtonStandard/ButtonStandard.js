import React from "react";
// import TextLabel from "../Labels/TextLabel/TextLabel";
import PropTypes from "prop-types";
// import imgLoading from "../../assets/images/loading-ellipsis.svg";

/**
 * Button podendo ser só com ícone, só com texto ou com os dois
 * @param {Date} props.date data a extrair a hora
 * @author Otávio Bastilho, Gabriel de Oliveira Rigo
 * @copyright 06/2019
 */

function ButtonStandard(props) {
    const {
        text,
        textId,
        textClass,
        // textValues,
        className,
        type,
        disabled,
        icon,
        onClick,
        // id,
        isLoading
    } = props;

    const showText =
        textId === undefined && text === undefined ? (
            ""
        ) : text !== undefined && textId === undefined ? (
            <span className={textClass}>{text}</span>
        ) : (
            // <TextLabel id={textId} text={text} values={textValues} />
            <span>{textId}</span>
        );

    const iconButton =
        (text !== undefined || textId !== undefined) && icon !== undefined
            ? "btn-with-icon"
            : "";
    const showIcon =
        icon === undefined ? "" : <i className={`${iconButton} ${icon}`} />;

    return (
        <button
            // id={id}
            type={type ? type : "buttom"}
            className={className + (isLoading ? " loading" : "")}
            disabled={isLoading ? true : disabled}
            onClick={isLoading ? null : onClick}
        >
            {isLoading ? (
                // <img
                //     className="img-loading"
                //     width="35"
                //     src={imgLoading}
                //     alt="Carregando..."
                // />
                <p>Carregando</p>
            ) : null}
            {showText}
            {showIcon}
        </button>
    );
}
export default ButtonStandard;

ButtonStandard.propTypes = {
    text: PropTypes.string,
    textId: PropTypes.string,
    textClass: PropTypes.string,
    // id: PropTypes.string,
    disabled: PropTypes.bool,
    textValues: PropTypes.object,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};
