/**
 * Duck referente a Language
 * @author Fábio Sartori
 * @copyright 06/2019
 */

import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
    change: ["language"]
});

//Reducer Handlers
const initialState = {
    name: "pt-BR"
};

const change = (state = initialState, action) => [{ lang: action.lang }];

//Criando Reducer
export default createReducer(initialState, { [Types.CHANGE]: change });
