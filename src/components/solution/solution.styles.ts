import styled from '@emotion/styled';

export const SolutionWrapper = styled.section`
  padding: 6rem 0;
  background: #eba22f;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 960px;
  padding: 0 2rem 1.45rem;
  @media (min-width: 600px) {
    display: grid;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 2.4rem;
  @media (min-width: 600px) {
    grid-row: 1/2;
    grid-column: 1/2;
    max-width: 80%;
  }
`;

export const Illustration = styled.img`
  width: 60%;
  @media (min-width: 600px) {
    grid-row: 3/4;
    grid-column: 1/2;
    margin: 0 auto;
    object-fit: scale-down;
  }
`;
export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (min-width: 600px) {
    grid-row: 2/3;
    grid-column: 1/2;
    margin: 5% 5% 5% 0;
  }
`;

export const MobileImage = styled.img`
  align-self: flex-end;
  margin-top: 5%;
  @media (min-width: 600px) {
    grid-row: 1/4;
    grid-column: 2/3;
    margin: 0;
  }
`;
