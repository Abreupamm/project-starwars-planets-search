import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import image from './projectIntro.gif';
import { useImageVisible } from './Effects/Hoocks';
import StarWarsProvider from './context/StarwarsProvider';
import InputFilter from './components/InputFilter';
import InputFilterNumber from './components/InputFilterNumber';

function App() {
  const [imgVisible, setImgVisible] = useState(true);

  const SEVEN_TIME = 1000;

  useImageVisible(setImgVisible, SEVEN_TIME);

  if (imgVisible) {
    return (<img className="img-starwars" src={ image } alt="starWars" />);
  }

  return (
    <StarWarsProvider>
      <InputFilter />
      <InputFilterNumber />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
