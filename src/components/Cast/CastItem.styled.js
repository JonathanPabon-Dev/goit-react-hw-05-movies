import styled from 'styled-components';

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px #313b7066;
  color: #313b70;
  text-align: center;
  font-weight: 500;
`;

export const ProfileImage = styled.div`
  width: 90%;
  border-radius: 5px;
  object-fit: cover;
  margin: 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '${props => props.text}';
    position: absolute;
    color: #fefefe;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #313b70cc;
    font-size: 14px;
    padding: 10px;
  }

  & > img {
    width: 100%;
  }
`;

export const ActhorName = styled.p`
  font-size: 18px;
  line-height: 1;
`;
