import React, { useContext, useState } from 'react';
import '../css/AddedFilters.css';
// import PropTypes from 'prop-types';
import starWarsContext from '../context/ContextAPI';
import { useRemoveFiltersValus } from '../Effects/Hoocks';

function AddedFilters() {
  const {
    filterByNumericValues,
    removeFilterByNumericValues,
    addColumnNamne,
  } = useContext(starWarsContext);

  const [numbersValues, setNumbersValues] = useState(filterByNumericValues);
  useRemoveFiltersValus(setNumbersValues);

  const handleOnClickRemoveFilter = ({ target }) => {
    addColumnNamne(target.name);
    return removeFilterByNumericValues(
      numbersValues.filter(
        (item) => item.column !== target.name,
      ),
    );
  };

  if (filterByNumericValues[0].column !== '') {
    return (
      <div>
        {numbersValues.map((item, index) => (
          <div key={ index }>
            <span data-testid="filter" className="filter">
              {`${item.column} ${item.comparison} ${item.value} `}
              {' '}
            </span>
            <button
              name={ item.column }
              onClick={ handleOnClickRemoveFilter }
              className="button-remove"
              type="button"
            >
              <img name={ item.column } className="img-remove" src="https://cdn-icons-png.flaticon.com/128/6932/6932392.png" alt="icon-remove" />

            </button>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

// AddedFilters.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddedFilters;
