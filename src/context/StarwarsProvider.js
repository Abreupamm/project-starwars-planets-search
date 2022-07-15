import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './ContextAPI';
import usePlanetsList from '../fetchAPI/fetchPlanets';

function StarWarsProvider({ children }) {
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);

  // const [filtersNumbers, setFiltersNumbers] = useState([]);

  const data = usePlanetsList();

  function addFilterByName(filter) {
    setFilterByName({ name: filter });
  }

  function addFilterByNumericValues(filterValues) {
    if (filterByNumericValues[0].column !== '') {
      return setFilterByNumericValues([...filterByNumericValues, filterValues]);
    }
    return setFilterByNumericValues([filterValues]);
  }

  // function addFiltersNumber(filters) {
  //   setFiltersNumbers(filters);
  // }

  return (
    <starWarsContext.Provider
      value={
        { data,
          filterByName,
          addFilterByName,
          filterByNumericValues,
          addFilterByNumericValues }
      }
    >
      {children}
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
