const getPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const req = await fetch(URL);
  const response = await req.json();
  return response.results;
};

export default getPlanets;
