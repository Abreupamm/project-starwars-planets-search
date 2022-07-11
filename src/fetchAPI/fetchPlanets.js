import { useEffect, useState } from 'react';

const usePlanetsList = () => {
  const [data, setData] = useState([]);

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const getPlanets = async () => {
      const req = await fetch(URL);
      const required = await req.json();
      const result = required.results;
      result.map((planet) => (delete (planet.residents)));
      setData(result);
    };
    getPlanets();
  }, []);
  return data;
};

export default usePlanetsList;
