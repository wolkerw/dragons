/**
 * Duck referente a autenticação
 */

import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
    change: ["login"]
});

//Reducer Handlers
const initialState = false;

const change = (state = initialState, action) => [{ log: action.log }];

//Criando Reducer
export default createReducer(initialState, { [Types.CHANGE]: change });
