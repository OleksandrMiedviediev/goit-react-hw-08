import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectUsersQuery = (state) => state.filters.name;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectUsersQuery],
  (contacts, query) => {
    const lowerCaseQuery = query.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowerCaseQuery) ||
        contact.number.toLowerCase().includes(lowerCaseQuery)
    );
  }
);