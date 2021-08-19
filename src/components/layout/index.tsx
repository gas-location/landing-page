import { Global } from '@emotion/react';
import React, { FC } from 'react';

import GlobalStyles from '../../styles/global';
import Footer from '../footer';
import Header from '../header';
import { Container } from './layout.styles';
import { LayoutProps } from './layout.types';

const Layout: FC<LayoutProps> = ({ navItems, navLogo, children }) => (
  <>
    <Global styles={GlobalStyles} />
    <Header navItems={navItems} navLogo={navLogo} />
    <main>{children}</main>
    <Container>
      <Footer />
    </Container>
  </>
);

export default Layout;
