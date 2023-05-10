import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import { InputContainer, Label, InputStyle, Button } from './Form.styled.jsx';

class Input extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, number } = event.target.elements;
    this.setState({
      name: name.value,
      number: number.value,
    });

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <InputContainer onSubmit={this.onSubmit}>
        <Label htmlFor="name">
          Name
          <InputStyle
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Type your name..."
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <InputStyle
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Type your phone number..."
            onChange={this.onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </InputContainer>
    );
  }
}

export default Input;

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
