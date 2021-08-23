import { AboutUsProps } from './about-us.types';

export const getAboutUsFromContentful = (content: any): AboutUsProps => {
  const { node } = content.allContentfulLandingPageAboutUs.edges[0];
  return {
    id: node.contentfulid,
    subtitle: node.subtitle,
    vision: node.vision,
    values: node.values,
    title: node.title,
    mission: node.mission,
    description: node.description,
    img: node.image.fluid.src,
  };
};
