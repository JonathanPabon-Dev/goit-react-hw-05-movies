import styled from 'styled-components';

export const Searchform = styled.form`
  display: flex;
  margin: 10px 0;
  max-width: 600px;
  gap: 4px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  border: 1px solid #313b70aa;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
`;

export const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: #313b70;
  color: #f0f0f0;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 5px;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
