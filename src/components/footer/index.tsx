import React, { FC } from 'react';

import { Container } from '../shared';
import { FooterText, FooterWrapper } from './footer.styles';

const Footer: FC = () => (
  <FooterWrapper>
    <Container>
      <FooterText>
        <strong>Gas Location</strong> © {new Date().getFullYear()} · Todos os
        direitos reservados
      </FooterText>
    </Container>
  </FooterWrapper>
);

export default Footer;
