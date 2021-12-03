import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch, Redirect } from 'react-router';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <Switch>
          <Route path="/movies/:currentPage" exact component={MovieList} />
          <Route path="/movies/id/:movieId" exact component={MovieDetails} />
          <Route exact path="/*">
              <Redirect to="/movies/1" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
