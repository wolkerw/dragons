/**
 * Duck referente a carga do OrderList
 * @author Otávio Bastilho
 * @copyright 07/2019
 */

import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
	addOrder: ["order"],
	removeOrder: ["order"],
	cleanOrders: []
});

//Reducer Handlers
const INITIAL_STATE = []

const add = (state = INITIAL_STATE, action) => [
	...state, action.order
];

const remove = (state = INITIAL_STATE, action) => {
	return state.filter(filteredOrder => JSON.stringify(filteredOrder) !== JSON.stringify(action.order));
}

const clean = (state = INITIAL_STATE, action) => {
	return INITIAL_STATE
}


//Criando Reducer
export default createReducer(INITIAL_STATE, {
	[Types.ADD_ORDER]: add,
	[Types.REMOVE_ORDER]: remove,
	[Types.CLEAN_ORDERS]: clean,
});
