import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    getOrdersAsync: {},
    getOrderAsync: {},
    removeDragonAsync: {},
    addDragonAsync: {},
    editDragonAsync: {}
});

/**
 * Handlers
 */
const INITIAL_STATE = {};

const getOrders = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.orderList = action.payload;
    return newState.orderList;
};

const getOrder = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.orderList = action.payload;
    return newState.orderList;
};

const removeDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    // TODO
    newState.orderList = action.payload;
    return newState.orderList;
};

const addDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    // TODO
    newState.orderList = action.payload;
    return newState.orderList;
};

const editDragon = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    // TODO
    newState.orderList = action.payload;
    return newState.orderList;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_ORDERS_ASYNC]: getOrders,
    [Types.GET_ORDER_ASYNC]: getOrder,
    [Types.REMOVE_DRAGON_ASYNC]: removeDragon,
    [Types.ADD_DRAGON_ASYNC]: addDragon,
    [Types.EDIT_DRAGON_ASYNC]: editDragon
});
