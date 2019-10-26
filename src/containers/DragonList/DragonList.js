import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from "react-bootstrap";
import { Creators as List } from "../../store/ducks/dragonList";
import Dragon from "../../components/Dragon/Dragon";
import "./DragonList.scss";

class DragonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            isLoading: false,
            list: []
        };
    }

    componentDidMount() {
        this.props.dragonList.cleanDragons();
        this.props.getDragons();

        this.loadList();
    }

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
        const { error, isLoading, list } = this.state;

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
                                    status="idStatusConciliacao"
                                    removeDragon={this.removeDragon}
                                    editDragon={this.editDragon}
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
