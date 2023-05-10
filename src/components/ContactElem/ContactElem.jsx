import { PropTypes } from 'prop-types';
import {
  ContactElemStyle,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactElem.styled.jsx';

export const ContactElem = ({ id, name, number, onRemove }) => {
  return (
    <ContactElemStyle>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => onRemove(id)}>
        Remove
      </DeleteBtn>
    </ContactElemStyle>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
