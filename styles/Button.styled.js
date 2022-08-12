import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 30px;
  border: ${({ border }) => `1px solid ${border}` || 'none'};
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  transition: all 0.5 ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    transition: transform 0.5 ease-in-out;
  }
`;
