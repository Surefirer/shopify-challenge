import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const SearchBar = ({ text, setText }) => {
  const onSubmithandler = (e) => {
    e.preventDefault();
    setText('');
  };

  const clearInputHandler = () => {
    setText('');
  };

  const onChangehandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmithandler} className='nav-wrapper'>
        <div className='input-field'>
          <input
            id='search'
            type='search'
            name='text'
            value={text}
            onChange={onChangehandler}
          />
          <label className='label-icon' htmlFor='search'>
            <i className='material-icons'>search</i>
          </label>
          <i className='material-icons' onClick={clearInputHandler}>
            close
          </i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
