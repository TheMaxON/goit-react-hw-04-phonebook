import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import { InputContainer, Label, InputStyle, Button } from './Form.styled.jsx';

const Input = props => {
  const [contactName, setName] = useState('');
  const [contactNumber, setNumber] = useState('');

  const onChange = event => {
    const { name, value } = event.target;
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

  const onSubmit = event => {
    event.preventDefault();

    const { name, number } = event.target.elements;
    setName(name.value);
    setNumber(number.value);

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    props.onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <InputContainer onSubmit={onSubmit}>
      <Label htmlFor="name">
        Name
        <InputStyle
          type="text"
          name="name"
          value={contactName}
          placeholder="Type your name..."
          onChange={onChange}
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
          value={contactNumber}
          placeholder="Type your phone number..."
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </InputContainer>
  );
};

export default Input;

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
