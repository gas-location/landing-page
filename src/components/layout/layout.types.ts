import { INavItem, INavLogo } from './../header/header.types';

export interface LayoutProps {
  navLogo: INavLogo;
  navItems: ReadonlyArray<INavItem>;
}
