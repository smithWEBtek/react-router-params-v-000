let counter = 5;

export function addMovie(movie) {
  movie.id = ++counter;
  return {
    type: 'ADD_MOVIE',
    movie
  };
}
