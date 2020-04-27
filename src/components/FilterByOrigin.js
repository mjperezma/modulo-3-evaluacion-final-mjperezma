import React from 'react';

const FilterByOrigin = () => {
  return (
    <>
      <label> Select about Origin</label>
      <p>
        Unknow
        <input type='radio' name='origin' />
      </p>
      <p>
        Earth
        <input type='radio' name='origin' />
      </p>
    </>
  );
};

export default FilterByOrigin;
