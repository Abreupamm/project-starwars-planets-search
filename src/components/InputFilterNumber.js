import React from 'react';

function InputFilterNumber() {
  return (
    <div>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input type="number" data-testid="value-filter" />
      <button data-testid="button-filter" type="button">Filtrar</button>
    </div>
  );
}

export default InputFilterNumber;
