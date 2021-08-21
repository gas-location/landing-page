import styled from '@emotion/styled';

export const HomeWrapper = styled.section`
  width: 100vw;
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  height: calc(100vh - 5.5vw);
`;

export const ImageWrapper = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100%;
  position: absolute;
`;

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0007;
`;

export const Content = styled.p`
  padding: 0 1rem;
  max-width: 40rem;
  text-align: center;
  @media (min-width: 600px) {
    text-align: left;
  }
`;
