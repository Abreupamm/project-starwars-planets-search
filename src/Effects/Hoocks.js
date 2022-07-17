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
    removeFilter,
  } = useContext(starWarsContext);

  useEffect(() => {
    if (name !== '') {
      return callback(data.filter((planet) => (planet.name.includes(name))));
    }
    return callback(data);
  }, [data, name, callback]);

  let filterState = state;
  if (removeFilter === true && filterByNumericValues[0].column !== '') {
    filterState = data;
  }

  useEffect(() => {
    if (filterByNumericValues[0].column === '') {
      return callback(data);
    }
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
  },
  [callback, data, filterByNumericValues]);
};

export const useRemoveFiltersValus = (callback) => {
  const { filterByNumericValues } = useContext(starWarsContext);
  useEffect(() => callback(filterByNumericValues), [callback, filterByNumericValues]);
};

export const useColumnsName = (callback) => {
  const { columnName } = useContext(starWarsContext);
  useEffect(() => callback(columnName), [callback, columnName]);
};
