import React from 'react';

const FilterByOrigin = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'origin',
    });
  };
  return (
    <>
      <label> Select about Origin</label>
      <input type='checkbox' name='origin' value='unknow' onChange={handleChange} />
      Unknow
      <input type='checkbox' name='origin' value='earth' onChange={handleChange} />
      Earth
    </>
  );
};

export default FilterByOrigin;
