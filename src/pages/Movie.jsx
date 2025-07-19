import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; 
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  console.log("Movie ID:", id);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {
          movie.genres.map((genre, index) => (
            <span key={index}>{genre}{index < movie.genres.length - 1 ? ', ' : ''}</span>
          ))  
        }
      </main>
    </>
  );
}

export default Movie;