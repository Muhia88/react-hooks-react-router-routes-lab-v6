import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import ActorsCard from '../components/ActorsCard';
import React from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(response => response.json())
      .then(data => setActors(data))
      .catch(error => console.error("Error fetching actors:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <section>
          {actors.map(actor => (
            <ActorsCard 
              key={actor.id} 
              name={actor.name} 
              movies={actor.movies} 
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Actors;
