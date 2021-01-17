import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
// import PropTypes from 'prop-types';

import { List, ListItem } from './ContactsStyledComponent';

function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
              type="button"
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
}

// Contacts.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

export default Contacts;
