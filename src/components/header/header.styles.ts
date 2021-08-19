import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const HeaderWrapper = styled.header`
  top: 0;
  position: sticky;
  background: #ffffff;
`;

export const HeaderContent = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  max-width: 960px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
  height: 2.5rem;
  @media (min-width: 600px) {
    height: 3.5rem;
  }
`;

export const HeaderLink = styled(Link)`
  color: #000000;
  display: inline-block;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
  }
`;

export const Menu = styled.div`
  max-height: 2rem;
  display: inline-flex;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  right: 0;
  z-index: 1;
  width: 20rem;
  padding: 1rem;
  display: flex;
  position: fixed;
  margin-top: 1rem;
  margin-right: 0.6rem;
  border-radius: 0.7rem;
  background-color: #fff;
  flex-direction: column;
  box-shadow: 0 0 0.5rem 0 #0002;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #eee;
  }
`;

export const Image = styled.img`
  height: 100%;
`;
