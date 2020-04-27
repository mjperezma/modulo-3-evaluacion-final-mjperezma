import React, {Fragment} from 'react';
import FilterCharacters from './FilterCharacter';
import FilterByGender from './FilterByGender';
import FilterByOrigin from './FilterByOrigin';

const Filters = (props) => {
  return (
    <Fragment>
      <FilterCharacters handleFilter={props.handleFilter} value={props.value} />
      <FilterByGender handleFilter={props.handleFilter} />
      <FilterByOrigin handleFilter={props.handleFilter} />
    </Fragment>
  );
};

export default Filters;
