import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorsCard from "../components/DirectorsCard";

function Directors() {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(response => response.json()) 
      .then(data => setDirectors(data)) 
      .catch(error => console.error("Error fetching directors:", error));
  }, []);


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => {
          return (
            <DirectorsCard 
              key={director.id}
              name={director.name}
              movies={director.movies}
            />
          );
        })}
      </main>
    </>
  );
};

export default Directors;
