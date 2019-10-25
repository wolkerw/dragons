import { combineReducers } from "redux";

// import language from "./language";
import login from "./login";
import input from "./login";
import orders from "./orders";
import orderList from "./orderList";
// import freeGates from "./freeGates";
// import scheduling from "./scheduling";
//import relatorio from "./relatorio";
import authentication from "./authentication";
// import authorization from "./authorization";
// import reconcile from "./reconcile";

export default combineReducers({
    // language,
    login,
    orders,
    orderList,
    input,
    // freeGates,
    // scheduling,
    //relatorio,
    authentication
    // authorization,
    // reconcile
});
