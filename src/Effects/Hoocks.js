import { useEffect } from 'react';
// import getPlanets from '../fetchAPI/fetchPlanets';

const useImageVisible = (callback, time) => {
  useEffect(() => {
    setTimeout(() => {
      callback(false);
    }, time);
  });
};

export default useImageVisible;
