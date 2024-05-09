import React, { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from '../api/api';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { BackBtn } from '../components/App.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <div className="container">
        <BackBtn className="my-2" to={backLink}>
          <i className="bi bi-arrow-left"></i>
        </BackBtn>
        <MovieInfo movie={movie} />

        <div className="d-flex gap-3">
          <Link className="btn btn-outline-dark" to={`/movies/${id}/cast`}>
            Cast
          </Link>
          <Link className="btn btn-outline-dark" to={`/movies/${id}/reviews`}>
            Reviews
          </Link>
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
