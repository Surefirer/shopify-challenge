import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Nominations from './components/Nominations';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  const [movies, setMovies] = useState('');
  const [text, setText] = useState('');
  const [nominations, setNominations] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();

    axios
      .get(`http://www.omdbapi.com/?apikey=b910eb21&s=${text}`)
      .then(function (response) {
        // handle success
        setMovies(response.data.Search);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [text]);

  return (
    <div>
      <NavBar />
      <div className='container'>
        <SearchBar text={text} setText={setText} />
        <Results
          text={text}
          movies={movies}
          setMovies={setMovies}
          nominations={nominations}
          setNominations={setNominations}
          buttonDisable={buttonDisable}
          setButtonDisable={setButtonDisable}
        />
        <Nominations
          setNominations={setNominations}
          nominations={nominations}
          setMovies={setMovies}
        />
      </div>
    </div>
  );
}

export default App;
