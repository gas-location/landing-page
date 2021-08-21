import { HomeProps } from './home.types';

export const getHomeFromContentful = (content: any): HomeProps => {
  const { node } = content.allContentfulLandingPageHeader.edges[0];
  return {
    title: node.title,
    id: node.contentfulid,
    mainText: node.mainText,
    buttonText: node.buttonText,
    image: node.backgroundImage.fluid.src,
  };
};
