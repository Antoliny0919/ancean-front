import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    /* height: 100%;
    width: 100%; */
    line-height: 1.6;
    font-size: 16px;
    background-color: #fff;
  }

  /* #__next {
    height: inherit;
    width: inherit;
  } */

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
