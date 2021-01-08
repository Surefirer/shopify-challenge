import React, { Fragment, useRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const MoiveItem = ({
  movie,
  movies,
  setMovies,
  setNominations,
  nominations,
  buttonDisable,
}) => {
  let btnRef = useRef();

  const nominId = nominations.map((nId) => nId.imdbID);

  const onClickHandler = () => {
    if (nominations.length < 5) {
      setNominations((prevMovie) => [...prevMovie, movie]);
    } else {
      return nominations;
    }

    if (nominations.length === 4) {
      M.toast({ html: `You are only allowed to nominate up to 5 movies.` });
    }

    if (movies) {
      const newMovie = movies.filter(
        (newMovie) => newMovie.imdbID !== movie.imdbID
      );
      setMovies(newMovie);
    }
  };
  return (
    <Fragment>
      <li className='collection-item'>
        {movie.Title} ({movie.Year})
        <button
          href='#!'
          className={`btn-small waves-effect waves-light secondary-content ${
            buttonDisable ? 'disabled' : ''
          }`}
          onClick={onClickHandler}
          ref={btnRef}
          disabled={nominId.find((el) => (el === movie.imdbID ? true : false))}
        >
          Nominate
        </button>
        )
      </li>
    </Fragment>
  );
};

export default MoiveItem;
