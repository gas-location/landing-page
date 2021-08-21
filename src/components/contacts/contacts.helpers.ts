import { ContactsProps, SocialMediaProps } from './contacts.types';

const getSocialMediaFromContentful = (
  content: any
): ReadonlyArray<SocialMediaProps> =>
  content.allContentfulLandingPageSocialMedia.edges.map(({ node }: any) => ({
    key: node.key,
    link: node.link,
  }));

export const getContactsFromContentful = (content: any): ContactsProps => {
  const { node } = content.allContentfulLandingPageContacts.edges[0];
  return {
    email: node.email,
    phone: node.phone,
    title: node.title,
    address: node.address,
    id: node.contentfulid,
    description: node.description,
    image: node.backgroundImage.fluid.src,
    socialMedias: getSocialMediaFromContentful(content),
  };
};
