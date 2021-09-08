import React from "react";
import Movie from './Movie'
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => <Movie key={movie.title} movie={movie}/>)}
    </div>
  );
}

export default Movies;
