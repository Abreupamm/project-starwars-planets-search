import React, { useContext, useState } from 'react';
import starWarsContext from '../context/ContextAPI';

import { comparisons } from '../data/filterByNumber';

function InputFilterNumber() {
  const {
    addFilterByNumericValues,
    columnName,
    removeColumnNamne,
    removeFilterByNumericValues } = useContext(starWarsContext);

  const [column, setNewColumn] = useState('population');

  const [comparison, setNewComparison] = useState('maior que');

  const [newValue, setNewValue] = useState('0');

  const handleOnChange = ({ target: { value, name } }) => {
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
    removeColumnNamne(column);
    addFilterByNumericValues(state);
  };

  const handleOnClickRemoveFilters = () => {
    removeFilterByNumericValues([
      {
        column: '',
        comparison: '',
        value: '',
      },
    ]);
  };

  return (

    <div>
      <span form="column">coluna</span>
      <select
        name="column"
        onChange={ handleOnChange }
        data-testid="column-filter"
      >
        {columnName.map((item, index) => (
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

      <button
        onClick={ handleOnClickRemoveFilters }
        data-testid="button-remove-filters"
        type="button"
      >
        Remover Filtros
      </button>
    </div>

  );
}

export default InputFilterNumber;
