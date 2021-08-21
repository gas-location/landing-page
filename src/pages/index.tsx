import React, { FC } from 'react';

import { Contacts, Home, Layout, SEO, Services } from '../components';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const { navItems, navLogo, home, services, contacts } = usePageContent();

  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <SEO />
      <Home {...home} />
      <Services {...services} />
      <Contacts {...contacts} />
    </Layout>
  );
};

export default IndexPage;
