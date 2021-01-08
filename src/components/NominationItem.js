import React from 'react';

const NominationItem = ({
  nomination,
  nominations,
  setNominations,
  setMovies,
}) => {
  const removeNomHandler = () => {
    const newNomin = nominations.filter(
      (nomi) => nomi.imdbID !== nomination.imdbID
    );
    setNominations(newNomin);

    setMovies((prevMovie) => [...prevMovie, nomination]);
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
