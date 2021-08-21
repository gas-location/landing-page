import React, { FC } from 'react';

import { SEO } from '../components';
import Home from '../components/home';
import Layout from '../components/layout';
import Services from '../components/services';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const { navItems, navLogo, home, services } = usePageContent();

  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <SEO />
      <Home {...home} />
      <Services {...services} />
    </Layout>
  );
};

export default IndexPage;
