import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  /* height: fit-content; */
  margin: 11rem auto;
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 680px; */
  /* height: 100%; */
  /* width: 80%; */
  height: auto;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
  /* margin: 40px 0; */
  /* padding: 0 20rem; */
  /* padding: 18rem 18rem; */
  padding: ${({ padding }) => padding || '10rem'};
  flex-direction: ${({ layout }) => layout || 'row'};
  /* background-color: ${({ bgColor }) => bgColor || 'hsl(207, 100%, 98%)'}; */
  /* background: ${({ bg }) => bg || 'url(/images/bg-section-bottom-desktop-1.svg), url(/images/bg-section-bottom-mobile-1.svg)'}; */
  background: ${({ bg }) => bg || 'url(/images/Groupp.svg)'} center center/cover;

  h2 {
    font-size: clamp(1rem, 3vw, 3rem);
  }

  img {
    /* width: 0%; */
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
