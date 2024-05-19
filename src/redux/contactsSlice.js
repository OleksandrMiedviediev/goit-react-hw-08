import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: builder => builder.addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false; 
    }).addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    }).addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
    }).addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
    }).addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
    }).addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
    }).addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
    }).addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item=>item.id !== action.payload.id); 
    }),
})

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, nameFilter) => {
    return contacts.filter(item =>item.name.toLowerCase().includes(nameFilter.toLowerCase()))
})

export default slice.reducer;