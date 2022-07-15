import React, { useContext, useState } from 'react';
import starWarsContext from '../context/ContextAPI';

import { columns, comparisons } from '../data/filterByNumber';

function InputFilterNumber() {
  const { addFilterByNumericValues } = useContext(starWarsContext);

  const [column, setNewColumn] = useState('population');

  const [comparison, setNewComparison] = useState('maior que');

  const [newValue, setNewValue] = useState('0');

  const handleOnChange = ({ target: { value, name } }) => {
    setNewValue(value);
    if (name === 'column') {
      setNewColumn(value);
    }
    if (name === 'comparison') {
      setNewComparison(value);
    }
    if (name === 'value') {
      setNewValue(value);
    }
  };

  const handleOnClickButton = () => {
    const state = {
      column,
      comparison,
      value: newValue,
    };
    addFilterByNumericValues(state);
  };

  return (
    <div>
      <span form="column">coluna</span>
      <select
        name="column"
        onChange={ handleOnChange }
        data-testid="column-filter"
      >
        {columns.map((item, index) => (
          <option key={ index }>{item}</option>))}
      </select>

      <span form="comparison">Operador</span>
      <select
        name="comparison"
        onChange={ handleOnChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((item, index) => (
          <option key={ index }>{item}</option>))}
      </select>

      <input
        name="value"
        onChange={ handleOnChange }
        type="number"
        data-testid="value-filter"
        value={ newValue }
      />

      <button
        onClick={ handleOnClickButton }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputFilterNumber;
