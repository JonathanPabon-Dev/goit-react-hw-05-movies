import React from 'react';
import PropTypes from 'prop-types';
import { CastItem } from './CastItem';

const CastList = ({ credits }) => {
  return (
    <ul className="my-5 d-flex flex-wrap gap-4">
      {credits
        .filter(actor => actor.profile_path !== null)
        .map(castItem => (
          <li key={castItem.cast_id} className="list-unstyled">
            <CastItem credit={castItem} />
          </li>
        ))}
    </ul>
  );
};

CastList.propTypes = {
  credits: PropTypes.array.isRequired,
};

export default CastList;
