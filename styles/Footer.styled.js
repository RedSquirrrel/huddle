import styled from 'styled-components';

export const ImageFooter = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: -1rem;
`;

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 5rem;
  color: #fff;
  margin-bottom: 0;
  img {
    margin: 0 1rem 0 2rem;
  }

  h2 {
    font-size: 3rem;
    margin: 0;
  }

  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;

    img {
      margin-top: 1rem;
      margin-right: 1rem;
    }
  }
  p {
    text-align: center;
    color: #fff;
    opacity: 1;

    a {
      opacity: 0.6;
      color: #fff;

      &:hover {
        color: hsl(322, 100%, 66%);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
  }
`;

export const StyledSocials = styled.div`
  width: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 50px;
    height: 50px;
    margin-left: 1rem;
  }
`;

export const Form = styled.form`
  input {
    margin-right: 2rem;
    padding: 1rem 2rem;
    border-radius: 5px;
    width: 20rem;
  }

  button {
    border-radius: 5px;
    padding: 1rem 2rem;
    background: hsl(322, 100%, 66%);
    color: #fff;
    border: transparent;
  }

  li {
    color: hsl(0, 100%, 63%);
    font-size: 0.8rem;
  }
`;
