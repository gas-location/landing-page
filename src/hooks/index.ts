import { graphql, useStaticQuery } from 'gatsby';

import { getGreetingsFromContentful } from '../components/greetings/greetings.helpers';
import {
  getNavItemsFromContentful,
  getNavLogoFromContentful,
} from '../components/header/header.helpers';
import { INavItem, INavLogo } from '../components/header/header.types';
import { GreetingsProps } from './../components/greetings/greetings.types';

type TUsePageContent = () => {
  navLogo: INavLogo;
  greetings: GreetingsProps;
  navItems: ReadonlyArray<INavItem>;
};

const usePageContent: TUsePageContent = () => {
  const pageContent = useStaticQuery(graphql`
    query {
      allContentfulLandingPageNavItem {
        edges {
          node {
            name
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
            backgroundImage {
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
    greetings: getGreetingsFromContentful(pageContent),
  };
};

export default usePageContent;
