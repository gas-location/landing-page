import { css } from '@emotion/react';

const GlobalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  html {
    font-size: 75%;
    scroll-behavior: smooth;
    @media (min-width: 60px) {
      font-size: 85%;
    }
    @media (min-width: 900px) {
      font-size: 90%;
    }
    @media (min-width: 1200px) {
      font-size: 95%;
    }
    @media (min-width: 1800px) {
      font-size: 100%;
    }
  }
  body {
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 2;
    font-family: 'Poppins', sans-serif;
  }
  button {
    border: none;
    outline: none;
    color: #030f1c;
    cursor: pointer;
    font-size: 1.2rem;
    background: #eba22f;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
