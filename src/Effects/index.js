import { useEffect } from 'react';

const useEffectImageVisible = (callback, time) => {
  useEffect(() => {
    setTimeout(() => {
      callback(false);
    }, time);
  });
};

export default useEffectImageVisible;
