import { GreetingsProps } from './greetings.types';

export const getGreetingsFromContentful = (content: any): GreetingsProps => {
  const { node } = content.allContentfulLandingPageHeader.edges[0];
  return {
    title: node.title,
    mainText: node.mainText,
    buttonText: node.buttonText,
    image: node.backgroundImage.fluid.src,
  };
};
