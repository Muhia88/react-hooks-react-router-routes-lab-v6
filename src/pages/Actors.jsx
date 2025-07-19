import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorsCard from "../components/ActorsCard"; 


function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
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
        {actors.map(actor => {
          return (
            <ActorsCard 
              key={actor.id }
              name={actor.name}
              movies={actor.movies}
            />
          );
        })}
      </main>
    </>
  );
};

export default Actors;
