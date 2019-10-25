import { takeEvery, put, call } from "redux-saga/effects";
// import axios from "../../utils/axios";

function getAuthenticationFromApi() {
    /*return axios.request({
        method: "get",
        url: process.env.REACT_APP_BASE_URL_LOCAL + "orders.json"
    });*/
    return [
        {
            idPedido: "0000001",
            qtPecas: 35,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "18/2019",
            nCarga: 4001,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 3
        },
        {
            idPedido: "0000002",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: "",
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 2
        },
        {
            idPedido: "0000003",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 2
        },
        {
            idPedido: "0000004",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: "",
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 0
        },
        {
            idPedido: "0000005",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 1
        },
        {
            idPedido: "0000006",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 1
        },
        {
            idPedido: "0000007",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: "",
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 0
        },
        {
            idPedido: "0000008",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 0
        },
        {
            idPedido: "0000009",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 2
        },
        {
            idPedido: "0000010",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 3
        },
        {
            idPedido: "0000011",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 1
        },
        {
            idPedido: "0000012",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 1
        },
        {
            idPedido: "0000013",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 1
        },
        {
            idPedido: "0000014",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 1
        },
        {
            idPedido: "0000015",
            qtPecas: 34,
            dataDeEmissao: "2019-05-18",
            status: "Alterado",
            natureza: "Normal",
            pedidoDeAmostra: "Teste",
            semanaDeEntrega: "19/2019",
            nCarga: 5000,
            dataDeEntrega: "2019-06-18",
            fornecedor: "Lojas Renner serviços Meta",
            idStatusConciliacao: 2
        }
    ];
}

//generators
function* getAuthenticationAsync() {
    try {
        // let { data } = yield call(getAuthenticationFromApi);
        let data = yield call(getAuthenticationFromApi);
        console.log(
            "getAuthenticationAsync",
            yield call(getAuthenticationFromApi)
        );

        // dispatch the action GET_AUTHENTICATION_ASYNC
        yield put({ type: "GET_AUTHENTICATION_ASYNC", payload: data });
    } catch (error) {
        console.log(error);
    }
}

// //Generator function
export function* getAuthenticationWatcher() {
    yield takeEvery("GET_AUTHENTICATION", getAuthenticationAsync);
}
