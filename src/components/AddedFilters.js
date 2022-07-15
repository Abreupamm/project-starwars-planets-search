import React, { useContext } from 'react';
import starWarsContext from '../context/ContextAPI';

function AddedFilters() {
  const { filterByNumericValues } = useContext(starWarsContext);
  return (
    <div>
      {filterByNumericValues.map((item, index) => (
        <div key={ index }>
          <span>{item.column}</span>
          <span>{item.comparison}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export default AddedFilters;
