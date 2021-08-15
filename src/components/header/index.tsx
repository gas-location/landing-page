import React, { FC } from 'react';

import { HeaderContent, HeaderLink, HeaderWrapper } from './header.styles';
import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContent>
      <h1>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </h1>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
