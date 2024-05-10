import React from 'react';
import PropTypes from 'prop-types';
import { CharacterCard, ProfileImage, ActhorName } from './CastItem.styled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export const CastItem = ({ credit }) => {
  return (
    <>
      <CharacterCard>
        <ProfileImage text={credit.character || '-'}>
          <img
            src={IMG_BASE_URL + credit.profile_path}
            alt={credit.name + ' photo'}
            width={'90%'}
          />
        </ProfileImage>
        <ActhorName title="Actor name">{credit.name || 'Nobody'}</ActhorName>
      </CharacterCard>
    </>
  );
};

CastItem.propTypes = {
  credit: PropTypes.object.isRequired,
};
