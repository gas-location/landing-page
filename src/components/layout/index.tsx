import { Global } from '@emotion/react';
import React, { FC } from 'react';

import GlobalStyles from '../../styles/global';
import Footer from '../footer';
import Header from '../header';
import AboutUs from '../aboutUs';
import { Content } from './layout.styles';

const Layout: FC = ({children}) => (
  <>
    <Global styles={GlobalStyles} />
    <Header siteTitle="GasLocation" />
    <Content>
      <main>
        {children}
        <AboutUs/>
      </main>
      <Footer />
    </Content>
  </>
);

export default Layout;
