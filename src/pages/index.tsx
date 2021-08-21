import React, { FC } from 'react';

import { SEO } from '../components';
<<<<<<< HEAD
import Home from '../components/home';
import Layout from '../components/layout';
import Services from '../components/services';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const { navItems, navLogo, home, services } = usePageContent();
=======
import Greetings from '../components/greetings';
import Layout from '../components/layout';
import usePageContent from '../hooks';

const IndexPage: FC = () => {
  const { navItems, navLogo, greetings } = usePageContent();
>>>>>>> 58ca45034cb171e7af202cf3aec8fee9ca5b054d

  return (
    <Layout navItems={navItems} navLogo={navLogo}>
      <SEO />
<<<<<<< HEAD
      <Home {...home} />
      <Services {...services} />
=======
      <Greetings {...greetings} />
>>>>>>> 58ca45034cb171e7af202cf3aec8fee9ca5b054d
    </Layout>
  );
};

export default IndexPage;
