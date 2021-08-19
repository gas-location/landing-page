import { INavItem, INavLogo } from './header.types';

export const getNavItemsFromContentful = (
  content: any
): ReadonlyArray<INavItem> =>
  content.allContentfulLandingPageNavItem.edges.map(({ node }: any) => ({
    name: node.name,
    id: node.contentfulid,
  }));

export const getNavLogoFromContentful = (content: any): INavLogo => {
  const { node } = content.allContentfulLandingPageNavLogo.edges[0];
  return {
    name: node.name,
    image: node.image.fluid.src,
  };
};
