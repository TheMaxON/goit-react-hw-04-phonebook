import React, { Component } from 'react';
import Input from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = newContact => {
    if (
      !this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      return;
    }
    return alert(`${newContact.name} is already in contacts.`);
  };

  onRemove = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = query => {
    this.setState({ filter: query });
  };

  showFiltered = () => {
    return this.state.contacts.filter(item =>
      item.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <Input onSubmit={this.addContact} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter
            currentFilter={this.state.filter}
            updateFilter={this.changeFilter}
          />
          <ContactsList
            showFiltered={this.showFiltered}
            onRemove={this.onRemove}
          />
        </Section>
      </>
    );
  }
}
