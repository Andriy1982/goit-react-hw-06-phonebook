import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './contacts-action';

console.log(actions.deleteContact());
console.log(actions.addContact());

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
