import styled from '@emotion/styled';

export const SolutionWrapper = styled.section`
  padding: 3rem 2rem 1.45rem;
  background: #eba22f;
`;

export const Container = styled.div`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  @media (min-width: 600px) {
    grid-template-column: 60% 40%;
  }
`;

export const Title = styled.h1`
  grid-row: 1/2;
  grid-column: 1/2;
`;

export const Illustration = styled.img`
  grid-row: 2/3;
  grid-column: 1/2;
  margin: 0 auto;
  object-fit: scale-down;
  @media (min-width: 600px) {
    grid-row: 3/4;
    width: 70%;
    height: fit-content;
  }
`;
export const Description = styled.p`
  grid-row: 3/4;
  grid-column: 1/2;
  margin: 5% 0;
  font-size: 1.15rem;
  @media (min-width: 600px) {
    grid-row: 2/3;
    margin: 0 2.5% 0 0;
  }
`;

export const MobileImage = styled.img`
  grid-row: 4/5;
  grid-column: 1/2;
  margin: 0 auto;
  @media (min-width: 600px) {
    grid-row: 1/4;
    grid-column: 2/3;
    width: 100%;
    margin 0 0 0 auto;
  }
`;
