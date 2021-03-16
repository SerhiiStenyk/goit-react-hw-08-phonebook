import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './actions';

const items = createReducer([], {
    [actions.fetcContactsSuccess]: (_,{payload}) => payload,
    [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
    [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
    [actions.addContactRequest]: () => true,
    [actions.addContactSuccess]: () => false,
    [actions.addContactError]: () => false,
    [actions.deleteContactRequest]: () => true,
    [actions.deleteContactSuccess]: () => false,
    [actions.deleteContactError]: () => false,
});
export default combineReducers({
    items,
    filter,
    loading
});