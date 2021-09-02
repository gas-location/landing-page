import styled from '@emotion/styled';

export const AboutUsWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 960px;
  padding: 6rem 4rem 5rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const LogoImage = styled.img`
  width: 60%;
  margin: auto;
  @media (min-width: 600px) {
    width: 40%;
  }
`;

export const ContentWrapper = styled.aside`
  display: flex;
  flex-flow: column nowrap;
`;

export const Subtitle = styled.h1`
  font-weight: 600;
  margin-bottom: 1%;
  font-size: 1.5rem;
`;

export const Title = styled.h2`
  margin-bottom: 0.5%;
  font-weight: 400;
  font-size: 2rem;
`;

export const Description = styled.p`
  font-size: 1.15rem;
  font-weight: 300;
  text-align: justify;
`;

export const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 15%;

  & > div {
    display: flex;
    flex-flow: column nowrap;
    width: 40%;
    margin: 2.5% 5%;
    text-align: center;
  }

  & > div > p,
  & > div > h4 {
    margin: 2% 0;
  }
  @media (min-width: 600px) {
    flex-wrap: nowrap;
    & > div {
      margin: 2.5% 2.5%;
    }
  }
`;
