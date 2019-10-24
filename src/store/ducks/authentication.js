import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    getAuthenticationAsync: {}
});

/**
 * Handlers
 */
const INITIAL_STATE = {};

const getAuthentication = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.authentication = action.payload;
    return newState.authentication;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_AUTHENTICATION_ASYNC]: getAuthentication
});
