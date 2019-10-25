import { all } from "redux-saga/effects";
// import { getFreeGatesWatcher } from "./freeGates";
import { getOrdersWatcher } from "./orders";
import { getAuthenticationWatcher } from "./authentication";
// import { getAuthorizationWatcher } from "./authorization";
// import { getReconcileWatcher } from "./reconcile";
//import { getReport } from "./relatorio";

export default function* rootSaga() {
    yield all([
        // getFreeGatesWatcher(),
        getOrdersWatcher(),
        getAuthenticationWatcher()
        // getAuthorizationWatcher(),
        // getReconcileWatcher()
        //getReport()
    ]);
}
