import React, { FC } from 'react';

import { FooterWrapper } from './footer.styles';

const Footer: FC = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built with{' '}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </FooterWrapper>
);

export default Footer;
