import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  margin: 11rem auto;
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  padding: ${({ padding }) => padding || '10rem'};
  flex-direction: ${({ layout }) => layout || 'row'};
  background: ${({ bg }) => bg || 'url(/images/Groupp.svg)'} center center/cover;

  h2 {
    font-size: clamp(1rem, 3vw, 3rem);
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
