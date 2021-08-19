import React, { FC } from 'react';

import { Container } from '../layout/layout.styles';
import {
  Content,
  Description,
  GreetingsWrapper,
  Image,
  ImageWrapper,
  Title,
} from './greetings.styles';
import { GreetingsProps } from './greetings.types';

const Greetings: FC<GreetingsProps> = ({
  image,
  title,
  mainText,
  buttonText,
}) => (
  <GreetingsWrapper>
    <ImageWrapper>
      <Image src={image} alt="background" loading="lazy" />
    </ImageWrapper>
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{mainText}</Description>
        <button>{buttonText}</button>
      </Content>
    </Container>
  </GreetingsWrapper>
);

export default Greetings;
