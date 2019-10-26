import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    getDragonsAsync: {},
    getDragonAsync: {},
    removeDragonAsync: {},
    addDragonAsync: {},
    editDragonAsync: {}
});

/**
 * Handlers
 */
const INITIAL_STATE = {};

const getDragons = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.dragonList = action.payload;
    return newState.dragonList;
};

const getDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.dragonList = action.payload;
    return newState.dragonList;
};

const removeDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.dragonList = action.payload;
    return newState.dragonList;
};

const addDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.dragonList = action.payload;
    return newState.dragonList;
};

const editDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.dragonList = action.payload;
    return newState.dragonList;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_DRAGONS_ASYNC]: getDragons,
    [Types.GET_DRAGON_ASYNC]: getDragon,
    [Types.REMOVE_DRAGON_ASYNC]: removeDragon,
    [Types.ADD_DRAGON_ASYNC]: addDragon,
    [Types.EDIT_DRAGON_ASYNC]: editDragon
});
