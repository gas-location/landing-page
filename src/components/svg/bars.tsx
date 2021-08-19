/* eslint-disable react/react-in-jsx-scope */
import React, { FC, SVGAttributes } from 'react';

const Bars: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M27 18H0V15H27V18ZM27 10.5H0V7.5H27V10.5ZM27 3H0V0H27V3Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Bars;
