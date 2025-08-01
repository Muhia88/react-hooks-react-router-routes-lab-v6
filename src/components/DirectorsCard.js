import React from "react";

function DirectorsCard({ name, movies }) {
  return (
    <div className="director-card">
      <h2>{name}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}
export default DirectorsCard;
