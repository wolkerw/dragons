import { takeEvery, put, call } from "redux-saga/effects";
import axios from "../../utils/axios";

function getOrdersFromApi() {
    return axios
        .get("/http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", {})
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log("getOrdersFromApi error", error);
        });
}

function getOrderFromApi(arg) {
    return axios
        .get(
            "/http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" +
                arg.id,
            {}
        )
        .then(result => {
            return result;
        })
        .catch(error => {
            //console.log("getOrderFromApi error", error);
        });
}

function removeDragonFromApi(arg) {
    return axios
        .delete(
            "/http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" +
                arg.id,
            {}
        )
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log("removeDragonFromApi error", error);
        });
}

function addDragonFromApi(arg) {
    return axios
        .post("/http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", {
            name: arg.dragonName,
            type: arg.dragonType
        })
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log("addDragonFromApi error", error);
        });
}

function editDragonFromApi(arg) {
    return axios
        .put(
            "/http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" +
                arg.dragonId,
            {
                name: arg.dragonName,
                type: arg.dragonType
            }
        )
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log("editDragonFromApi error", error);
        });
}

//generators
function* getOrdersAsync() {
    try {
        let { data } = yield call(getOrdersFromApi);

        yield put({ type: "GET_ORDERS_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "GET_ORDERS_ASYNC", payload: ["error"] });
        // console.log(error);
    }
}

function* getOrderAsync(arg) {
    try {
        let { data } = yield call(getOrderFromApi, arg);

        yield put({ type: "GET_ORDERS_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "GET_ORDERS_ASYNC", payload: ["error"] });
        // console.log(error);
    }
}

function* removeDragonAsync(arg) {
    try {
        let { data } = yield call(removeDragonFromApi, arg);

        yield put({ type: "REMOVE_DRAGON_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "REMOVE_DRAGON_ASYNC", payload: ["error"] });
        console.log(error);
    }
}

function* addDragonAsync(arg) {
    try {
        let data = yield call(addDragonFromApi, arg);

        yield put({ type: "ADD_DRAGON_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "ADD_DRAGON_ASYNC", payload: ["error"] });
        console.log(error);
    }
}

function* editDragonAsync(arg) {
    try {
        let { data } = yield call(editDragonFromApi, arg);

        yield put({ type: "EDIT_DRAGON_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "EDIT_DRAGON_ASYNC", payload: ["error"] });
        console.log(error);
    }
}

// //Generator function
export function* getOrdersWatcher(arg) {
    yield takeEvery("GET_ORDERS", getOrdersAsync);
    yield takeEvery("GET_ORDER", getOrderAsync);
    yield takeEvery("REMOVE_DRAGON", removeDragonAsync);
    yield takeEvery("ADD_DRAGON", addDragonAsync);
    yield takeEvery("EDIT_DRAGON", editDragonAsync);
}
