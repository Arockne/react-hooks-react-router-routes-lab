import React from "react";
import Person from './Person'
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <Person key={actor.name} person={actor}/>)}
    </div>
  );
}

export default Actors;
