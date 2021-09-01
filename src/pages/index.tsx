import React, { FC } from 'react';

import {
  AboutUs,
  Contacts,
  Home,
  Layout,
  Partners,
  SEO,
  Services,
  Solution,
} from '../components';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const {
    navItems,
    navLogo,
    home,
    services,
    contacts,
    aboutUs,
    partners,
    solution,
  } = usePageContent();
  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <SEO lang="pt" description={aboutUs.description} />
      <Home {...home} />
      <AboutUs {...aboutUs} />
      <Solution {...solution} />
      <Services {...services} />
      <Partners {...partners} />
      <Contacts {...contacts} />
    </Layout>
  );
};

export default IndexPage;
