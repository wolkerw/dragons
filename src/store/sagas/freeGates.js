import { takeEvery, put, call } from "redux-saga/effects";
// import axios from "../../utils/axios";

function getFreeGatesFromApi() {
    /*return axios.request({
        method: "get",
        url: process.env.REACT_APP_BASE_URL_LOCAL + "freeGates.json",
        headers: {
            "Content-Type": "application/json"
        }
    });*/
    return {
        idLoad: 1054,
        nameCD: "CD Meta",
        week: "01/2020",
        days: {
            sun: {
                date: "01-01-2020",
                hours: []
            },
            mon: {
                date: "01-02-2020",
                hours: [
                    {
                        hour: "12:00",
                        gates: ["Portão A", "Portão C"]
                    },
                    {
                        hour: "13:00",
                        gates: ["Portão D", "Portão E"]
                    }
                ]
            },
            tue: {
                date: "01-03-2020",
                hours: [
                    {
                        hour: "09:00",
                        gates: ["Portão A", "Portão B"]
                    },
                    {
                        hour: "15:00",
                        gates: ["Portão C", "Portão E"]
                    }
                ]
            },
            wed: {
                date: "01-04-2020",
                hours: []
            },
            thu: {
                date: "01-05-2020",
                hours: [
                    {
                        hour: "08:00",
                        gates: ["Portão A", "Portão B"]
                    },
                    {
                        hour: "09:00",
                        gates: ["Portão C", "Portão E"]
                    },
                    {
                        hour: "10:00",
                        gates: ["Portão A", "Portão B", "Portão C", "Portão D"]
                    },
                    {
                        hour: "11:00",
                        gates: ["Portão B", "Portão C", "Portão D"]
                    },
                    {
                        hour: "12:00",
                        gates: ["Portão A", "Portão C", "Portão D"]
                    },
                    {
                        hour: "13:00",
                        gates: [
                            "Portão A",
                            "Portão B",
                            "Portão C",
                            "Portão D",
                            "Portão F",
                            "Portão G",
                            "Portão H",
                            "Portão I",
                            "Portão J",
                            "Portão K",
                            "Portão L",
                            "Portão M",
                            "Portão N",
                            "Portão O",
                            "Portão P",
                            "Portão Q",
                            "Portão R",
                            "Portão S",
                            "Portão T",
                            "Portão U",
                            "Portão W",
                            "Portão X",
                            "Portão Y",
                            "Portão Z"
                        ]
                    },
                    {
                        hour: "14:00",
                        gates: ["Portão A", "Portão B", "Portão D"]
                    },
                    {
                        hour: "15:00",
                        gates: ["Portão A", "Portão D"]
                    },
                    {
                        hour: "16:00",
                        gates: ["Portão A", "Portão C"]
                    },
                    {
                        hour: "18:00",
                        gates: ["Portão A", "Portão C", "Portão D"]
                    },
                    {
                        hour: "19:00",
                        gates: ["Portão B", "Portão C"]
                    },
                    {
                        hour: "20:00",
                        gates: ["Portão A", "Portão B", "Portão C", "Portão D"]
                    }
                ]
            },
            fri: {
                date: "01-06-2020",
                hours: [
                    {
                        hour: "10:00",
                        gates: ["Portão A", "Portão B"]
                    },
                    {
                        hour: "11:00",
                        gates: ["Portão A", "Portão C"]
                    }
                ]
            },
            sat: {
                date: "01-07-2020",
                hours: []
            }
        }
    };
}

//generators
function* getFreeGatesAsync() {
    try {
        // let { data } = yield call(getFreeGatesFromApi);
        let data = yield call(getFreeGatesFromApi);
        yield put({ type: "GET_FREE_GATES_ASYNC", payload: data });
    } catch (error) {
        //Este bloco em producao deverah ser melhor tratado e
        //apresentar uma mensagem para o cliente
        console.log(error);
    }
}

// //Generator function
export function* getFreeGatesWatcher() {
    yield takeEvery("GET_FREE_GATES", getFreeGatesAsync);
}