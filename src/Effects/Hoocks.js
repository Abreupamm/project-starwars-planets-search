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
    // return callback(data);
  }, [data, name, callback]);

  // const index = filterByNumericValues.length - 1;

  // const numeric = filterByNumericValues[index];

  const filterState = state;

  useEffect(() => {
    if (filterByNumericValues[0].column !== '') {
      const planetsFilterList = filterByNumericValues.map((planet) => {
        if (planet.comparison === 'maior que') {
          return filterState.filter((item) => (
            parseFloat(
              item[planet.column],
            ) > parseFloat(planet.value)
          ));
        }
        if (planet.comparison === 'menor que') {
          return filterState.filter((item) => (
            parseFloat(
              item[planet.column],
            ) < parseFloat(planet.value)
          ));
        }
        return filterState.filter((item) => (
          parseFloat(
            item[planet.column],
          ) === parseFloat(planet.value)
        ));
      });
      return callback(planetsFilterList[planetsFilterList.length - 1]);
    }
    return callback(data);
  },
  [callback, data, filterByNumericValues, filterByNumericValues.length]);
};
export const useRemoveFiltersValus = (callback) => {
  const { filterByNumericValues } = useContext(starWarsContext);
  useEffect(() => callback(filterByNumericValues), [callback, filterByNumericValues]);
};

export const useColumnsName = (callback) => {
  const { columnName } = useContext(starWarsContext);
  useEffect(() => callback(columnName), [callback, columnName]);
};
