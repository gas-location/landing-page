import styled from '@emotion/styled';

export const GreetingsWrapper = styled.section`
  width: 100vw;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 5.5vw);
`;

export const ImageWrapper = styled.div`
  z-index: -1;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  height: calc(100vh - 5.5vw);
`;

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 3rem;
`;

export const Description = styled.p`
  color: #ffffff;
  font-weight: 200;
  font-size: 1.2rem;
  margin-bottom: 8rem;
`;

export const Content = styled.p`
  padding: 0 1rem;
  max-width: 40rem;
  text-align: center;
  @media (min-width: 600px) {
    text-align: left;
  }
`;
