import React, { FC } from 'react';

import {
  AboutUs,
  Contacts,
  Home,
  Layout,
  Partners,
  SEO,
  Services,
} from '../components';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const { navItems, navLogo, home, services, contacts, aboutUs, partners } =
    usePageContent();

  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <SEO />
      <Home {...home} />
      <AboutUs {...aboutUs} />
      <Services {...services} />
      <Partners {...partners} />
      <Contacts {...contacts} />
    </Layout>
  );
};

export default IndexPage;
