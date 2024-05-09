import React from 'react';
import PropTypes from 'prop-types';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export const CastItem = ({ credit }) => {
  return (
    <>
      <img
        src={IMG_BASE_URL + credit.profile_path}
        alt={credit.name + ' photo'}
        width={'150px'}
      />
      <p title="Actor name">{credit.name || 'Nobody'}</p>
      <p title="Character" className="text-wrap">
        {credit.character || ''}
      </p>
    </>
  );
};

CastItem.propTypes = {
  credit: PropTypes.object.isRequired,
};
