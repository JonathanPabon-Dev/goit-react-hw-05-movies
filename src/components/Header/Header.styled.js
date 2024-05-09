import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  color: #313b70;
  box-shadow: 0px 0px 10px 0px #313b70;
`;

export const Logo = styled.p`
  border: 1px solid #313b70;
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
  margin: 0;

  > span {
    padding: 0 5px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: #313b70;

  &.active {
    color: #fefefe;
    background-color: #313b70;
  }
`;
