import { createSelector } from "@reduxjs/toolkit";

/* eslint-disable import/no-anonymous-default-export */
const getLoading = state => state.contacts.loading;
const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const findContact = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalized = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalized),
        );
    }
);
export default { getLoading, getContacts, getFilter, findContact};