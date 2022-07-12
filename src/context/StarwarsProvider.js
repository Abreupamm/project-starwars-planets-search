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

  const data = usePlanetsList();

  function addFilterByName(filter) {
    setFilterByName({ name: filter });
  }

  function addFilterByNumericValues(obj) {
    setFilterByNumericValues(obj);
  }

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
