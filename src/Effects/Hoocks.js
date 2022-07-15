import { useContext, useEffect } from 'react';
import starWarsContext from '../context/ContextAPI';

export const useImageVisible = (callback, time) => {
  useEffect(() => {
    setTimeout(() => {
      callback(false);
    }, time);
  });
};

export const usePlanetsFilter = (callback, state) => {
  const {
    data,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(starWarsContext);

  useEffect(() => {
    if (name !== '') {
      return callback(data.filter((planet) => (planet.name.includes(name))));
    }
    return callback(data);
  }, [data, name, callback]);

  const index = filterByNumericValues.length - 1;

  const numeric = filterByNumericValues[index];

  const filter = state;
  useEffect(() => {
    switch (numeric.comparison) {
    case 'maior que':
      return callback(filter.filter((planet) => (
        parseFloat(
          planet[numeric.column],
        ) > parseFloat(numeric.value)
      )));
    case 'menor que':
      return callback(filter.filter((planet) => (
        parseFloat(
          planet[numeric.column],
        ) < parseFloat(numeric.value)
      )));
    case 'igual a':
      return callback(filter.filter((planet) => (
        parseFloat(
          planet[numeric.column],
        ) === parseFloat(numeric.value)
      )));
    default:
      return 'Filtro vazio';
    }
  }, [filterByNumericValues, callback, data, numeric, filter]);
};
