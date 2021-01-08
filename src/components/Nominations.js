import React from 'react';
import NominationItem from './NominationItem';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const Nominations = ({ nominations, setNominations, setMovies }) => {
  return (
    <div>
      {nominations.length !== 0 ? (
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h3>Nominations</h3>
          </li>
          {nominations.map((nomination) => (
            <NominationItem
              key={nomination.imdbID}
              nominations={nominations}
              nomination={nomination}
              setNominations={setNominations}
              setMovies={setMovies}
            />
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Nominations;
