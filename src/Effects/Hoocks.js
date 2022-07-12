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
  const { data, filterByName: { name } } = useContext(starWarsContext);
  useEffect(() => {
    if (name === '') {
      return callback(data);
    }
    return callback(data.filter((planet) => (planet.name.includes(name))));
  }, [data, name, callback]);
};
