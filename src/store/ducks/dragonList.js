import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
    addDragon: ["dragon"],
    removeDragon: ["dragon"],
    cleanDragons: []
});

//Reducer Handlers
const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [...state, action.dragon];

const remove = (state = INITIAL_STATE, action) => {
    return state.filter(
        filteredDragon =>
            JSON.stringify(filteredDragon) !== JSON.stringify(action.dragon)
    );
};

const clean = (state = INITIAL_STATE, action) => {
    return INITIAL_STATE;
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
    [Types.ADD_DRAGON]: add,
    [Types.REMOVE_DRAGON]: remove,
    [Types.CLEAN_DRAGONS]: clean
});
