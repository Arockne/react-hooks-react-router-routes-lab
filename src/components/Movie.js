import React from 'react'

function Movie({ movie }) {
  const {title, time, genres} = movie
  return (
    <div>
      <h3>Name: {title}</h3>
      <p>Time: {time}</p>
      <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
}

export default Movie