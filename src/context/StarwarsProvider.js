import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './ContextAPI';
import usePlanetsList from '../fetchAPI/fetchPlanets';
import { columns } from '../data/filterByNumber';

function StarWarsProvider({ children }) {
  const [columnName, setColumnName] = useState(columns);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: '',
      comparison: '',
      value: '',
    },
  ]);

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

  function removeFilterByNumericValues(filterValues) {
    if (filterByNumericValues.length === 1) {
      return setFilterByNumericValues([
        {
          column: '',
          comparison: '',
          value: '',
        },
      ]);
    }
    return setFilterByNumericValues(filterValues);
  }

  const addColumnNamne = (name) => setColumnName([...columnName, name]);

  const removeColumnNamne = (name) => {
    if (columnName.length === 1) {
      return setColumnName([]);
    }
    return setColumnName(
      columnName.filter((item) => item !== name),
    );
  };

  return (
    <starWarsContext.Provider
      value={ {
        data,
        filterByName,
        addFilterByName,
        filterByNumericValues,
        addFilterByNumericValues,
        removeFilterByNumericValues,
        columnName,
        addColumnNamne,
        removeColumnNamne,
      } }
    >
      {children}
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
