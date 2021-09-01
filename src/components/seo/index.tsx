import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SEOProps } from './seo.types';

const SEO: FC<SEOProps> = ({ lang, title, description, children }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={`GasLocation${title ? ` | ${title}` : ''}`}
  >
    <meta name="description" content={description}></meta>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    {children}
  </Helmet>
);

export default SEO;
