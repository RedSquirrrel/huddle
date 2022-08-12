import styled from 'styled-components';

export const StyledReady = styled.div`
  width: 100%;
  /* height: rem; */
  text-align: center;
  margin-bottom: 15rem;
  margin-top: -1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    /* margin-bottom: 5rem; */
    font-size: clamp(1rem, 2.8vw, 2.5rem);
  }

  button {
    margin: 1rem auto -4rem;
    padding: 26.5px 100px;
    font-size: 1.3rem;
  }
`;
