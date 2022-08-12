import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 75px 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 5rem auto -1rem auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  margin-bottom: 5rem;

  button {
    margin: 0 -2.1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
