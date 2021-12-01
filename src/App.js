import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
