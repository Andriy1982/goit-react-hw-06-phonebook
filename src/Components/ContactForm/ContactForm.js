import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import actions from '../../redux/contacts/contacts-action';

import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactFormStyledComponent';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          name="name"
          onChange={handleInput}
          placeholder="Name*"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="number"
          value={number}
          name="number"
          onChange={handleInput}
          placeholder="111-11-11*"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

export default ContactForm;
