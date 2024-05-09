import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 20px;

  > nav {
    display: flex;
  }
`;

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #313b70;
  color: #fefefe;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    font-size: 20px;
  }
`;
