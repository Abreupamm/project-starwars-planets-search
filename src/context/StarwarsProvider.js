import React from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './ContextAPI';
import usePlanetsList from '../fetchAPI/fetchPlanets';

function StarWarsProvider({ children }) {
  const data = usePlanetsList();

  return (
    <starWarsContext.Provider value={ { data } }>
      {children}
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
