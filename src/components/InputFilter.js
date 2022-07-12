import React, { useContext } from 'react';
import starWarsContext from '../context/ContextAPI';

function InputFilter() {
  const { addFilterByName } = useContext(starWarsContext);
  const handleOnChange = ({ target }) => {
    const { value } = target;
    addFilterByName(value);
  };
  return (
    <div>
      <h3>Projeto Star Wars - Tybe</h3>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleOnChange }
      />
    </div>
  );
}

export default InputFilter;
