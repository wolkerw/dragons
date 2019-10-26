import { all } from "redux-saga/effects";
import { getDragonsWatcher } from "./dragons";

export default function* rootSaga() {
    yield all([getDragonsWatcher()]);
}
