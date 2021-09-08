import React from 'react'

/*
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
*/

function Person({ person }) {
  const { name, movies } = person
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Movies:</p>
      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ) 
}

export default Person