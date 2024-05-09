import React from 'react';
import PropTypes from 'prop-types';
import { ReviewCard } from '../ReviewCard/ReviewCard';

export const ReviewList = ({ reviews }) => {
  return (
    <ul className="mt-3">
      {reviews.map(review => (
        <li key={review.id} className="m-4 list-unstyled">
          <ReviewCard message={review.content} author={review.author} />
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
