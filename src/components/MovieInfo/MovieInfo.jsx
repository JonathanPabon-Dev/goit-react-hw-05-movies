import React from 'react';
import {
  Container,
  Average,
  Title,
  Subtitle,
  Poster,
  Genres,
  Overview,
  MovieCard,
} from './MovieInfo.styled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

const MovieInfo = ({ movie }) => {
  return (
    <>
      <MovieCard className="d-flex my-5">
        <Poster
          src={IMG_BASE_URL + (movie.poster_path || movie.backdrop_path)}
          alt={movie.original_title + ' photo'}
        />
        <Container>
          <Title>
            {movie.title || movie.original_title} (
            {String(movie.release_date).substring(0, 4)})
          </Title>
          <Subtitle>Overview</Subtitle>
          <Overview>{movie.overview}</Overview>
          <Subtitle>Genres</Subtitle>
          <Genres>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </Genres>
          {movie.vote_average && (
            <Average>
              {Math.round(parseFloat(movie.vote_average) * 10)}%
            </Average>
          )}
        </Container>
      </MovieCard>
    </>
  );
};

export default MovieInfo;
