import React, { FC } from 'react';

import {
  AboutUsWrapper,
  ContentWrapper,
  Description,
  LogoImage,
  Subtitle,
  Title,
  Values,
} from './about-us.styles';
import { AboutUsProps } from './about-us.types';

const AboutUs: FC<AboutUsProps> = ({
  id,
  subtitle,
  vision,
  values,
  title,
  mission,
  description,
  img,
}) => (
  <AboutUsWrapper id={id}>
    <LogoImage src={img} alt="background" loading="lazy" />
    <ContentWrapper>
      <div>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <Values>
        <div>
          <img src="" alt="" />
          <h4>
            <strong>Missão</strong>
          </h4>
          <p>{mission}</p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>
            <strong>Vissão</strong>
          </h4>
          <p>{vision}</p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>
            <strong>Valores</strong>
          </h4>
          <p>{values}</p>
        </div>
      </Values>
    </ContentWrapper>
  </AboutUsWrapper>
);

export default AboutUs;
