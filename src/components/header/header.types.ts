export interface INavItem {
  id: string;
  name: string;
  order: number;
}
export interface INavLogo {
  name: string;
  image: string;
}

export interface HeaderProps {
  navLogo: INavLogo;
  navItems: ReadonlyArray<INavItem>;
}
