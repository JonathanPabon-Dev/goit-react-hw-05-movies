import { styled } from 'styled-components';

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border: 1px solid #313b7022;
  border-radius: 10px;
`;

export const Message = styled.p`
  color: #313b70;
`;

export const Author = styled.p`
  color: #313b70;
  opacity: 0.5;
  font-weight: 600;

  &.i {
    width: 30px;
    height: 30px;
    font-size: 30px;
  }
`;
