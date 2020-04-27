import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Filter.scss';

const FilterCharacters = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  const handlePlanet = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'planet',
    });
  };
  return (
    <form className='input__container' onSubmit={handleForm}>
      <label className='input__label'>Search here for your character!</label>
      <input type='text' placeholder='Search by character' className='input__text' name='name' id='name' value={props.value} onChange={handleChange} />
      <input type='text' className='input__text' placeholder='Search by planet' onChange={handlePlanet} />
    </form>
  );
};

FilterCharacters.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  handleForm: PropTypes.func,
};
export default FilterCharacters;
