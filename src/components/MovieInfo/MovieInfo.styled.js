const { default: styled } = require('styled-components');

export const MovieCard = styled.div`
  height: max-content;
`;

export const Average = styled.span`
  opacity: 0.15;
  font-size: 150px;
  font-weight: 600;
  margin-top: auto;
  line-height: 1;
`;

export const Container = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  color: #313b70;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

export const Subtitle = styled.h4`
  opacity: 0.8;
`;

export const Poster = styled.img`
  width: 300px;
  height: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;

export const Genres = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 20px;
  gap: 15px;
`;

export const Overview = styled.p`
  padding-left: 20px;
`;
