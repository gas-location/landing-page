import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SEOProps } from './seo.types';

const SEO: FC<SEOProps> = ({ lang, meta, title, children }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={`GasLocation${title ? ` | ${title}` : ''}`}
    meta={meta}
  >
    {children}
  </Helmet>
);

export default SEO;
