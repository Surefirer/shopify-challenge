import React from 'react';
import MovieItem from './MovieItem';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const Results = ({
  movies,
  text,
  nominations,
  setNominations,
  buttonDisable,
  setButtonDisable,
  setMovies,
}) => {
  return (
    <div>
      {movies ? (
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h3>Result for "{text}"</h3>
          </li>
          {movies.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              id={movie.imdbID}
              movie={movie}
              movies={movies}
              setMovies={setMovies}
              setNominations={setNominations}
              nominations={nominations}
              buttonDisable={buttonDisable}
              setButtonDisable={setButtonDisable}
            />
          ))}
        </ul>
      ) : (
        <p>No result...</p>
      )}
    </div>
  );
};

export default Results;
