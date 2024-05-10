import React, { useState, useEffect, lazy, Suspense } from 'react';
import { fetchTrendMovies } from '../api/api';

const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const Home = () => {
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
        <Suspense>
          <MovieList movies={movies} />
        </Suspense>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Home;
