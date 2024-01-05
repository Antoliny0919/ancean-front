import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --ancean-signature: #155B82;
    --background-shallow: rgba(55, 122, 178, 0.4);
    --shadow-logo-color: #67ABDB;
    --shadow-outline-deep-dark: #273237;
    --shadow-outline-shallow-dart: #39484F;
    --shadow-outline-latest-post: #6A6FC8;
  }  
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 16px;
    background-color: #fff;
    max-width: 2048px;
    margin-left: auto;
    margin-right: auto;
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

  // IntersectionObserver
  .fade-in-slide-down-suspend {
    opacity: 0;
    transform: translateY(-100px);
    transition: all 1s;
  }

  // swiper
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

  .post-cards-effect {
    width: 30vw;
    height: 35vw;
    margin-left: 0;
    margin-right: 0;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .swiper-category {
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .swiper-cards {
    overflow: visible;
  }

  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -20px;
  }

  .post-cards-effect .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .post-cards-effect .swiper-pagination {
    display: flex;
    z-index: 0;
    width: 100%;
  }

  .post-cards-effect .swiper-pagination-bullet {
    flex: 1 0 0;
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,4px));
    display: inline-block;
    border-radius: 3px;
    background: var(--swiper-pagination-bullet-inactive-color,#000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, .2);
  }

  .post-cards-effect .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, #388FBF);
  }

  .swiper-3d .swiper-slide-shadow {
    border-radius: 10px;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  .swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  // vertical pagination

  .vertical-pagination {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    height: 100%;
  }

  // coverflow-stretch-post

  .swiper-button-next, .swiper-rtl .swiper-button-prev {
      right: var(--swiper-navigation-sides-offset, 0px);
      left: auto;
  }
  .swiper-button-prev, .swiper-button-next {
      position: absolute;
      top: var(--swiper-navigation-top-offset, 50%);
      width: calc(var(--swiper-navigation-size) / 44 * 27);
      height: var(--swiper-navigation-size);
      margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
      z-index: 10;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .swiper-button-next {
    right: 5vw;
  }
  .swiper-button-prev {
    left: 5vw;
  }

  .swiper-button-next:after {
    content: ''
  }
  .swiper-button-prev:after {
    content: ''
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
  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }


  // editor js

  .ce-paragraph {
    font-family: 'Pretendard-Light';
    font-size: 16px;
    line-height: 1.6em;
    outline: none;
  }
  .cdx-block {
    padding: 0.3em 0;
  }

  .ce-block__content .ce-header {
    font-family: 'Pretendard-Bold';
    padding: 0.3em 0 0.3em;
    margin-bottom: 3px;
    margin-top: 0;
    line-height: 1.25em;
    outline: none;
    /* background-color: red; */
  }

  .ce-block__content {
    position: relative;
    max-width: 650px;
    margin: 0 auto;
    -webkit-transition: background-color .15s ease;
    transition: background-color .15s ease;
  } 

  code {
    font-size: 14px;
  }

  .ce-block__content {
    margin: 2rem 0;
    margin-left: auto;
    margin-right: auto;
  }

  .cdx-quote {
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    padding: 0.7rem 0.7rem 0.7rem 1.5rem;
    margin: 0;
    border-left: solid ${({ theme }) => theme.colors.post[3]} 4px;
    background-color: ${({ theme }) => theme.colors.post[0]};
    /* box-shadow: 1px 1px hsl(212, 65%, 35%), 
    2px 2px hsl(212, 65%, 32%), 
    3px 3px hsl(212, 65%, 29%); */
    margin: 2rem 0;
  }

  .cdx-quote .cdx-quote__text {
    padding: 0;
    border: none;
    webkit-box-shadow: none;
    box-shadow: none;
    min-height: 0;
    margin-bottom: 0;
  }

  .cdx-quote__caption {
    display: none;
  }
`;
