import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="mt-3 list-unstyled">
      {movies.map(movie => (
        <li key={movie.id} className="my-2">
          <Link
            to={`goit-react-hw-05-movies/movies/${movie.id}`}
            state={{ from: location }}
            className="text-decoration-none"
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
