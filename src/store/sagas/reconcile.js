import { takeEvery, put, call } from "redux-saga/effects";
import axios from "../../utils/axios";

function getReconcileFromApi(token, profiles) {
    if (!token) {
        return null;
    }

    // return axios.request({
    //     method: "get",
    //     url: "http://localhost:3000/orders.json"
    // });

    // transforms the profiles into a string
    let profilesStr = "";
    let count = 0;
    profiles.forEach(profile => {
        if (count) profilesStr += ",";
        profilesStr += '"' + profile + '"';
        count++;
    });

    return axios.request({
        method: "post",
        data: {
            query: `{
                permissaoPorPerfil(perfil: [${profilesStr}]) {
                  modulos {
                    nome
                  }
                }
              }`
        }
        // headers: {
        //     // "Content-Type": "application/json",
        //     Authorization:
        //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Im1ldGEiLCJzZW5oYSI6Im1ldGEifQ.dBDm1QTX-Nfu-eciOCh76z6LXzRLl-8hnmwm11zzcZc"
        // }
    });
}

//generators
function* getReconcile(token) {
    try {
        // TODO set the loading
        /*yield put({
            type: "loading",
            payload: true
        });*/

        let { data } = yield call(
            getReconcileFromApi,
            token ? token.token : null,
            token ? token.profiles : null
        );

        let permissions = [];
        if (data.data) {
            let permissaoPorPerfil = data.data.permissaoPorPerfil;
            permissaoPorPerfil.forEach(permissao => {
                permissions.push(permissao.modulos.nome);
            });
        }

        yield put({
            type: "RECONCILE",
            payload: permissions
        });
    } catch (error) {
        //TODO Este bloco em producao deverah ser melhor tratado e
        //apresentar uma mensagem para o cliente
        console.log(error);
    }
}

function* resetReconcile() {
    yield put({
        type: "RECONCILE",
        payload: null
    });
}

// //Generator function
export function* getReconcileWatcher(arg) {
    yield takeEvery("GET_RECONCILE", getReconcile);
    yield takeEvery("RESET_RECONCILE", resetReconcile);
}
