import React from "react";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import "./Dragon.scss";

function Dragon(props) {
    const { data, removeDragon, editDragon } = props;

    const lodashTruncate = (data, maxLength) => {
        return _.truncate(data, {
            length: maxLength
        });
    };

    if (data !== undefined && typeof data == "object") {
        const newData = {
            name: data.name,
            type: data.type
        };

        let cols = 12;
        const objects = Object.entries(newData);

        const math = Number((cols / objects.length).toFixed(1));

        const size = math > 1 ? math : 1;

        const maxLength = size * 12;

        const colRemove = (
            <div className="col-2 custom-col">
                <div className="custom-checkbox">
                    <ButtonStandard
                        text="Remover"
                        textClass="text-2"
                        className="btn btn-primary btn-rounded btn-standard px-4 ml-3"
                        onClick={() => removeDragon(data.id)}
                    />
                </div>
            </div>
        );

        const colEdit = (
            <div className="col-2 custom-col">
                <div className="custom-checkbox">
                    <ButtonStandard
                        text="Editar"
                        textClass="text-2"
                        className="btn btn-primary btn-rounded btn-standard px-4 ml-3"
                        onClick={() => editDragon(data.id)}
                    />
                </div>
            </div>
        );

        if (objects.length > 0) {
            return (
                <Row className="custom-dragon-row my-2">
                    {objects.map((data, i) => {
                        return (
                            <div className="col-4" key={i}>
                                <span className="text-2 font-weight-bolder">
                                    {lodashTruncate(data[1], maxLength)}
                                </span>
                            </div>
                        );
                    })}
                    {colRemove}
                    {colEdit}
                </Row>
            );
        } else {
            return <p>Nenhum dragão encontrado.</p>;
        }
    } else {
        return <p>Dados inválidos</p>;
    }
}

Dragon.propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string
};
export default Dragon;
