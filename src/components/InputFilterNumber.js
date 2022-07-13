import React, { useState } from 'react';
// import starWarsContext from '../context/ContextAPI';
import { columns, comparison } from '../data';

function InputFilterNumber() {
  const [newColumn, setNewColumn] = useState({ column: 'population' });
  const [newComparison, setNewComparison] = useState({ comparison: 'maior que' });
  const [newValue, setNewValue] = useState({ value: '' });

  const handleOnClick = ({ target: { value, name } }) => {
    if (name === 'column') {
      return setNewColumn({ column: value });
    }
    return setNewComparison({ comparison: value });
  };
  console.log(newColumn);
  console.log(newComparison);

  const handleOnChange = ({ target: { value } }) => {
    setNewValue({ value });
  };
  console.log(newValue);

  return (
    <div>
      <span form="column">coluna</span>
      <select name="column" onClick={ handleOnClick } data-testid="column-filter">
        {columns.map((column, index) => (
          <option key={ index }>{column}</option>))}
      </select>

      <span form="comparison">Operador</span>
      <select onClick={ handleOnClick } data-testid="comparison-filter">
        {comparison.map((item, index) => (
          <option key={ index }>{item}</option>))}
      </select>

      <input
        name="value"
        onChange={ handleOnChange }
        type="number"
        data-testid="value-filter"
      />

      <button data-testid="button-filter" type="button">Filtrar</button>
    </div>
  );
}

export default InputFilterNumber;
