import { PartnerProps, PartnersProps } from './partners.types';

const getPartnerFromContentful = (
  content: any
): ReadonlyArray<PartnerProps> => {
  const {
    node: { partners },
  } = content.allContentfulLandingPagePartners.edges[0];

  return partners.map(({ title, fluid }: any) => ({
    name: title,
    img: fluid.src,
  })) as Array<PartnerProps>;
};

export const getPartnersFromContentful = (content: any): PartnersProps => {
  const { node } = content.allContentfulLandingPagePartners.edges[0];
  return {
    id: node.contentfulid,
    title: node.title,
    description: node.description,
    partners: getPartnerFromContentful(content),
  };
};
