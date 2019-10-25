import { takeEvery, put, call } from "redux-saga/effects";
import axios from "../../utils/axios";

function getDragonsFromApi() {
    return axios
        .get("/http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", {})
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log("getDragonsFromApi error", error);
        });
}

function getDragonFromApi(arg) {
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
            //console.log("getDragonFromApi error", error);
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
function* getDragonsAsync() {
    try {
        let { data } = yield call(getDragonsFromApi);

        yield put({ type: "GET_DRAGONS_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "GET_DRAGONS_ASYNC", payload: ["error"] });
        // console.log(error);
    }
}

function* getDragonAsync(arg) {
    try {
        let { data } = yield call(getDragonFromApi, arg);

        yield put({ type: "GET_DRAGONS_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "GET_DRAGONS_ASYNC", payload: ["error"] });
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
export function* getDragonsWatcher(arg) {
    yield takeEvery("GET_DRAGONS", getDragonsAsync);
    yield takeEvery("GET_DRAGON", getDragonAsync);
    yield takeEvery("REMOVE_DRAGON", removeDragonAsync);
    yield takeEvery("ADD_DRAGON", addDragonAsync);
    yield takeEvery("EDIT_DRAGON", editDragonAsync);
}
