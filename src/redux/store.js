import { createStore, combineReducers } from 'redux';
import contacts from './contacts/contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';

// const addTodo = text => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

// const addContact = contact => {
//     setContacts(state => {
//       if (state.some(el => el.name === contact.name)) {
//         alert(`${contact.name} is already in contacts!`);
//         return;
//       }
//       return [...state, contact];
//     });
//   };

// const rootReducer = (state, action) => state;

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;

// {
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   }
