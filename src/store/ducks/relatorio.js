/**
 * Duck
 * @author Gabriel de Oliveira Rigo
 * @copyright 08/2019
 */

import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
	postUsersFromApi: [],
});

//Reducer Handlers
const INITIAL_STATE = {
    pdf: '',
    pdfs: []
};

const change = (state = INITIAL_STATE, action) => {
    const newPDF = {...state};
    newPDF.pdfs = action.pdf;
    
    return newPDF;
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
    [Types.POST_USERS_FROM_API]: change,
});