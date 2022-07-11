import React, { useContext } from 'react';
import starWarsContext from '../context/ContextAPI';

function Table() {
  const { data } = useContext(starWarsContext);
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
        {data.map((planet, index) => (
          <tr key={ index }>
            { Object.values(planet).map(
              (item, index2) => <td key={ index2 }>{ item }</td>,
            ) }
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;
