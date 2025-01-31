import React from 'react'

function Person(props) {
  const { name, movies } = props.person
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