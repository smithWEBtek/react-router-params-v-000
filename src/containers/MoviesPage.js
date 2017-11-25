import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) => 
  <div>
    {/* this is a list of clickable links, composed in the <MoviesList /> component */}
    <MoviesList movies={movies} />

    <Switch>
      {/* this is a link to the '/movies/new' route, which must be defined before 'movies/:movieId', lest it be mistaken for a specific movie, just like in Rails or Sinatra routing ... apparently must be handled by React Router Switch */}
      <Route path={`${match.url}/new`} component={MoviesNew} />
      
      {/* this is a <Route /> component, with 2 props: path and component */}
      <Route path={`${match.url}/:movieId`} component={MovieShow} />

      {/* match.url, is the root "/movies" path, hence the msg asking you to select a movie */}
      <Route exact path={match.url} render={() => (
        <h3>Please select a Movie from the list.</h3>
      )}/>
    </Switch>

    {console.log('match: ', match)}
    {console.log('match.path: ', match.path)}
    {console.log('match.url: ', match.url)}
    {console.log('match.params: ', match.params)}
    {console.log('movies: ', movies)} 
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);