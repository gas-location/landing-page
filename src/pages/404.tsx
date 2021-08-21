import React, { FC } from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import usePageContent from '../hooks';

const NotFoundPage: FC = () => {
  const { navItems, navLogo } = usePageContent();

  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
