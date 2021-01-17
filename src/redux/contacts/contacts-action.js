import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => ({
  type: 'contact/add',
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

// const addContact = (name, number)=> ({
//     type: 'contact/add',
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// })
const deleteContact = createAction('contact/delete');

// const deleteContact = contactId => ({
//     type: 'contact/delete',
//     payload: contactId,
// })
const changeFilter = createAction('contact/changeFilter');

// const changeFilter = filter => ({
//     type: 'contact/changeFilter',
//     payload: filter,
// })

export default { addContact, deleteContact, changeFilter };
