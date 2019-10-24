import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
// import debounce from "lodash.debounce";
import { Creators as List } from "../../store/ducks/orderList";
import Order from "../../components/Order/Order";
import "./OrderList.scss";

class OrderList extends Component {
    constructor(props) {
        super(props);

        // Initial State
        this.state = {
            error: false,
            // hasMore: true,
            isLoading: false,
            list: []
        };

        // this.pageScroll();
    }

    componentDidMount() {
        // Fazendo o primeiro load de usuários
        this.props.getOrders();
        this.props.orderList.cleanOrders();

        this.loadList();
    }

    // pageScroll() {
    //     // Configurando debounce e evento de scroll
    //     window.onscroll = debounce(() => {
    //         const {
    //             loadList,
    //             state: { error, isLoading /*, hasMore*/ }
    //         } = this;

    //         //Evento para interromper o loading
    //         if (error || isLoading /* || !hasMore*/) return;

    //         // Verificando se o scroll chegou a base da tela
    //         if (
    //             window.innerHeight + document.documentElement.scrollTop ===
    //             document.documentElement.offsetHeight
    //         ) {
    //             loadList();
    //         }
    //     }, 100);
    // }

    handleChecked = (checked, order) => {
        if (!checked) {
            this.props.orderList.addOrder(order);
        } else {
            this.props.orderList.removeOrder(order);
        }
    };

    componentDidUpdate() {
        if (
            this.props.orders &&
            this.props.orders.length &&
            this.props.orders[0] === "error" &&
            !this.state.error
        ) {
            this.setState({
                error: "Erro1",
                isLoading: false
            });
        } else if (
            this.props.orders &&
            this.props.orders.length &&
            !this.state.list.length
        ) {
            this.setState({
                list: this.props.orders,
                isLoading: false
            });

            //return result;
            //Populando o array de pedidos
            /*const nextOrder = this.state.orders.map(order => order);

            // Adiciona os próximos pedidos ao state
            this.setState({
                //Limitando o número total de registros
                hasMore: this.state.list.length < 0,
                isLoading: false,
                list: [...this.state.list, ...nextOrder]
            });*/
        }
    }

    loadList = () => {
        this.setState({ isLoading: true });
        this.props.getOrders();
    };

    removeDragon = id => {
        this.props.removeDragon(id);

        this.setState({
            list: this.state.list.filter(function(item) {
                return item.id !== id;
            })
        });
    };

    editDragon = id => {
        this.props.history.push(`/dragon/${id}`);
    };

    render() {
        const { error, /*hasMore,*/ isLoading, list } = this.state;

        //const { checkList } = this.props;

        //const header = ["Nome", "Tipo", "Remover", "Editar"];

        //let cols = 12;
        //const length = header.length;

        //cols = checkList === true ? cols - 1 : cols;

        //const math = Number((cols / length).toFixed(1));

        //const size = math > 1 ? math : 1;

        //const style = ("col-" + size).replace(".", "-");

        return (
            <Container className="text-center order-list-container">
                <div className="row order-list-header">
                    <div className="col-4" key="Nome">
                        <span>Nome</span>
                    </div>
                    <div className="col-4" key="Tipo">
                        <span>Tipo</span>
                    </div>
                    <div className="col-2" key="Remover">
                        <span>Remover</span>
                    </div>
                    <div className="col-2" key="Editar">
                        <span>Editar</span>
                    </div>
                </div>
                {!error &&
                    !isLoading &&
                    list.map((order, i) => {
                        return (
                            <Fragment key={i}>
                                <Order
                                    data={order}
                                    functionProps={this.handleChecked}
                                    id={`order-list-order-checkbox-${i + 1}`}
                                    status="idStatusConciliacao"
                                    removeDragon={this.removeDragon}
                                    editDragon={this.editDragon}
                                    checkList
                                />
                            </Fragment>
                        );
                    })}
                {error && (
                    <div>
                        Erro ao buscar os dragões. Verifique se tem conexão com
                        aa internet e tente novamente mais tarde.
                    </div>
                )}
                {isLoading && (
                    <div>
                        <p className="text-3 text-color-primary my-0 pt-1">
                            Carregando...
                        </p>
                    </div>
                )}
                {/* {!hasMore && (
                    <div>
                        <p className="text-3 text-color-primary font-weight-bolder my-3 pt-1">
                            Não há mais dados
                        </p>
                    </div>
                )} */}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderList: state.orderList,
        orders: state.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch({ type: "GET_ORDERS" }),
        removeDragon: id =>
            dispatch({
                type: "REMOVE_DRAGON",
                id: id
            }),
        orderList: bindActionCreators(List, dispatch)
    };
};

OrderList.propTypes = {
    checkList: PropTypes.bool
};

export const OrderListWithoutWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderList);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(OrderList)
);
