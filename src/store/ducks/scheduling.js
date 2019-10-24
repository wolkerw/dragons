/**
 * Duck referente a Scheduling(Agendamento)
 * @author Otávio Bastilho
 * @copyright 08/2019
 */

import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
	selectWeekday: ["weekday"],
	selectDate: ["date"],
	selectHour: ["hour"],
	selectGate: ["gate"],
	clearHour: [],
	clearGate: []
});

//Reducer Handlers
const INITIAL_STATE = {
	weekday: '',
	date: '',
	hour: '',
	gate: '',
}

const weekday = (state = INITIAL_STATE, action) => {
	return {...state, weekday : action.weekday}
}

const date = (state = INITIAL_STATE, action) => {
	return {...state, date : action.date}
}

const hour = (state = INITIAL_STATE, action) => {
	return {...state, hour : action.hour}
}

const gate = (state = INITIAL_STATE, action) => {
	return {...state, gate : action.gate}
}

const clearHour  = (state = INITIAL_STATE, action) => {
	return {...state, hour : ''}
}

const clearGate  = (state = INITIAL_STATE, action) => {
	return {...state, gate: ''}
}


//Criando Reducer
export default createReducer(INITIAL_STATE, {
	[Types.SELECT_WEEKDAY]: weekday,
	[Types.SELECT_DATE]: date,
	[Types.SELECT_HOUR]: hour,
	[Types.SELECT_GATE]: gate,
	[Types.CLEAR_HOUR] : clearHour,
	[Types.CLEAR_GATE] : clearGate
});
