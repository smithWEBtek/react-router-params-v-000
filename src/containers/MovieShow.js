import React from 'react';
import { connect } from 'react-redux';
 
const MovieShow = ({movie}) =>
  <div>
    <h3>Title: {movie.title}</h3>
  </div>;

const mapStateToProps = (state, ownProps) => {
//  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)
    const movie = state.movies.find(movie => movie.id.toString() === ownProps.match.params.movieId)
    console.log('state: ', {state})
    console.log('state.movies: ', state.movies)
    console.log('ownProps.match.path: ', ownProps.match.path)
    console.log('ownProps.match.url: ', ownProps.match.url)

  if(movie) {
    console.log("movie: ", {movie})
    return { movie }
  } else {
    return { movie: {} }
  }
}

export default connect(mapStateToProps)(MovieShow);
