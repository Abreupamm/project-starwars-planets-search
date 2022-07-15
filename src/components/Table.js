import React, { useContext, useState } from 'react';
import starWarsContext from '../context/ContextAPI';

import { usePlanetsFilter } from '../Effects/Hoocks';

function Table() {
  const { data } = useContext(starWarsContext);
  const [planets, setPlanets] = useState(data);

  usePlanetsFilter(setPlanets, planets);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet, index) => (
            <tr key={ index }>
              { Object.values(planet).map(
                (item, index2) => <td key={ index2 }>{ item }</td>,
              ) }
            </tr>
          ))
        }
      </tbody>
    </table>

  );
}

export default Table;
