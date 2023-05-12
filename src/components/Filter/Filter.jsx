import { PropTypes } from 'prop-types';
import { Label } from '../Form/Form.styled.jsx';
import { InputStyle } from '../Form/Form.styled.jsx';

export const Filter = props => {
  const { currentFilter } = props;
  const { updateFilter } = props;

  const changeFilter = e => {
    const query = e.target.value;
    updateFilter(query);
  };

  return (
    <Label htmlFor="search">
      Find contacts by name
      <InputStyle
        type="text"
        name="search"
        placeholder="Search"
        onChange={changeFilter}
        value={currentFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
