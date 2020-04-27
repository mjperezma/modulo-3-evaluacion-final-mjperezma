import React, {Fragment} from 'react';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

import Filters from './Filters';

const Home = (props) => {
  return (
    <Fragment>
      <Filters handleFilter={props.handleFilter} value={props.value} handleCheck={props.handleCheck} />
      <CharacterList characters={props.characters} value={props.value} />
    </Fragment>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default Home;
