import { PropTypes } from 'prop-types';
import { ContactElem } from '../ContactElem/ContactElem';
import { ContactsListStyle } from './ContactsList.styled.jsx';

export const ContactsList = props => {
  const { showFiltered } = props;
  const { onRemove } = props;
  const filtered = showFiltered();

  return (
    <ContactsListStyle>
      {filtered.map(contact => {
        return (
          <ContactElem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onRemove={onRemove}
          />
        );
      })}
    </ContactsListStyle>
  );
};

ContactsList.propTypes = {
  showFiltered: PropTypes.func,
  onRemove: PropTypes.func,
};
