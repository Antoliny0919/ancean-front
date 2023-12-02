import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 16px;
    background-color: #fff;
  }

  main {
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
  .swiper-slide {
    transform: translateZ(0);
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper {
    margin-left: 0;
    margin-right: 0;
  }
  .swiper-wrapper {
    display: flex;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
