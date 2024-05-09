import React from 'react';
import PropTypes from 'prop-types';
import { Author, Message, Review } from './ReviewCard.styled';

export const ReviewCard = ({ message, author }) => {
  return (
    <Review>
      <Message>{message}</Message>
      <Author>
        <i className="bi bi-person-fill"></i> {author}
      </Author>
    </Review>
  );
};

ReviewCard.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string,
};

ReviewCard.defaultProps = {
  author: 'Anonymus',
};
