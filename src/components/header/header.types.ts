export interface INavItem {
  id: string;
  name: string;
}
export interface INavLogo {
  name: string;
  image: string;
}

export interface HeaderProps {
  navLogo: INavLogo;
  navItems: ReadonlyArray<INavItem>;
}
