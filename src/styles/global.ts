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
    margin-bottom: 1rem;
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
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  input[type='text'],
  textarea {
    width: 100%;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 0.2px solid #00000033;
  }
  input[type='button'],
  input[type='submit'],
  input[type='reset'] {
    border: none;
    outline: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border-radius: 0.8rem;
    background-color: #263238;
  }
`;

export default GlobalStyles;
