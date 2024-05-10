import React, { useState, useEffect, lazy, Suspense } from 'react';
import { fetchMovieCredits } from '../api/api';
import { useParams } from 'react-router-dom';

const CastList = lazy(() => import('../components/Cast/CastList'));

const Cast = () => {
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

  return (
    <>
      {credits.length > 0 && (
        <Suspense>
          <CastList credits={credits} />
        </Suspense>
      )}
    </>
  );
};

export default Cast;
