import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./ducks";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let midCompose = "";

if (process.env.NODE_ENV === "development") {
    midCompose = composeWithDevTools(applyMiddleware(sagaMiddleware));
} else {
    midCompose = applyMiddleware(sagaMiddleware);
}

const store = createStore(reducers, midCompose);

sagaMiddleware.run(rootSaga);

export default store;
