import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter/>
        <Contacts />
      </div>
    </>
  );
};
