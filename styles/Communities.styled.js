import styled from 'styled-components';

export const CommunitiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 62%;
  margin: 38px auto;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h1 {
    margin: -0.8rem 0;
    font-size: clamp(4rem, 8vw, 6rem);
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: unset;
    }
  }

  p {
    text-align: center;
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto;
    }
  }
`;
