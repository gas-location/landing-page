import React, { FC } from 'react';

import { Container, Description, H2 } from '../shared';
import Service from './service';
import {
  ContainerWrapper,
  Content,
  ContentSide,
  Image,
  ImageWrapper,
  ServicesSection,
  ServicesSide,
} from './service.styles';
import { ServicesProps } from './services.types';

const Services: FC<ServicesProps> = ({
  id,
  image,
  title,
  services,
  buttonText,
  description,
}) => (
  <ServicesSection id={id}>
    <ImageWrapper>
      <Image src={image} alt={title} />
    </ImageWrapper>
    <ContainerWrapper>
      <Container>
        <Content>
          <ContentSide>
            <div>
              <H2>{title}</H2>
              <Description>{description}</Description>
            </div>
            <button>{buttonText}</button>
          </ContentSide>
          <ServicesSide>
            {services.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </ServicesSide>
        </Content>
      </Container>
    </ContainerWrapper>
  </ServicesSection>
);

export default Services;
