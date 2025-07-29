import {Link} from 'react-router-dom';
import React from "react";

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <p>
          <Link to={`/movie/${id}`}>View Info</Link>
        </p>    
    </article>
  );
}

export default MovieCard;