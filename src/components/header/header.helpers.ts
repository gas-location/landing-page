import { INavItem, INavLogo } from './header.types';

export const getNavItemsFromContentful = (
  content: any
): ReadonlyArray<INavItem> =>
  (
    content.allContentfulLandingPageNavItem.edges.map(({ node }: any) => ({
      name: node.name,
      order: node.order,
      id: node.contentfulid,
    })) as Array<INavItem>
  ).sort((a, b) => a.order - b.order);

export const getNavLogoFromContentful = (content: any): INavLogo => {
  const { node } = content.allContentfulLandingPageNavLogo.edges[0];
  return {
    name: node.name,
    image: node.image.fluid.src,
  };
};
