/**
 * Duck
 * @author Otávio Bastilho
 * @copyright 08/2019
 */

import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	getFreeGatesAsync: {}
});

/**
 * Handlers
 */
const INITIAL_STATE = {};

const getFreeGates = (state = INITIAL_STATE, action) => {
	const newState = { ...state };
	newState.freeGates = action.payload;
	return newState.freeGates;
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.GET_FREE_GATES_ASYNC]: getFreeGates,
});
