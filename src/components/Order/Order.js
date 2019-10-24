import React, { useState } from "react";
import { Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";
// import { DateLabel } from "../Labels";
// import StatusIcon from "../StatusIcon/StatusIcon";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import "./Order.scss";
/**
 * Gera um Pedido a ser selecionado na lista de pedidos
 * @param {object} data a ser utilizado
 * @author Otávio Bastilho
 * @copyright 07/2019
 */

function Order(props) {
    const {
        data,
        /*functionProps,*/ id,
        /*checkList,*/ status,
        removeDragon,
        editDragon
    } = props;

    //const [checked, setCheked] = useState(false);

    const lodashTruncate = (data, maxLength) => {
        return _.truncate(data, {
            length: maxLength
        });
    };

    /*const handleChecked = () => {
        checked === false ? setCheked(true) : setCheked(false);
    };*/

    if (data !== undefined && typeof data == "object") {
        const newData = {
            name: data.name,
            type: data.type
            /*codigo: data.id,
            qtPecas: data.qtPecas,
            dtEmissao: data.dtEmissao,
            status: data.status,
            naturezaPedido: data.naturezaPedido,
            amostraPedido: data.amostraPedido,
            semanaDeEntrega: data.calendarioComercial ? data.calendarioComercial.semanaComercial : '',
            nCarga: "",
            dataEntrega: "",
            fornecedor: data.fornecedor ? data.fornecedor.nome : '',
            idStatusConciliacao: 0*/
        };

        let cols = 12;
        const objects = Object.entries(newData); //Passar para data

        /*cols = checkList === true ? cols - 1 : cols;
        cols = status === true ? cols - 1 : cols;*/

        const math = Number((cols / objects.length).toFixed(1));

        const size = math > 1 ? math : 1;

        const maxLength = size * 12;

        // const style = ("col-" + size).replace(".", "-");

        //const dateRegex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])(T|\s)(([0-1][0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9])(.|)(\d{7})$/;

        const colCheckBox = (
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
                <Row
                    className="custom-order-row my-2"
                    // onClick={() => {
                    //     handleChecked();
                    //     if (
                    //         functionProps !== "" &&
                    //         functionProps !== undefined
                    //     ) {
                    //         functionProps(checked, data);
                    //     }
                    // }}
                >
                    {objects.map((data, i) => {
                        /*if (data[1] && data[1].toString().match(dateRegex)) {
                            return (
                                <div className={style} key={i}>
                                    <DateLabel date={new Date(data[1])} />
                                </div>
                            );
                        } else if (data[0] && data[0].toString() === status) {
                            return null;
                        } else  if (
                            data[1] &&
                            data[1].toString().length > maxLength
                        ) {
                            return (
                                <div className={style} key={i}>
                                    <OverlayTrigger
                                        key={data[1]}
                                        placement={"top"}
                                        overlay={
                                            <Tooltip id={`tooltip-${data[1]}`}>
                                                {data[1]}
                                            </Tooltip>
                                        }
                                    >
                                        <span>
                                            {lodashTruncate(data[1], maxLength)}
                                        </span>
                                    </OverlayTrigger>
                                </div>
                            );
                        } else */ {
                            return (
                                <div className="col-4" key={i}>
                                    <span className="text-2 font-weight-bolder">
                                        {lodashTruncate(data[1], maxLength)}
                                    </span>
                                </div>
                            );
                        }
                    })}

                    {/*checkList ? */ colCheckBox /*: ""*/}
                    {/*checkList ? */ colEdit /*: ""*/}

                    {/* {status ? (
                        <StatusIcon
                            status={newData[status]} //Passar para data
                            id={`order-${id.replace(/[^\d]/g, "")}-status-icon`}
                        />
                    ) : (
                        ""
                    )} */}
                </Row>
            );
        } else {
            return <p>Nenhum dragão encontrado.</p>;
        }
    } else {
        return <p>Dados inválidos</p>;
    }
}

Order.propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
    /*functionProps:
        PropTypes.func ,
    checkList: PropTypes.bool,
    status: PropTypes.string*/
};
export default Order;
