import './App.css';
import MovieList from './components/movies/MovieList.jsx';

function App() {

  return (
    <div className="App">
      <div className='header'>
        <div className='header-left'>
          <img src="/logos/cil_animal.svg" alt="animal" />
          <h2 className='header-title'>Movies</h2>
        </div>
      </div>
      <MovieList />
    </div>
  );
}

export default App;
