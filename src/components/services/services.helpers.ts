import { ServiceProps, ServicesProps } from './services.types';

const getServiceFromContentful = (content: any): ReadonlyArray<ServiceProps> =>
  (
    content.allContentfulLandingPageService.edges.map(({ node }: any) => ({
      name: node.name,
      order: node.order,
      image: node.image.fluid.src,
    })) as Array<ServiceProps>
  ).sort((a, b) => a.order - b.order);

export const getServicesFromContentful = (content: any): ServicesProps => {
  const { node } = content.allContentfulLandingPageServices.edges[0];
  return {
    title: node.title,
    id: node.contentfulid,
    buttonText: node.buttonText,
    description: node.description,
    image: node.backgroundImage.fluid.src,
    services: getServiceFromContentful(content),
  };
};
