import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
// import PropTypes from 'prop-types';
import { FilterContainer } from './FilterStyledComponents';
import { getFilter } from '../../redux/contacts/contacts-selector';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </FilterContainer>
  );
}

// Filter.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func,
// };

export default Filter;
