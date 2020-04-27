import React from 'react';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };
  return (
    <>
      <label> Género </label>
      <select name='gender' id='gender' onChange={handleChange}>
        <option value='all'>Todos</option>
        <option value='Alien'>Alien</option>
        <option value='Human'>Human</option>
      </select>
    </>
  );
};

export default FilterByGender;
