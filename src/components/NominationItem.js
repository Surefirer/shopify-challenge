import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const NominationItem = ({
  nomination,
  nominations,
  setNominations,
  setMovies,
  movies,
}) => {
  const removeNomHandler = () => {
    const newNomin = nominations.filter(
      (nomi) => nomi.imdbID !== nomination.imdbID
    );

    if (movies) {
      setNominations(newNomin);
      setMovies((prevMovie) => [...prevMovie, nomination]);
    } else {
      M.toast({
        html: `Please make sure have the search result before you remove.`,
      });
    }
  };
  return (
    <li key={nomination.imdbID} className='collection-item'>
      {nomination.Title}
      <a
        href='#!'
        className='btn-small waves-effect waves-light secondary-content'
        onClick={removeNomHandler}
      >
        Remove
      </a>
    </li>
  );
};

export default NominationItem;
