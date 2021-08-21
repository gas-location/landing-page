import React, { FC } from 'react';

import {
  ServiceImage,
  ServiceImageWrapper,
  ServiceName,
  ServiceWrapper,
} from './service.styles';
import { ServiceProps } from './services.types';

const Service: FC<ServiceProps> = ({ image, name }) => (
  <ServiceWrapper>
    <ServiceImageWrapper>
      <ServiceImage src={image} alt={name} />
    </ServiceImageWrapper>
    <ServiceName>{name}</ServiceName>
  </ServiceWrapper>
);

export default Service;
