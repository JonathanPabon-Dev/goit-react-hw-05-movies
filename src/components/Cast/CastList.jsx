import React from 'react';
import PropTypes from 'prop-types';
import { CastItem } from './CastItem';

export const CastList = ({ credits }) => {
  return (
    <ul className="mt-3 d-flex flex-wrap">
      {credits
        .filter(actor => actor.profile_path !== null)
        .map(castItem => (
          <li key={castItem.cast_id} className="m-4 list-unstyled">
            <CastItem credit={castItem} />
          </li>
        ))}
    </ul>
  );
};

CastList.propTypes = {
  credits: PropTypes.array.isRequired,
};
