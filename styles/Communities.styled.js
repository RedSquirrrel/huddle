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
    /* background-color: red; */
    /* gap: 1rem; */

    /* text-align: center; */
    /* justify-content: center; */
    /* align-content: center; */
  }
`;

export const Content = styled.div`
  /* height: 30rem; */
  /* background-color: red; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* width: 100%; */
    /* background-color: blueviolet; */
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
    /* margin: 0; */
    text-align: center;
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto;
    }
  }
`;
