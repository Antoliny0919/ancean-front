import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 18px;
    background-color: #fff;
  }

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
