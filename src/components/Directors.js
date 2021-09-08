import React from "react";
import Person from './Person'
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <Person key={director.name} person={director}/>)}
    </div>
  )
}

export default Directors;
