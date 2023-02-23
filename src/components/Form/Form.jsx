import React, { useState } from 'react';
import { FormEl, Label, Title, Input, Button } from './Form.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsData.contacts);
  const [userName, setUserName] = useState('');
  const [userTel, setUserTel] = useState('');

  const onNameChange = event => {
    const newName = event.target.value;
    setUserName(newName);
  };

  const onTelChange = event => {
    const newTel = event.target.value;
    setUserTel(newTel);
  };

  const onAddClick = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: userName,
      tel: userTel,
    };
    if (contacts.some(el => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setUserName('');
    setUserTel('');
  };

  return (
    <FormEl onSubmit={onAddClick}>
      <Label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onNameChange}
          value={userName}
        />
        <Title>Nubmer</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={userTel}
          onChange={onTelChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
};