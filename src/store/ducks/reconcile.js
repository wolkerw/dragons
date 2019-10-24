import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    reconcile: {
        // token: "teste"
    }
});

/**
 * Handlers
 */
const INITIAL_STATE = {
    // loading: false
    //token: "teste5"
};

const getReconcile = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.reconcile = action.payload;

    return newState.reconcile;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.RECONCILE]: getReconcile
});
