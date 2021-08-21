import React, { FC } from 'react';

import { Container, Description, H1 } from '../shared';
import {
  ContainerWrapper,
  Content,
  HomeWrapper,
  Image,
  ImageWrapper,
} from './home.styles';
import { HomeProps } from './home.types';

const Home: FC<HomeProps> = ({ id, image, title, mainText, buttonText }) => (
  <HomeWrapper id={id}>
    <ImageWrapper>
      <Image src={image} alt="background" loading="lazy" />
    </ImageWrapper>
    <ContainerWrapper>
      <Container>
        <Content>
          <H1>{title}</H1>
          <Description>{mainText}</Description>
          <button>{buttonText}</button>
        </Content>
      </Container>
    </ContainerWrapper>
  </HomeWrapper>
);

export default Home;
