import React, { FC } from 'react';

import { Description, H2 } from '../shared';
import {
  PartnersContainer,
  PartnersImagesContainer,
  PartnersWrapper,
} from './partners.styles';
import { PartnerProps, PartnersProps } from './partners.types';

const Partners: FC<PartnersProps> = ({ id, title, description, partners }) => (
  <PartnersWrapper id={id}>
    <PartnersContainer>
      <H2>{title}</H2>
      <Description>{description}</Description>

      <PartnersImagesContainer>
        {partners.map((partner: PartnerProps, index: number) => (
          <img src={partner.img} key={index} alt={partner.name} />
        ))}
      </PartnersImagesContainer>
    </PartnersContainer>
  </PartnersWrapper>
);

export default Partners;
