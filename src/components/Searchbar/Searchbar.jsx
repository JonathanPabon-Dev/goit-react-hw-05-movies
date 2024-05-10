import React, { useState, useEffect, lazy } from 'react';
import { fetchSearchMovies } from '../../api/api';
import { Searchform, SearchInput, SearchBtn } from './Searchbar.styled';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

export const Searchbar = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async searchTerm => {
    const response = await fetchSearchMovies(searchTerm);
    setMovies(response.results);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm);
    }
  }, [searchTerm]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchTerm = event.target.search.value.trim();
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Searchform onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <SearchBtn type="submit">
          <i className="bi bi-search"></i>
        </SearchBtn>
      </Searchform>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
