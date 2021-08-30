import { SolutionProps } from './solution.types';

export const getSolutionFromContentful = (content: any): SolutionProps => {
  const { node } = content.allContentfulLandingPageSolution.edges[0];
  return {
    title: node.title,
    id: node.contentfulid,
    description: node.description,
    mobileImage: node.solution.fluid.src,
    illustrationImage: node.illustration.fluid.src,
  };
};
