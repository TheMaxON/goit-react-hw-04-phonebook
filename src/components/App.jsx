import { useState, useEffect, useRef } from 'react';
import Input from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      !contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      setContacts(prevState => [newContact, ...prevState]);
      return;
    }
    return alert(`${newContact.name} is already in contacts.`);
  };

  const onRemove = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = query => {
    setFilter(query);
  };

  const showFiltered = () => {
    if (contacts.length !== 0) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  };

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Input onSubmit={addContact} />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter currentFilter={filter} updateFilter={changeFilter} />
        <ContactsList showFiltered={showFiltered} onRemove={onRemove} />
      </Section>
    </>
  );
};

export default App;
