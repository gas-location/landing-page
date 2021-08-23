import { graphql, useStaticQuery } from 'gatsby';

import { getAboutUsFromContentful } from '../components/about-us/about-us.helpers';
import { AboutUsProps } from '../components/about-us/about-us.types';
import { getContactsFromContentful } from '../components/contacts/contacts.helpers';
import { ContactsProps } from '../components/contacts/contacts.types';
import {
  getNavItemsFromContentful,
  getNavLogoFromContentful,
} from '../components/header/header.helpers';
import { INavItem, INavLogo } from '../components/header/header.types';
import { getHomeFromContentful } from '../components/home/home.helpers';
import { HomeProps } from '../components/home/home.types';
import { getPartnersFromContentful } from '../components/partners/partners.helpers';
import { PartnersProps } from '../components/partners/partners.types';
import { getServicesFromContentful } from '../components/services/services.helpers';
import { ServicesProps } from '../components/services/services.types';

type TUsePageContent = () => {
  navLogo: INavLogo;
  home: HomeProps;
  navItems: ReadonlyArray<INavItem>;
  services: ServicesProps;
  partners: PartnersProps;
  contacts: ContactsProps;
  aboutUs: AboutUsProps;
};

const usePageContent: TUsePageContent = () => {
  const pageContent = useStaticQuery(graphql`
    query {
      allContentfulLandingPageNavItem {
        edges {
          node {
            name
            order
            contentfulid
          }
        }
      }
      allContentfulLandingPageNavLogo {
        edges {
          node {
            name
            image {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulLandingPageHeader {
        edges {
          node {
            mainText
            title
            buttonText
            contentfulid
            backgroundImage {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulLandingPageServices {
        edges {
          node {
            backgroundImage {
              fluid {
                src
              }
            }
            buttonText
            description
            contentfulid
            title
          }
        }
      }
      allContentfulLandingPageService {
        edges {
          node {
            name
            order
            image {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulLandingPageSocialMedia {
        edges {
          node {
            link
            key
          }
        }
      }
      allContentfulLandingPageContacts {
        edges {
          node {
            address
            description
            email
            phone
            title
            contentfulid
            backgroundImage {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulLandingPageServices {
        edges {
          node {
            backgroundImage {
              fluid {
                src
              }
            }
            buttonText
            description
            contentfulid
            title
          }
        }
      }
      allContentfulLandingPageService {
        edges {
          node {
            name
            order
            image {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulLandingPageAboutUs {
        edges {
          node {
            contentfulid
            subtitle
            vision
            values
            title
            mission
            description
            image {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulLandingPagePartners {
        edges {
          node {
            contentfulid
            description
            title
            partners {
              title
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  return {
    navLogo: getNavLogoFromContentful(pageContent),
    navItems: getNavItemsFromContentful(pageContent),
    home: getHomeFromContentful(pageContent),
    services: getServicesFromContentful(pageContent),
    contacts: getContactsFromContentful(pageContent),
    aboutUs: getAboutUsFromContentful(pageContent),
    partners: getPartnersFromContentful(pageContent),
  };
};

export default usePageContent;
