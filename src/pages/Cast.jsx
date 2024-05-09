import React, { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../api/api';
import { useParams } from 'react-router-dom';
import { CastList } from '../components/Cast/CastList';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetchMovieCredits(id);
        setCredits(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCredits();
  }, [id]);

  return <>{credits.length > 0 && <CastList credits={credits} />}</>;
};
