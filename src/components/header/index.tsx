import React, { FC, useState } from 'react';

import { BarsSVG } from '../svg';
import {
  HeaderContent,
  HeaderLink,
  HeaderWrapper,
  Image,
  LogoWrapper,
  Menu,
  MenuItem,
  MenuList,
  Nav,
} from './header.styles';
import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({ navItems, navLogo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <LogoWrapper to="/">
            <Image src={navLogo.image} alt={navLogo.name} loading="lazy" />
          </LogoWrapper>
          <Nav>
            {navItems.map(({ name, id }) => (
              <HeaderLink key={id} to={`/#${id}`}>
                {name}
              </HeaderLink>
            ))}
          </Nav>
          <Menu>
            <BarsSVG
              width="1.5rem"
              onClick={() => setIsMenuOpen((state) => !state)}
            />
          </Menu>
        </HeaderContent>
      </HeaderWrapper>
      {isMenuOpen && (
        <MenuList>
          {navItems.map(({ name, id }) => (
            <HeaderLink key={id} to={`/#${id}`}>
              <MenuItem>{name}</MenuItem>
            </HeaderLink>
          ))}
        </MenuList>
      )}
    </>
  );
};

export default Header;
