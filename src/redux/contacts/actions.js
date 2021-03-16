/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetcContactsSuccess = createAction('contacts/fetcContactsSuccess');
const fetcContactsError = createAction('contacts/fetcContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilter = createAction('contacts/changeFilter');
export default {
    fetchContactsRequest,
    fetcContactsSuccess,
    fetcContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter
};