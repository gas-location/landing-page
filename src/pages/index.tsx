import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';

import { SEO } from '../components';
import Layout from '../components/layout';

const IndexPage: FC = () => (
  <Layout>
    <SEO />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
);

export default IndexPage;
