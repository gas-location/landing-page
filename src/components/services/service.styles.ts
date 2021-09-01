import styled from '@emotion/styled';

export const ServicesSection = styled.section`
  color: white;
  display: flex;
  overflow: hidden;
  position: relative;
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
  padding: 6rem 0;
  background-color: #0c1d2fdd;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ContentSide = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 600px) {
    max-width: 50%;
  }
`;

export const ServicesSide = styled.aside`
  display: grid;
  grid-gap: 3rem;
  margin-top: 5rem;
  grid-template-columns: 10rem 10rem;
`;

export const ServiceWrapper = styled.div`
  transform: scale(1);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ServiceImageWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: auto;
  display: flex;
  overflow: hidden;
  border-radius: 1.5rem;
  justify-content: center;
  @media (min-width: 600px) {
    width: 8rem;
    height: 8rem;
    border-radius: 2rem;
  }
`;

export const ServiceImage = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

export const ServiceName = styled.p`
  margin-top: 1rem;
  text-align: center;
`;
