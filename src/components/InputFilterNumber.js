import React from 'react';
import { columns, comparison } from '../data';

function InputFilterNumber() {
  return (
    <div>
      <span form="column">coluna</span>
      <select data-testid="column-filter">
        {columns.map((column, index) => (
          <option key={ index } name={ column }>{column}</option>))}
      </select>

      <span form="comparison">Operador</span>
      <select data-testid="comparison-filter">
        {comparison.map((item, index) => (
          <option key={ index } name={ item }>{item}</option>))}
      </select>

      <input type="number" data-testid="value-filter" />

      <button data-testid="button-filter" type="button">Filtrar</button>
    </div>
  );
}

export default InputFilterNumber;
