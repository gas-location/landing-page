import React, { FC } from 'react';

import { SEO } from '../components';
import Greetings from '../components/greetings';
import Layout from '../components/layout';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const { navItems, navLogo, greetings } = usePageContent();

  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <SEO />
      <Greetings {...greetings} />
    </Layout>
  );
};

export default IndexPage;
