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
  const { data, filterByName: { name } } = useContext(starWarsContext);
  useEffect(() => {
    if (name !== '') {
      callback(data.filter((planet) => (planet.name.includes(name))));
    } else {
      callback(data);
    }
  }, state);
};
