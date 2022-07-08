import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import starWarsContext from './context/ContextAPI';
import image from './projectIntro.gif';
import getPlanets from './fetchAPI/fetchPlanets';
import useEffectImageVisible from './Effects';

function App() {
  const [imgVisible, setImgVisible] = useState(true);

  const SEVEN_TIME = 10010;

  useEffectImageVisible(setImgVisible, SEVEN_TIME);

  const planetsList = async () => {
    const response = await getPlanets();
    response.forEach((planet) => delete (planet.residents));
    console.log(response);
    return {
      data: response,
    };
  };

  if (imgVisible) {
    return (<img className="img-starwars" src={ image } alt="starWars" />);
  }

  return (
    <starWarsContext.Provider value={ { data: [] } }>
      {/* {console.log(planetsList())} */}
      <Table />
    </starWarsContext.Provider>

  );
}

export default App;
