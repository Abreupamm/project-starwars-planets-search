import { useContext, useEffect } from 'react';
import starWarsContext from '../context/ContextAPI';

export const useImageVisible = (callback, time) => {
  useEffect(() => {
    setTimeout(() => {
      callback(false);
    }, time);
  });
};

export const usePlanetsFilter = (callback) => {
  const {
    data,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(starWarsContext);

  useEffect(() => {
    if (name !== '') {
      return callback(data.filter((planet) => (planet.name.includes(name))));
    }

    filterByNumericValues.forEach((obj) => {
      switch (obj.comparison) {
      case 'maior que':
        return callback(data.filter((planet) => (
          parseFloat(planet[obj.column]) > parseFloat(obj.value)
        )));
      case 'menor que':
        return callback(data.filter((planet) => (
          parseFloat(planet[obj.column]) < parseFloat(obj.value)
        )));
      case 'igual a':
        return console.log(callback(data.filter((planet) => (
          parseFloat(planet[obj.column]) === parseFloat(obj.value)
        ))));

      default:
        return callback(data);
      }
    });
  }, [data, name, callback, filterByNumericValues]);
};
