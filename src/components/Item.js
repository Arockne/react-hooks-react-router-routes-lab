import React from 'react'

function Item(props) {
  const { name, movies } = props.person
  return (
    <div>
      <h3>Name: {name}</h3>
      {props.children}
      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ) 
}

export default Item