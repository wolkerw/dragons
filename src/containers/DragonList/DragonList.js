import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
// import debounce from "lodash.debounce";
import { Creators as List } from "../../store/ducks/dragonList";
import Dragon from "../../components/Dragon/Dragon";
import "./DragonList.scss";

class DragonList extends Component {
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
        this.props.dragonList.cleanDragons();
        this.props.getDragons();

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

    // handleChecked = (checked, dragon) => {
    //     if (!checked) {
    //         this.props.dragonList.addDragon(dragon);
    //     } else {
    //         this.props.dragonList.removeDragon(dragon);
    //     }
    // };

    componentDidUpdate() {
        if (
            this.props.dragons &&
            this.props.dragons.length &&
            this.props.dragons[0] === "error" &&
            !this.state.error
        ) {
            this.setState({
                error: "Erro1",
                isLoading: false
            });
        } else if (
            this.props.dragons &&
            this.props.dragons.length &&
            !this.state.list.length
        ) {
            this.setState({
                list: this.props.dragons,
                isLoading: false
            });
        }
    }

    loadList = () => {
        this.setState({ isLoading: true });
        this.props.getDragons();
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
            <Container className="text-center dragon-list-container">
                <div className="row dragon-list-header">
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
                    list.map((dragon, i) => {
                        return (
                            <Fragment key={i}>
                                <Dragon
                                    data={dragon}
                                    // functionProps={this.handleChecked}
                                    id={`dragon-list-dragon-checkbox-${i + 1}`}
                                    status="idStatusConciliacao"
                                    removeDragon={this.removeDragon}
                                    editDragon={this.editDragon}
                                    // checkList
                                />
                            </Fragment>
                        );
                    })}
                {error && (
                    <div>
                        Erro ao buscar os dragões. Verifique se tem conexão com
                        a internet e tente novamente mais tarde.
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
        dragonList: state.dragonList,
        dragons: state.dragons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDragons: () => dispatch({ type: "GET_DRAGONS" }),
        removeDragon: id =>
            dispatch({
                type: "REMOVE_DRAGON",
                id: id
            }),
        dragonList: bindActionCreators(List, dispatch)
    };
};

// DragonList.propTypes = {
//     checkList: PropTypes.bool
// };

export const DragonListWithoutWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(DragonList);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(DragonList)
);
