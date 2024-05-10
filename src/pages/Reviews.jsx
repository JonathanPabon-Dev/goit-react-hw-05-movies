import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../api/api';
import { useParams } from 'react-router-dom';
import { ReviewList } from '../components/ReviewList/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(id);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p className="mt-3">There are no reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
