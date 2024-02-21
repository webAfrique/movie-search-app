import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieList.css';

interface Movie {
  id: number; 
  name: string; 
  poster: string | null;
  rating: number;
  year: number;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`}>
              {movie.poster && <img src={movie.poster} alt={movie.name} />}
              <h2>{movie.name}</h2>
              <p>{movie.year}</p>
              <p>{movie.rating}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
