import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const Nav = ({ toggleLibrary, setToggleLibrary }) => {
  return (
    <nav>
      <h1>NEXT</h1>
      <button onClick={() => setToggleLibrary(!toggleLibrary)}>
        Library <FontAwesomeIcon className='skip-right' icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
