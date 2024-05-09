import React, { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../api/api';
import { MovieList } from '../components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="mt-2" style={{ color: '#313b70', opacity: '0.8' }}>
        Trending Today
      </h2>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};
