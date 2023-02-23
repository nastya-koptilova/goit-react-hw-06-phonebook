import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  search: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    searchContact(state, action) {
      state.search = action.payload;
    },
  },
});

export const { addContact, deleteContact, searchContact } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
